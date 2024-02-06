import React, { FC } from 'react'
import { Users } from './presentation'
import useSWR from 'swr';
import { User } from '@/services/schema/types';

export const Container: FC = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data: users } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/users`, fetcher, {
    revalidateOnFocus: false,
  })

  const userArray = users?.map((user: User) => {
    return {
      email: user.email,
      is_admin: user.is_admin,
      name: user.name,
      id: user.id
    };
  })

  return (
    <Users
      userArray={userArray}
    />
  )
}
