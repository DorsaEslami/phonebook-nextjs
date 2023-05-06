import { useAppSelector } from '@/store/config/configureStore';
import Styles from '../../../../styles/components/dashboard/contacts/details/details.module.scss'
import { Users } from '@/dtos/contactOutputDTO';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

const ContactDetail = () => {
  /* #region [- variables -] */
  const contactsList = useAppSelector<Users[]>((state) => state.contact.contactsList);
  const router = useRouter();
  const [contact, setContact] = useState<Users>({
    id: undefined,
    firstName: '',
    lastName: '',
    age: undefined,
    gender: undefined,
    phone: undefined,
    image: 'https://robohash.org/hicveldicta.png',
    email: undefined,

  });
  /* #endregion */

  /* #region [- getContactId -] */
  useEffect(() => {
    var contact = contactsList.filter((item: any) => { item.id === router.query.slug })[0];
    setContact(contact);
  }, [])
  /* #endregion */

  /* #region [- return -] */
  return (
    <main className={Styles.main}>
      <section className={Styles.section}>
        <Image src={contact.image === undefined ? 'https://robohash.org/hicveldicta.png' : contact.image} alt='Contact image' width={400} height={400} />
      </section>
    </main>)
  /* #endregion */
}
export default ContactDetail;