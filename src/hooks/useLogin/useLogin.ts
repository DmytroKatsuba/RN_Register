import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';
import {useState} from 'react';

export const useLogin = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const PhoneForm = z.object({
    phone: z
      .string()
      .min(1, 'Phone is required')
      .min(10, 'Enter a valid phone number')
      .max(10, 'Enter a valid phone number'),
  });

  type PhoneFormType = z.infer<typeof PhoneForm>;
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<PhoneFormType>({
    resolver: zodResolver(PhoneForm),
    defaultValues: {
      phone: '',
    },
  });

  const onSubmit = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };
  return {loading, onSubmit: handleSubmit(onSubmit), control, errors};
};
