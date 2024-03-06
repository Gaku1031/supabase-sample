import React, { FC, useCallback, useState } from 'react'
import { EditUser } from './presentation'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { UpdateUserType } from '@/services/schema/types'
import { UpdateUserSchema } from '@/services/schema'
import { supabase } from '@/utils/supabaseClient'
import { toast } from 'react-toastify'


export const Container: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const router = useRouter()
  const userId = router.query.userId as string;

  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data: user } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/current-user/${userId}`, fetcher, {
    revalidateOnFocus: false,
  })

  const form = useForm<UpdateUserType>({
    resolver: zodResolver(UpdateUserSchema),
    defaultValues: {
      name: user?.name,
      email: user?.email,
      is_admin: user?.is_admin
    }
  })

  const onSubmit = useCallback(async (data: UpdateUserType) => {
    try {
      setIsLoading(true);

      const { data, error } = await supabase.auth.updateUser({
        email: form.getValues('email'),
      })

      if (error) {
        throw error;
      }

      // ユーザー情報をsupabaseのpublicテーブルに保存する処理
      if (data && data.user) {
        const { error: upsertError } = await supabase.from('users').upsert([
          { id: data.user.id, email: data.user.email, name: form.getValues('name'), is_admin: form.getValues('is_admin') }
        ]);

        if (upsertError) {
          throw upsertError
        }
      }

    } catch (error) {
      setIsLoading(false);
      toast.error('エラーが発生しました');
    } finally {
      setIsLoading(false);
      router.push('/admin/users');
    }
  }, [form, router]);

  if (!user) {
    return null
  }

  return (
    <EditUser 
      form={form}
      onSubmit={onSubmit}
      isLoading={isLoading}
      user={user}
    />
  )
}
