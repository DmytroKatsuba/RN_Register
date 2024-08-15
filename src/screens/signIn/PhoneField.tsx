import React from 'react';
import {Control, Controller} from 'react-hook-form';
import {TextInput} from 'react-native';
import {z} from 'zod';

const PhoneForm = z.object({
  phone: z
    .string()
    .min(1, 'Phone is required')
    .min(10, 'Enter a valid phone number')
    .max(10, 'Enter a valid phone number'),
});

type PhoneFormType = z.infer<typeof PhoneForm>;

interface PhoneFieldProps {
  control: Control<PhoneFormType>;
  error: string | undefined;
}

export const PhoneField = ({control}: PhoneFieldProps) => (
  <Controller
    name="phone"
    control={control}
    render={({field: {onChange, value}}) => (
      <TextInput
        value={value}
        placeholder="Phone number"
        onChangeText={(text: string) => onChange(text.replace(/[^0-9]/g, ''))}
        autoCapitalize="none"
        autoComplete="tel"
        autoFocus={true}
        keyboardType="phone-pad"
      />
    )}
  />
);
