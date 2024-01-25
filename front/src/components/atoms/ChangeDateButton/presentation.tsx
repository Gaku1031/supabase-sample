import React, { FC } from 'react'
import { Dayjs } from 'dayjs'
import { SlArrowLeftCircle } from 'react-icons/sl'
import { SlArrowRightCircle } from 'react-icons/sl'

type Props = {
  handleChangeMonth: (increment: number) => void;
  date: Dayjs;
}

export const ChangeDateButton: FC<Props> = ({
  handleChangeMonth,
  date,
}) => {
  return (
    <div className='flex gap-2 items-center'>
      <button onClick={() => handleChangeMonth(-1)}>
        <SlArrowLeftCircle />
      </button>
      <h1>{date.format('YYYY')}年{date.format('MM')}月</h1>
      <button onClick={() => handleChangeMonth(1)}>
        <SlArrowRightCircle />
      </button>
    </div>
  )
}
