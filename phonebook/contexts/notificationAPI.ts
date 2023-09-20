import { NotificationInstance } from "antd/es/notification/interface";
import { createContext } from "react";

export const NotificationAPIContext = createContext<NotificationInstance | undefined>(undefined);