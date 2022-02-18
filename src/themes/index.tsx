import React, { createContext, useState, useMemo, FC, useEffect } from 'react';
import { IColors, IThemeObj } from './entities/IColors';
import { IThemesContext } from './entities/IThemesContext';
import { IThems } from './entities/IThems';
const THEMES_JSON: IThemeObj = require('./themes.json');

export const ThemesContext = createContext<IThemesContext>({
    colors: THEMES_JSON[THEMES_JSON.INITIAL_THEME],
    theme: THEMES_JSON.INITIAL_THEME,
    setTheme: (_) => { }
});

export const ThemesProvider: FC = ({ children }) => {
    const [theme, setTheme] = useState<IThems>(THEMES_JSON.INITIAL_THEME);
    const [colors, setColors] = useState<IColors>(THEMES_JSON[theme]);

    const appContext = useMemo(() => {
        return {
            colors,
            theme,
            setTheme
        };
    }, [colors, theme]);

    useEffect(() => {
        if (THEMES_JSON[theme]) {
            setColors(THEMES_JSON[theme] as IColors);
        };
    }, [theme])

    return (
        <ThemesContext.Provider value={appContext}>
            {children}
        </ThemesContext.Provider>
    );
};