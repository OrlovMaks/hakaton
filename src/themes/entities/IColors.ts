import { IThems } from "./IThems";

export interface IThemeObj {
    AVAILABLE_THEMES: Array<IThems>;
    LIGHT: IColors;
    DARK: IColors;
    INITIAL_THEME: IThems
}

export interface IColors {
    "BACKGROUND_COLOR": string;
    "SWITCH_COLOR": string;
    "TEXT_COLOR": string;
    "BUTTON_COLOR": string;
    "LIST_ITEMS": string;
    "TITLE_BACKGROUND_COLOR": string;
}