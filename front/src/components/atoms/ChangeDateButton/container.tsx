import React, { FC, useState, useEffect } from 'react'
import { ChangeDateButton } from './presentation'
import dayjs from 'dayjs'
import { useRouter } from 'next/router'

export const Container: FC = () => {
  const router = useRouter();
  const [date, setDate] = useState(dayjs());

  useEffect(() => {
    if (router.query.year && router.query.month) {
      const year = parseInt(router.query.year as string);
      const month = parseInt(router.query.month as string) - 1;
      setDate(dayjs(new Date(year, month)));
    }
  }, [router.query]);

  const handleChangeMonth = (increment: number) => {
    const newDate = increment > 0 ? date.add(1, 'month') : date.subtract(1, 'month');
    setDate(newDate);
    router.push(`/?year=${newDate.year()}&month=${newDate.month() + 1}`);
  };

  return (
    <ChangeDateButton 
      handleChangeMonth={handleChangeMonth}
      date={date}
    />
  )
}
