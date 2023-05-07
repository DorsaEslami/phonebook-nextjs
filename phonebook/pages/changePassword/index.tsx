import Link from 'next/link';
import Image from 'next/image';
import Styles from '../../styles/components/changePassword/changePassword.module.scss';
import ChangePasswordImage from '../../public/img/change-password.png';
import Head from 'next/head';


const ChangePassword = () => {
  return (
    <>
      <Head>
        <title>Change Password to your Phonebook Account</title>
      </Head>
      <main className={Styles.main}>
        <Link href="/dashboard">Go back to dashboard</Link>
        <Image
          src={ChangePasswordImage}
          alt="Change Password"
          placeholder='blur'
          className={Styles.image}
          sizes="60vw"
        />

      </main>
    </>
  )
}
export default ChangePassword;