import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '@/utils/supabaseClient';

const useCheckSession = () => {
  const router = useRouter();

  useEffect(() => {
    // ログインページではチェックをスキップする
    if (router.pathname === '/login' || router.pathname === '/signup') {
      return;
    }

    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();

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
};

export default useCheckSession;
