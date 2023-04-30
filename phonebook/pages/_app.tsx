import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Montserrat } from 'next/font/google'
const montserrat = Montserrat({
  subsets: ['latin'],
})
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Phonebook app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />

    </>
  )

}
