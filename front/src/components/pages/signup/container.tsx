import React, { FC, useCallback, useState } from 'react'
import { SignUp } from './presentation'
import { useForm } from 'react-hook-form'
import { SignUpFormType } from '@/services/schema/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { signUpFormSchema } from '@/services/schema'
import { supabase } from '@/utils/supabaseClient'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'

export const Container: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<SignUpFormType>({
    resolver: zodResolver(signUpFormSchema),
  });

  const onSubmit = useCallback(async () => {
    const formData = getValues();
    setIsLoading(true);
    try {
      const { data, error: signUpError } = await supabase.auth.signUp(
        {
          email: formData.email,
          password: formData.password,
        },
      );

      if (signUpError) {
        throw signUpError;
      }

      // ユーザー情報をsupabaseのpublicテーブルに保存する処理
      if (data && data.user) {
        await supabase.from('users').upsert([
          { id: data.user.id, email: data.user.email, name: formData.name }
        ]);
      }

      await router.push('/login')
    } catch (error) {
      toast.error('登録に失敗しました')
    } finally {
      setIsLoading(false);
    }
  }, [getValues, router])

  return (
    <SignUp 
      register={register}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      errors={errors}
      isLoading={isLoading}
    />
  )
}
