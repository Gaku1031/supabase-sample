import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import useCheckSession from '@/hooks/useCheckSession'
import TagManager from 'react-gtm-module'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-WJTQWJ89' })
  }, [])

  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])

  useCheckSession();
  
  const [supabaseClient] = useState(() => createPagesBrowserClient())
  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <Component {...pageProps} />
    </SessionContextProvider>
  )
}
