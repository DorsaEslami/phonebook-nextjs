/* #region  [- import -] */
import React, { useState, Suspense, useEffect } from "react";
import Styles from '../../styles/components/dashboard/dashboard.module.scss';
import Menu from '../../components/dashboard/menu/menu';
import DashboardLoading from '../../components/dashboard/dashboardLoading/dashboardLoading';
import { SelectInfo } from 'rc-menu/lib/interface';
import container, { TYPES } from "@/inversify.config";
import { IContactService } from "@/services/interfaces/IContactService";
import { GetServerSideProps } from "next";
import { Users } from "@/dtos/contactOutputDTO";
import { useAppDispatch } from "@/store/config/configureStore";
import { setContactsList } from "@/store/reducers/contactSlice";
import DefaultContent from '../../components/dashboard/defaultContent/defaultContent';
import Head from "next/head";
import { signOut } from "next-auth/react";
import { resetContacts } from '@/store/reducers/contactSlice';
import { useRouter } from 'next/router';
const Contacts = React.lazy(() => import('../../components/dashboard/contacts/contacts'));
/* #endregion */

/* #region [- interface -]] */
interface props {
  contactsList: Users[]
}
/* #endregion */

/* #region [- getServerSideProps -] */
export const getServerSideProps: GetServerSideProps = async () => {
  const contactService: IContactService = container.get<IContactService>(TYPES.IContactService);
  var response = await contactService.getContact();
  var { users } = response;
  return { props: { contactsList: users } }
}
/* #endregion */

const Dashboard = ({ contactsList = [] }: props): JSX.Element => {
  /* #region  [- useState -] */
  const [content, setContent] = useState<React.ReactNode>(<DefaultContent contactsList={contactsList} />);
  const dispatch = useAppDispatch();
  const router = useRouter()
  /* #endregion */

  /* #region [- setContactsList -] */
  useEffect(() => {
    dispatch(setContactsList(contactsList));
  }, [])
  /* #endregion */

  /* #region  [- onClickMenueItem -] */
  const onClickMenueItem = (info: SelectInfo) => {
    switch (info.key) {
      case 'home':
        setContent(<DefaultContent contactsList={contactsList} />);
        break;
      case 'contacts':
        setContent(<Contacts />);
        break;
      case 'change-password':
        router.push('/changePassword');
        break;
      case 'logout':
        dispatch(resetContacts());
        signOut({ redirect: true, callbackUrl: '/' });
        break;
      default:
        setContent(<DefaultContent contactsList={contactsList} />);
        break;
    }
  }
  /* #endregion */

  /* #region  [- return -] */
  return (
    <>
      <Head>
        <title>Phonebook App</title>
      </Head>
      <main className={Styles.main}>
        <Menu onClickMenueItem={onClickMenueItem} />
        <Suspense fallback={<DashboardLoading />}>
          <section className={Styles.section}>{content}</section>
        </Suspense>
      </main>
    </>
  );
  /* #endregion */

}

export default Dashboard;
