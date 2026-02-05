import {ISettings} from '../../screen/FilterSettings';
import {Animal} from '../../screen/Home';

export type LoggedOutStackType = {
  LOGIN_PAGE: undefined;
  REGISTRATION_PAGE: undefined;
};
export type LoggedInStackType = {
  DRAWER_STACK: undefined;
  PET_PAGE: {pet: Animal};
  FILTERS_SETTINGS_PAGE: {
    petsList: Animal[];
  };
};
export type TabBarStackType = {
  HOME_PAGE: {
    settings: ISettings;
  };
  FAVORITE_PAGE: undefined;
};
export type DrawerStackType = {
  TAB_BAR_STACK: undefined;
};

const LoggedOutStackScreens: LoggedOutStackType = {
  LOGIN_PAGE: undefined,
  REGISTRATION_PAGE: undefined,
};
const LoggedInStackScreens: DrawerStackType = {
  TAB_BAR_STACK: undefined,
};

export type RootStackNavigation = {
  LOGGED_IN_STACK: {screens: keyof typeof LoggedInStackScreens};
  LOGGED_OUT_STACK: {screens: keyof typeof LoggedOutStackScreens};
};
