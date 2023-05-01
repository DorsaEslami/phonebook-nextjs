/* #region  [- import -] */
import Styles from '../../styles/components/dashboard/dashboard.module.scss';
import { Spin } from 'antd';
/* #endregion */

const DashboardLoading = (): JSX.Element => {


  /* #region  [- return -] */
  return (
    <div className={Styles.loading} >
      <div className={Styles.loadingDiv}><Spin /></div>
      <img className={Styles.loadingImg} src='../img/loading.png' alt="loading" />
      <div className={Styles.loadingText}>Loading....</div>
    </div>
  );
  /* #endregion */

}

export default DashboardLoading;
