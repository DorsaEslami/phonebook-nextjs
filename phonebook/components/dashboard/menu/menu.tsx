import { Menu as AntdMenu, MenuProps } from 'antd';
import { PoweroffOutlined, LockOutlined } from '@ant-design/icons';
import ProfileIcon from './profileIcon';
import Styles from '../../../styles/components/dashboard/menu/menu.module.scss';
import { SelectInfo } from '../../../node_modules/rc-menu/lib/interface';



/* #region  [- interface -] */
interface Props {
  onClickMenueItem: (info: SelectInfo) => void,
}
/* #endregion */
const Menu = ({ onClickMenueItem }: Props): JSX.Element => {

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
      popupClassName: Styles.subMenuPopup,
      popupOffset: [-165, 5],
      children: [
        {
          label: 'Change Password',
          key: 'change-password',
          icon: <LockOutlined />,
        },
        {
          label: 'Logout',
          key: 'logout',
          icon: <PoweroffOutlined />,
        },
      ]
    }

  ]
  /* #endregion */

  return (
    <nav className={Styles.nav}>
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
    </nav >
  )
}
export default Menu; 