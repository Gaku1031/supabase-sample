import React, { FC } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const Error: FC = () => {
  return (
    <>
      <h1 className='text-center font-bold text-3xl'>
        404 - Page Not Found
      </h1>
      <Link href='/' className='flex justify-center mt-2'>
        <Button variant='outline'>トップページに戻る</Button>
      </Link>
    </>
  )
}
