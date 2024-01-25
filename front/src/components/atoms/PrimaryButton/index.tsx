import React, { FC } from 'react'

type Props = {
  text: string;
  type: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
}

export const PrimaryButton: FC<Props> = ({
  text,
  type,
  onClick,
}) => {
  return (
    <button
      className="bg-gradient-to-r from-[#2E72B7] to-[#66CDF9] flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-normal text-sm py-3 px-10 rounded-full shadow"
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  )
}
