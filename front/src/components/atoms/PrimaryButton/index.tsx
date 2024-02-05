import React, { FC } from 'react'
import { ButtonSpinner } from '@/components/atoms/ButtonSpinner'

type Props = {
  text: string;
  type: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
  isLoading?: boolean;
}

export const PrimaryButton: FC<Props> = ({
  text,
  type,
  onClick,
  isLoading,
}) => {
  return (
    <button
      className="bg-gradient-to-r from-[#2E72B7] to-[#66CDF9] flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-normal text-sm py-3 px-10 rounded-full shadow"
      type={type}
      onClick={onClick}
    >
      {isLoading ? <ButtonSpinner /> : null}
      {text}
    </button>
  )
}
