import React, { FC } from 'react';
import { LanguageGraph } from './presentation';
import useSWR from 'swr';
import { useUserInfo } from '@/hooks/useUserInfo';

export const Container: FC = () => {
  const { user } = useUserInfo();
  const userId = user?.id;

  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data: languageNames } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/languages`, fetcher, {
    revalidateOnFocus: false,
    key: userId,
  });
  const { data: totalHours } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/languages/total-hours/${userId}`, fetcher, {
    revalidateOnFocus: false,
    key: userId,
  });

  return (
    <LanguageGraph 
      languageNames={languageNames}
      totalHours={totalHours}
    />
  );
}
