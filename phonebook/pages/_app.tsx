import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ConfigProvider } from 'antd';
import { Provider } from "react-redux";
import store from '../store/config/configureStore';
import { SessionProvider } from 'next-auth/react';
import { antdConfigToken } from '@/utils/antdConfigToken';



export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Phonebook app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SessionProvider session={pageProps.session}>
        <Provider store={store}>
          <ConfigProvider theme={{ token: antdConfigToken }}>
            <Component {...pageProps} />
          </ConfigProvider>
        </Provider>
      </SessionProvider>
    </>
  )

}
