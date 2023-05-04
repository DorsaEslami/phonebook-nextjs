import { useAppSelector } from '@/store/config/configureStore';
import Styles from '../../../../styles/components/dashboard/contacts/details/details.module.scss'
import { Users } from '@/dtos/contactOutputDTO';
import { Avatar, Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';


const ContactDetail = () => {
  const contactsList = useAppSelector<Users[]>((state) => state.contact.contactsList);
  const router = useRouter();
  const [contact, setContact] = useState<Users>({
    id: undefined,
    firstName: '',
    lastName: '',
    age: undefined,
    gender: undefined,
    phone: undefined,
    image: undefined,
    email: undefined,

  });
  console.log('router', router)
  useEffect(() => {
    var contact = contactsList.filter((item: any) => { item.id === router.query.id })
  }, [])
  return (
    <main className={Styles.main}>
      <section className={Styles.section}>
        <Card
          hoverable
          className={Styles.card}
        >
          <Meta avatar={<Avatar alt="profile" src={contact.image} size='large' />} title={contact.firstName + ' ' + contact.lastName} />
          <div className={Styles.description}>

          </div>
        </Card>
      </section>
    </main>)
}
export default ContactDetail;