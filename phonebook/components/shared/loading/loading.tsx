/* #region  [- import -] */
import Styles from '../../../styles/components/shared/loading/loading.module.css';
import { Spin } from 'antd';
import Image from 'next/image'
import loadingImage from '../../../public/img/loading.png'
/* #endregion */

const Loading = (): JSX.Element => {


  /* #region  [- return -] */
  return (
    <figure className={Styles.figure} >
      <Spin className={Styles.spin} />
      <Image
        src={loadingImage}
        alt='Loading Image'
        placeholder='blur'
        className={Styles.loadingImg}
        sizes="25vw"
      />
      <figcaption className={Styles.figcaption}>Loading....</figcaption>
    </figure>
  );
  /* #endregion */

}

export default Loading;
