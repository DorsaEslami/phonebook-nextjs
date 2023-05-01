import { Menu as AntdMenu, MenuProps } from 'antd';

import { PoweroffOutlined, LockOutlined } from '@ant-design/icons';
import ProfileIcon from './profileIcon';
import Styles from '../../../styles/components/dashboard/menu/menu.module.scss';
import { SelectInfo } from '../../../node_modules/rc-menu/lib/interface';
import { useAppDispatch } from '../../../store/config/configureStore';
import { resetContacts } from '../../../store/reducers/contactSlice';

/* #region  [- interface -] */
interface Props {
  onClickMenueItem: (info: SelectInfo) => void,
}
/* #endregion */
const Menu = ({ onClickMenueItem }: Props): JSX.Element => {
  const dispatch = useAppDispatch();
  /* #region  [- items -] */
  const items: MenuProps['items'] = [

    {
      label: 'Home',
      key: 'home',
    },
    {
      label: 'Contacts',
      key: 'contacts',
    },
    {
      label: '',
      key: 'Profile',
      icon: <ProfileIcon />,
      className: Styles.profileSpan,
      popupClassName: "sub-menu-popup",
      popupOffset: [-165, 5],
      children: [
        {
          label: 'Change Password',
          key: 'change-password',
          icon: <LockOutlined />,
          onClick: () => {
            // navigate('/changePassword');
          }
        },
        {
          label: 'Logout',
          key: 'logout',
          icon: <PoweroffOutlined />,
          onClick: () => {
            dispatch(resetContacts());
            localStorage.clear();
            // navigate('/login');
          }
        },
      ]
    }

  ]
  /* #endregion */

  return (
    <div className={Styles.navbar}>
      <img className={Styles.logo} src='../img/menu-logo.png' alt="loading" />
      <div className={Styles.divider}></div>
      <AntdMenu
        className={Styles.menu}
        mode="horizontal"
        items={items}
        disabledOverflow={true}
        onSelect={onClickMenueItem}
        selectedKeys={[]}
      >
      </AntdMenu>
    </div >
  )
}
export default Menu; 