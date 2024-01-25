import React, { FC } from 'react';
import { MonthlyBarChart } from './presentation';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { useUserInfo } from '@/hooks/useUserInfo';

export const Container: FC = () => {
  const router = useRouter();

  const { user } = useUserInfo();
  const userId = user?.id;

  const year = parseInt(router.query.year as string);
  const month = parseInt(router.query.month as string);

  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data: monthlyHours } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/hours/${year}/${month}/${userId}`, fetcher);

  return (
    <MonthlyBarChart 
      monthlyHours={monthlyHours}
    />
  );
}
