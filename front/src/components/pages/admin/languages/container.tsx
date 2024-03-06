import React, { FC } from 'react'
import { Languages } from './presentation'
import useSWR from 'swr'
import { LanguagesType } from '@/services/schema/types';
import { PageSpinner } from '@/components/atoms/PageSpinner';

export const Container: FC = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data: languages, isLoading, error } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/languages`, fetcher, {
    revalidateOnFocus: false,
  });

  const languagesArray = languages?.data?.map((language: LanguagesType) => {
    return {
      id: language.id,
      name: language.name
    }
  })

  if (error) {
    return <></>
  }

  if (isLoading) {
    return <PageSpinner />
  }

  return (
    <Languages 
      languages={languagesArray}
    />
  )
}
