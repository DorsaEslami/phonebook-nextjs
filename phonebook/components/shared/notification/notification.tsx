/* #region  [- import -] */
import { notification } from "antd";
import { NotificationPlacement } from "antd/es/notification/interface";
import Styles from '../../../styles/components/shared/notification/notification.module.css';
import { CheckOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { ReactNode, } from "react";
/* #endregion */

/* #region [- types & interfaces -] */
type NotificationType = 'success' | 'info' | 'warning' | 'error';
interface IProps {
  message: string,
  className?: string,
  placement?: NotificationPlacement | undefined,
  type?: NotificationType | undefined
}
type Icons = {
  [key in NotificationType]: ReactNode;
};
var icons: Icons = {
  'success': <CheckOutlined />,
  'info': <CheckOutlined />,
  'warning': <CheckOutlined />,
  'error': <ExclamationCircleOutlined />
}
/* #endregion */

const Notification = ({ message = '', className = '', placement = "bottomRight", type = 'success' }: IProps) => {
  notification.open({
    message: message,
    className: Styles.container.concat(' ', className),
    placement: placement,
    type: type,
    icon: icons[`${type}`],
  });


};

export default Notification;