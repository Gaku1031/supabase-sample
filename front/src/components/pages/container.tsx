import React, { FC, useState } from 'react'
import { Index } from './presentation'
import useSWR from 'swr'
import { useRouter } from 'next/router'
import { PageSpinner } from '../atoms/PageSpinner'
import { useUserInfo } from '@/hooks/useUserInfo'

export const Container: FC = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const year = parseInt(router.query.year as string);
  const month = parseInt(router.query.month as string);

  const { user } = useUserInfo();
  const userId = user?.id;

  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data: todayHours, isLoading: todayHoursLoading } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/total-hours/today/${userId}`, fetcher)
  const { data: monthHours, isLoading: monthHoursLoading } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/total-hours/month/${year}/${month}/${userId}`, fetcher)
  const { data: totalHours, isLoading: totalHoursLoading } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/total-hours/all/${userId}`, fetcher)

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  if (todayHoursLoading || monthHoursLoading || totalHoursLoading) {
    return <PageSpinner />
  }

  return (
    <Index 
      todayHours={todayHours}
      monthHours={monthHours}
      totalHours={totalHours}
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
      handleModalOpen={handleModalOpen}
    />
  )
}