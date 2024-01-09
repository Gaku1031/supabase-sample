import React, { FC, useCallback, useState } from 'react'
import { Login } from './presentation'
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { LoginFormType } from '@/services/schema/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginFormSchema } from '@/services/schema';
import { supabase } from '@/utils/supabaseClient';
import { toast } from 'react-toastify';

export const Container: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const {
    register, 
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<LoginFormType>({
    resolver: zodResolver(loginFormSchema),
  })

  const onSubmit = useCallback(async () => {
    setIsLoading(true);
    const formData = getValues();

    try {
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      })
      if (signInError) {
        throw signInError;
      }
      await router.push('/');
    } catch (error) {
      toast.error('ログインに失敗しました');
    } finally {
      setIsLoading(false);
    }
  }, [getValues, router]);

  return (
    <Login 
      register={register}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      errors={errors}
      isLoading={isLoading}
    />
  )
}
