import React, { FC, useCallback, useState } from 'react'
import { EditContents } from './presentation'
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { UpdateContentsType } from '@/services/schema/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { UpdateContentsSchema } from '@/services/schema';
import useSWR from 'swr';
import { toast } from 'react-toastify';

export const Container: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const id = router.query.id;

  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data: contents } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/contents/${id}`, fetcher, {
    revalidateOnFocus: false,
  });

  const form = useForm<UpdateContentsType>({
    resolver: zodResolver(UpdateContentsSchema),
    defaultValues: {
      name: contents?.name,
    }
  })

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);

      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contents/update/${id}`, {
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
      router.push('/admin/contents');
    }
  }, [form, router, id]);

  if (!contents) {
    return null;
  }

  return (
    <EditContents 
      isLoading={isLoading}
      onSubmit={onSubmit}
      form={form}
      contents={contents}
    />
  )
}
