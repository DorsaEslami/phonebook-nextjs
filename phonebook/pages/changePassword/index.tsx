import Link from 'next/link';
import Image from 'next/image';
import Styles from '../../styles/components/changePassword/changePassword.module.scss';
import ChangePasswordImage from '../../public/img/change-password.png';


const ChangePassword = () => {
  return (
    <main className={Styles.main}>
      <Link href="/dashboard">Go back to dashboard</Link>
      <Image src={ChangePasswordImage} alt="Change Password" className={Styles.image} />
    </main>)
}
export default ChangePassword;