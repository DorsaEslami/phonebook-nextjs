import Head from 'next/head'
import { Montserrat } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const montserrat = Montserrat({
  subsets: ['latin'],
})

export default function Home() {
  return (
    <>

      <Head>
        <title>Phonebook App</title>
        <meta name="description" content="Phonebook app" />
      </Head>
      <main >
        <span>tests</span>
      </main>
    </>
  )
}
