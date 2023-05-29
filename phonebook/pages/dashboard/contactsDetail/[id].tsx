/* #region [- import -] */
import { useAppSelector } from '@/store/config/configureStore';
import Styles from '../../../styles/components/dashboard/contacts/details/details.module.scss'
import { Users } from '@/dtos/contactOutputDTO';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { ParsedUrlQuery } from 'querystring';
import { Button, Descriptions } from 'antd';
import UserImage from '../../../public/img/user.png'
import Link from 'next/link';
import Notification from "../../../components/shared/notification/notification";
/* #endregion */

const ContactDetail = () => {

  /* #region [- variables -] */
  const contactsList = useAppSelector<Users[]>((state) => state.contact.contactsList);
  const router = useRouter();
  var defaultContact: Users = {
    id: 0,
    firstName: '',
    lastName: '',
    age: 0,
    gender: '',
    phone: '',
    image: undefined,
    email: '',
  }
  const [contact, setContact] = useState<Users>(defaultContact);
  /* #endregion */

  /* #region [- getContactId -] */
  useEffect(() => {
    var query: ParsedUrlQuery = router.query;
    var contactsId: number | undefined = query?.id === undefined ? undefined : parseInt(query.id[0]);
    var contactsListLen = Object.keys(contactsList).length;

    if (contactsId && contactsListLen > 0) {
      var filteredContact = contactsList.filter((item: Users) => item.id === contactsId);
      var filteredContactLen: number = Object.keys(filteredContact).length;
      if (filteredContactLen === 1) {
        setContact(filteredContact[0]);
      }
      else {
        Notification({ message: 'Contact not found!', type: 'error' });
      }
    }
    else {
      Notification({ message: 'Something went wrong!', type: 'error' });
    }
  }, [])
  /* #endregion */

  /* #region [- return -] */
  return (
    <main className={Styles.main}>
      <section className={Styles.section}>
        <figure className={Styles.figure}>
          {contact.image === undefined ?
            <Image
              src={UserImage}
              alt='Contact image'
              placeholder='blur'
              fill
              className={Styles.image}
              sizes='10vw'
            />
            :
            <Image
              src={contact.image}
              alt='Contact image'
              placeholder='blur'
              blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACCAIIDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAgEAAwb/xAAXEAEBAQEAAAAAAAAAAAAAAAAAAQIR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD2CVUoDRpUaA0aVGgjMgKqMBKigqowKzMDMzA6pWSglClQoJRta0bQbrdG1ugXVlDqygcpQJVlA1GKCqjArIwOqVkoDQpUNANoWraFoNanUtToH1ZXPpSg6SlK5ylKDpFgSlAJRUFZGB1GqlAa56OuegDVc7S1XO1US1OpanQPqyufSlB1lKVzlOUHSUoEKIGoxRVZGB0SqNVBrno656Bz056dNOegCo1QFKAUB0hxzhwHSFAhwCijFBWZgdErJQGuejoaBz05adNBQc6hVAQohQChwIcA4UGFAKKMUFZmB0SslAaGjoUHPTnXShQCoVQEKIUBYUSFAKFBiwCVGBWZgdEqpQGhToUAoU6FAai1hEWMsBYUSFBVipFBVRQZmYHVKzANCswBQrMA1mYRljMBQozCrFZgVWYGZmB//9k='
              fill
              sizes='10vw'
              className={Styles.image}
            />
          }

        </figure>

        <Link href="/dashboard" className={Styles.goBackLink}>Go back to dashboard</Link>
        <Descriptions title="Contact Information" column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }} className={Styles.description}>
          <Descriptions.Item label="First Name">{contact.firstName}</Descriptions.Item>
          <Descriptions.Item label="Last Name">{contact.lastName}</Descriptions.Item>
          <Descriptions.Item label="Age">{contact.age}</Descriptions.Item>
          <Descriptions.Item label="Gender">{contact.gender}</Descriptions.Item>
          <Descriptions.Item label="Phone">{contact.phone}</Descriptions.Item>
          <Descriptions.Item label="Email">{contact.email}</Descriptions.Item>
        </Descriptions>


      </section>
    </main>)
  /* #endregion */
}
export default ContactDetail;