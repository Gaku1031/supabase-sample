import React, { FC } from 'react'
import { Contents } from './presentation'
import useSWR from 'swr'
import { PageSpinner } from '@/components/atoms/PageSpinner';
import { ContentsType } from '@/services/schema/types';

export const Container: FC = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data: contents, isLoading, error } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/contents`, fetcher, {
    revalidateOnFocus: false,
  });

  const contentsArray = contents?.data?.map((content: ContentsType) => {
    return {
      id: content.id,
      name: content.name
    };
  });

  if (error) {
    return <></>
  }

  if (isLoading) {
    return <PageSpinner />
  }

  return (
    <Contents 
      contents={contentsArray}
    />
  )
}
