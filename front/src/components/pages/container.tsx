import React, { FC } from 'react'
import { Index } from './presentation'
import useSWR from 'swr'
import { useRouter } from 'next/router'
import { PageSpinner } from '../atoms/PageSpinner'
import { useUserInfo } from '@/hooks/useUserInfo'
import dayjs from 'dayjs'

export const Container: FC = () => {
  const router = useRouter();

  const year = parseInt(router.query.year as string);
  const month = router.query.month;

  const { user } = useUserInfo();
  const userId = user?.id;

  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data: todayHours, isLoading: todayHoursLoading } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/total-hours/today/${userId}`, fetcher, {
    revalidateOnFocus: false,
    key: userId,
  })
  const { data: monthHours, isLoading: monthHoursLoading } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/total-hours/month/${year}/${month}/${userId}`, fetcher, {
    revalidateOnFocus: false,
    key: [year, month, userId],
  })
  const { data: totalHours, isLoading: totalHoursLoading } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/total-hours/all/${userId}`, fetcher, {
    revalidateOnFocus: false,
    key: userId,
  })

  if (todayHoursLoading || monthHoursLoading || totalHoursLoading) {
    return <PageSpinner />
  }

  const currentYear = dayjs().year();
  const currentMonth = dayjs().month() + 1;

  if (router.query.year === undefined || router.query.month === undefined) {
    router.push(`/?year=${currentYear}&month=${currentMonth}`);
  }

  return (
    <Index 
      todayHours={todayHours}
      monthHours={monthHours}
      totalHours={totalHours}
    />
  )
}
