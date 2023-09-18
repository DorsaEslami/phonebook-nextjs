import { montserrat } from '../utils/font'

/* #region  [- defaultData -] */
type ThemeData = {
  borderRadius: number;
  colorPrimary: string;
  fontFamily: string;
  colorSuccess: string;
  colorLink: string;
  colorLinkActive: string;
  colorLinkHover: string;
};
const defaultData: ThemeData = {
  borderRadius: 6,
  colorPrimary: '#127591',
  fontFamily: montserrat.style.fontFamily,
  colorSuccess: '#127591',
  colorLink: '#127591',
  colorLinkActive: '#0b6d89',
  colorLinkHover: '#65a2b4',
};

/* #endregion */

export const antdConfigToken = {
  borderRadius: defaultData.borderRadius,
  colorPrimary: defaultData.colorPrimary,
  fontFamily: defaultData.fontFamily,
  colorSuccess: defaultData.colorSuccess,
  colorLink: defaultData.colorLink,
  colorLinkActive: defaultData.colorLinkActive,
  colorLinkHover: defaultData.colorLinkHover,
}