import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ConfigProvider } from 'antd';
import { Provider } from "react-redux";
import store from '../store/config/configureStore';
import { Montserrat } from 'next/font/google';
import { SessionProvider, useSession } from 'next-auth/react';

const montserrat = Montserrat({
  subsets: ['latin'],
})
/* #region  [- defaultData -] */
type ThemeData = {
  borderRadius: number;
  colorPrimary: string;
  fontFamily: string;
  colorSuccess: string
};
const defaultData: ThemeData = {
  borderRadius: 6,
  colorPrimary: '#127591',
  fontFamily: montserrat.style.fontFamily,
  colorSuccess: '#127591'
};

/* #endregion */

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
          <ConfigProvider theme={{
            token: {
              borderRadius: defaultData.borderRadius,
              colorPrimary: defaultData.colorPrimary,
              fontFamily: defaultData.fontFamily,
              colorSuccess: defaultData.colorSuccess
            }
          }}>
            <Component {...pageProps} />
          </ConfigProvider>
        </Provider>
      </SessionProvider>
    </>
  )

}
