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
const Contacts = React.lazy(() => import('./contacts'));
/* #endregion */

export const getServerSideProps: GetServerSideProps = async () => {
  const contactService: IContactService = container.get<IContactService>(TYPES.IContactService);
  var response = await contactService.getContact();
  var { users } = response;
  return { props: { contactsList: users } }
}
interface props {
  contactsList: Users[]
}
const Dashboard = ({ contactsList = [] }: props): JSX.Element => {

  /* #region  [- useState -] */
  const [content, setContent] = useState<React.ReactNode>(<DefaultContent contactsList={contactsList} />);
  const dispatch = useAppDispatch();
  /* #endregion */

  /* #region [- setContactsList -] */
  useEffect(() => {
    dispatch(setContactsList(contactsList));
  }, [])
  /* #endregion */

  /* #region  [- onClickMenueItem -] */
  const onClickMenueItem = (info: SelectInfo) => {
    if (info.key === 'home') {
      setContent(<DefaultContent contactsList={contactsList} />);
    }
    else if (info.key === 'contacts') {
      setContent(<Contacts />);
    }
    else {
      setContent(<DefaultContent contactsList={contactsList} />);
    }
  }
  /* #endregion */

  /* #region  [- return -] */
  return (
    <div className={Styles.dashboard}>
      <Menu onClickMenueItem={onClickMenueItem} />
      <Suspense fallback={<DashboardLoading />}>
        <div className={Styles.dashboardContent}>{content}</div>
      </Suspense>
    </div>
  );
  /* #endregion */

}

export default Dashboard;
