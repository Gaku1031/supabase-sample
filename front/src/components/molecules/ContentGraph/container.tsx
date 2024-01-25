import React, { FC } from 'react';
import useSWR from 'swr';
import { ContentGraph } from './presentation';
import { useUserInfo } from '@/hooks/useUserInfo';

export const Container: FC = () => {
  const { user } = useUserInfo();
  const userId = user?.id;

  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data: contentNames } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/contents`, fetcher);
  const { data: totalHours } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/contents/total-hours/${userId}`, fetcher);

  return (
    <ContentGraph 
      contentNames={contentNames}
      totalHours={totalHours}
    />
  )
}
