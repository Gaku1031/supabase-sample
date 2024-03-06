import React, { FC } from 'react'
import { Modal } from '@/features/Dialog'
import { User } from '@/services/schema/types'
import { PrimaryButton } from '@/components/atoms/PrimaryButton'

type Props = {
  userInfo: User;
  onClick: () => void;
  isAdminPage: boolean;
}
export const Header: FC<Props> = ({ userInfo, onClick, isAdminPage }) => {
  return (
    <div className='fixed z-50 flex h-16 w-full bg-white px-10 py-5'>
      <div className='flex justify-end w-full'>
        <div className='flex items-center gap-2'>
          {isAdminPage ? null : (
            <Modal />
          )}
          {userInfo?.is_admin && (
            <PrimaryButton text={isAdminPage ? 'ユーザー画面' : '管理画面'} type='button' onClick={onClick} />
          )}
        </div>
      </div>
    </div>
  )
}
