import { IThemes } from './IThemes';

export interface IThemesContext {
    colorTheme: { [key: string]: string };
    changeTheme: () => void;
}
