import { useState, useEffect } from 'react';
import { supabase } from '@/utils/supabaseClient'
import { User } from '@supabase/supabase-js'

export const useUserInfo = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data: user } = await supabase.auth.getUser();

      if (user) {
        setUser(user.user);
      }
    };

    fetchUser();
  }, []);

  return { user };
}
