/* #region  [- import -] */
import React, { FC, useState, Suspense } from "react";
import Styles from '../../styles/components/dashboard/dashboard.module.scss';
import Menu from '../../components/dashboard/menu/menu';
import DashboardLoading from '../../components/dashboard/dashboardLoading/dashboardLoading';
import { SelectInfo } from 'rc-menu/lib/interface';
import { useSession } from "next-auth/react";
const DefaultContent = React.lazy(() => import('../../components/dashboard/defaultContent/defaultContent'));
const Contacts = React.lazy(() => import('./contacts'));
/* #endregion */

const Dashboard: FC = (): JSX.Element => {

  /* #region  [- useState -] */
  const [content, setContent] = useState<React.ReactNode>(<DefaultContent />);

  /* #endregion */

  /* #region  [- onClickMenueItem -] */
  const onClickMenueItem = (info: SelectInfo) => {
    if (info.key === 'home') {
      setContent(<DefaultContent />);
    }
    else if (info.key === 'contacts') {
      setContent(<Contacts />);
    }
    else {
      setContent(<DefaultContent />);
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
