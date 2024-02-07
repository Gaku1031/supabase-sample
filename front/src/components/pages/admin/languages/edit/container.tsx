import React, { FC, useCallback, useState } from 'react'
import { EditLanguages } from './presentation'
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { useForm } from 'react-hook-form';
import { UpdateLanguagesType } from '@/services/schema/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { UpdateLanguagesSchema } from '@/services/schema';
import { toast } from 'react-toastify';

export const Container: FC = () => {
  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const router = useRouter();

  const id = router.query.id;

  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data: languages } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/languages/${id}`, fetcher, {
    revalidateOnFocus: false,
  })

  const form = useForm<UpdateLanguagesType>({
    resolver: zodResolver(UpdateLanguagesSchema),
    defaultValues: {
      name: languages?.name
    }
  })

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);

      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/languages/update/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form.getValues()),
      });
    } catch (error) {
      setIsLoading(false);
      toast.error('エラーが発生しました');
    } finally {
      setIsLoading(false);
      router.push('/admin/languages');
    }
  }, [form, router, id]);

  if (!languages) {
    return null;
  }

  return (
    <EditLanguages 
      isLoading={isLoading}
      onSubmit={onSubmit}
      form={form}
      languages={languages}
    />
  )
}
