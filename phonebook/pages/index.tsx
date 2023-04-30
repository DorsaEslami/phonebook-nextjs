import Head from 'next/head'
import Login from '@/components/login/login'

export default function Home() {
  return (
    <>
      <Head>
        <title>Login to Phonebook App</title>
      </Head>
      <Login />
    </>
  )
}
