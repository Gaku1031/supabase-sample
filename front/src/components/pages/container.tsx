import React, { FC, useEffect } from 'react'
import { Index } from './presentation'
import { supabase } from '@/utils/supabaseClient';
import { useRouter } from 'next/router';


export const Container: FC = () => {
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      const { data, error } = await supabase.auth.getSession();

      if (data.session === null) {
        router.push('/login');
      } else {
        const userResponse = await supabase.auth.getUser();
        if (userResponse.data) {
          console.log(userResponse.data.user);
        }
      }
    };

    checkSession();
  }, [router]);

  return (
    <Index />
  )
}
