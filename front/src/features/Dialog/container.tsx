import { FC, useState, useCallback } from 'react'
import { Modal } from './presentation'
import useSWR, { mutate } from 'swr'
import { PageSpinner } from '@/components/atoms/PageSpinner'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { studyRecordSchema } from "@/services/schema";
import { StudyRecordType } from "@/services/schema/types";
import { useUserInfo } from '@/hooks/useUserInfo';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

export const Container: FC = () => {
  const { control, register, handleSubmit, formState: { errors } } = useForm<StudyRecordType>({
    resolver: zodResolver(studyRecordSchema),
    defaultValues: {
      study_date: '',
      study_hours: 0,
      contents: [],
      languages: [],
    }
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const { user } = useUserInfo();
  const userId = user?.id;

  const year = router.query.year;
  const month = router.query.month;

  const onSubmit = useCallback(async (data: StudyRecordType) => {
    try {
      setIsLoading(true);
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/study/${userId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // 複数のAPIキャッシュを更新する
      const endpoints = [
        `${process.env.NEXT_PUBLIC_API_URL}/languages/total-hours/${userId}`, 
        `${process.env.NEXT_PUBLIC_API_URL}/contents/total-hours/${userId}`, 
        `${process.env.NEXT_PUBLIC_API_URL}/total-hours/today/${userId}`,
        `${process.env.NEXT_PUBLIC_API_URL}/total-hours/month/${year}/${month}/${userId}`,
        `${process.env.NEXT_PUBLIC_API_URL}/total-hours/all/${userId}`,
        `${process.env.NEXT_PUBLIC_API_URL}/hours/${year}/${month}/${userId}`,
      ]; // 更新したいエンドポイントのリスト
      await Promise.all(endpoints.map(endpoint => mutate(endpoint)));

    } catch (error) {
      setIsLoading(false);
      toast.error('エラーが発生しました');
    } finally {
      setIsLoading(false);
      setOpen(false);
    }
  }, [userId, year, month]);

  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data: contents, isLoading: contentsLoading } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/contents`, fetcher, {
    revalidateOnFocus: false,
  });

  const { data: languages, isLoading: languagesLoading } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/languages`, fetcher, {
    revalidateOnFocus: false,
  })

  if (contentsLoading || languagesLoading) {
    return <PageSpinner />
  }

  return (
    <Modal 
      contents={contents.data}
      languages={languages.data}
      handleSubmit={handleSubmit}
      control={control}
      errors={errors}
      register={register}
      onSubmit={onSubmit}
      isLoading={isLoading}
      open={open}
      setOpen={setOpen}
    />
  )
}
