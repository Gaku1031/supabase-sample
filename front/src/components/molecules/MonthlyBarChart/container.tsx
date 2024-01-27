import React, { FC } from 'react';
import { MonthlyBarChart } from './presentation';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { useUserInfo } from '@/hooks/useUserInfo';

export const Container: FC = () => {
  const router = useRouter();

  const { user } = useUserInfo();
  const userId = user?.id;

  const year = router.query.year;
  const month = router.query.month;

  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data: monthlyHours } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/hours/${year}/${month}/${userId}`, fetcher, {
    revalidateOnFocus: false,
    key: [year, month, userId],
  });

  return (
    <MonthlyBarChart 
      monthlyHours={monthlyHours}
    />
  );
}
