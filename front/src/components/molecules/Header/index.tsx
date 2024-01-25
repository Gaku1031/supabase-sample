import { PrimaryButton } from '@/components/atoms/PrimaryButton'
import React, { FC } from 'react'

type Props = {
  handleModalOpen: () => void
}

export const Header: FC<Props> = ({
  handleModalOpen
}) => {
  return (
    <div className='fixed z-50 flex h-16 w-full bg-white px-10 py-5'>
      <div className='flex justify-end w-full'>
        <div className='flex items-center'>
          <PrimaryButton 
            text='記録・投稿'
            type='button'
            onClick={handleModalOpen}
          />
        </div>
      </div>
    </div>
  )
}
