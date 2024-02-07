import React, { FC, useCallback } from 'react'
import { Header } from './presentation'
import useSWR from 'swr'
import { useUserInfo } from '@/hooks/useUserInfo';
import { useRouter } from 'next/router';

export const Container: FC = () => {
  const { user } = useUserInfo();
  const userId = user?.id;
  const router = useRouter();

  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data: userInfo } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/current-user/${userId}`, fetcher, {
    revalidateOnFocus: false,
  });

  const onClick = useCallback(() => {
    if (router.pathname.includes('admin')) {
      router.push('/');
    } else {
      router.push('/admin/users');
    }
  }, [router]);

  const isAdminPage = router.pathname.includes('admin');

  return (
    <Header
      userInfo={userInfo}
      onClick={onClick}
      isAdminPage={isAdminPage}
    />
  )
}
