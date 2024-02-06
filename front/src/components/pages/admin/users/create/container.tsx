import React, { FC, useCallback, useState } from 'react'
import { CreateUser } from './presentation'
import { useForm } from 'react-hook-form'
import { CreateUserType } from '@/services/schema/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { CreateUserSchema } from '@/services/schema'
import { toast } from 'react-toastify';
import { supabase } from '@/utils/supabaseClient'
import { useRouter } from 'next/router'

export const Container: FC = () => {
  const router = useRouter();
  const form = useForm<CreateUserType>({
    resolver: zodResolver(CreateUserSchema),
    defaultValues: {
      name: '',
      email: '',
      is_admin: false
    }
  })

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const onSubmit = useCallback(async (data: CreateUserType) => {
    try {
      setIsLoading(true);

      const { data, error: signUpError } = await supabase.auth.signUp({
        email: form.getValues('email'),
        password: 'password',
      });

      // ユーザー情報をsupabaseのpublicテーブルに保存する処理
      if (data && data.user) {
        const { error: upsertError } = await supabase.from('users').upsert([
          { id: data.user.id, email: data.user.email, name: form.getValues('name'), is_admin: form.getValues('is_admin') }
        ]);

        if (upsertError) {
          throw upsertError
        }
      }

      if (signUpError) {
        throw signUpError;
      }

    } catch (error) {
      setIsLoading(false);
      toast.error('エラーが発生しました');
    } finally {
      setIsLoading(false);
      router.push('/admin/users');
    }
  }, [form, router]);

  return (
    <CreateUser 
      isLoading={isLoading}
      onSubmit={onSubmit}
      form={form}
    />
  )
}
