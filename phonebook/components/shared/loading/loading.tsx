/* #region  [- import -] */
import Styles from '../../../styles/components/shared/loading/loading.module.css';
import { Spin } from 'antd';
/* #endregion */

const Loading = (): JSX.Element => {


  /* #region  [- return -] */
  return (
    <figure className={Styles.figure} >
      <Spin className={Styles.spin} />
      <img className={Styles.loadingImg} src='../img/loading.png' alt="loading" />
      <figcaption className={Styles.figcaption}>Loading....</figcaption>
    </figure>
  );
  /* #endregion */

}

export default Loading;
