import {zodResolver} from '@hookform/resolvers/zod';
import {Controller, useForm} from 'react-hook-form';
import {TextInput, View} from 'react-native';
import React from 'react';
import {Button} from '../../components/button/Button';
import {z} from 'zod';
import {Styled} from '../../components/styled';
import {InputContainer} from '../signIn/styled';

export type SignUpFormType = {
  name: string;
  lastName: string;
  phone: string;
};

export const SignUpForm = ({
  onSubmit,
  defaultValues,
  loading,
}: {
  onSubmit: (data: SignUpFormType) => void;
  defaultValues: SignUpFormType;
  loading: boolean;
}) => {
  const SignUpSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    lastName: z.string().min(1, 'Last Name is required'),
    phone: z
      .string()
      .min(1, 'Phone is required')
      .min(10, 'Enter a valid phone number')
      .max(10, 'Enter a valid phone number'),
  });

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<SignUpFormType>({
    resolver: zodResolver(SignUpSchema),
    defaultValues,
  });

  return (
    <View>
      {errors.name?.message ? (
        <Styled.Body2 color="#e02626">{errors.name?.message}</Styled.Body2>
      ) : null}
      <Controller
        name="name"
        control={control}
        render={({field: {onChange, value}}) => (
          <InputContainer error={!!errors.name?.message}>
            <TextInput
              value={value}
              placeholder="Enter name"
              onChangeText={onChange}
            />
          </InputContainer>
        )}
      />
      {errors.lastName?.message ? (
        <Styled.Body2 color="#e02626">{errors.lastName?.message}</Styled.Body2>
      ) : null}
      <Controller
        name="lastName"
        control={control}
        render={({field: {onChange, value}}) => (
          <InputContainer error={!!errors.lastName?.message}>
            <TextInput
              value={value}
              placeholder="Enter last name"
              onChangeText={onChange}
            />
          </InputContainer>
        )}
      />
      {errors.phone?.message ? (
        <Styled.Body2 color="#e02626">{errors.phone?.message}</Styled.Body2>
      ) : null}
      <Controller
        name="phone"
        control={control}
        render={({field: {onChange, value}}) => (
          <InputContainer error={!!errors.phone?.message}>
            <TextInput
              value={value}
              placeholder="Phone number"
              onChangeText={(text: string) =>
                onChange(text.replace(/[^0-9]/g, ''))
              }
              autoCapitalize="none"
              autoComplete="tel"
              keyboardType="phone-pad"
            />
          </InputContainer>
        )}
      />

      <Button
        preset="primary"
        title={'Login'}
        onPress={handleSubmit(onSubmit)}
        disabled={loading}
        isLoading={loading}
      />
    </View>
  );
};
