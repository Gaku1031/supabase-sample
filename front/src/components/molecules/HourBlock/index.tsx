import React, { FC } from 'react'

type Props = {
  title: string;
  number: number;
}

export const HourBlock: FC<Props> = ({
  title,
  number,
}) => {
  return (
    <div className='bg-white flex flex-col text-center gap-2 shadow rounded-lg px-10 py-5 w-1/3'>
      <p className='font-Roboto text-[#2C70B6] font-normal text-sm'>
        {title}
      </p>
      <p className='font-Roboto text-[#111111] font-bold text-[30px]'>
        {Math.round(number)}
      </p>
      <p className='font-Roboto text-[#97B4CD] font-normal text-sm'>
        hour
      </p>
    </div>
  );
}
