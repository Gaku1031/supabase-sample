import React, { FC, useState, useCallback } from 'react'
import { CreateContents } from './presentation'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form';
import { CreateContentsType } from '@/services/schema/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { CreateContentsSchema } from '@/services/schema';
import { toast } from 'react-toastify';

export const Container: FC = () => {
  const router = useRouter();
  const form = useForm<CreateContentsType>({
    resolver: zodResolver(CreateContentsSchema),
    defaultValues: {
      name: '',
    }
  })

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contents/create`, {
        method: "POST",
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
      router.push('/admin/contents');
    }
  }, [router, form]);

  return (
    <CreateContents 
      isLoading={isLoading}
      onSubmit={onSubmit}
      form={form}
    />
  )
}
