// import { useEffect, useState } from "react";
// import { supabase } from "@/utils/supabaseClient";
// import type { Session } from "@supabase/supabase-js";

// export const useUser = () => {
//   const [session, setSession] = useState<Session | null>(null);

//   useEffect(() => {
//     const { data: { subscription } } = supabase.auth.onAuthStateChange(
//       (event, session: Session | null) => {
//         setSession(session);
//       }
//     );

//     return () => {
//       subscription.unsubscribe();
//     };
//   }, []);

//   const signOut = () => {
//     supabase.auth.signOut();
//   }

//   return {
//     session,
//     signOut,
//   };
// }
