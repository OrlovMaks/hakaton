import React, { createContext, useState, useMemo, FC, useEffect } from 'react';
import { IThemesContext } from '../entities/IThemesContext';
const themes = require('../config/theme.json');

export const AppContext = createContext<IThemesContext>({ changeTheme: () => { }, colorTheme: themes.colors.initial });

export const AppContextProvider: FC = ({ children }) => {
    const [theme, setTheme] = useState(themes.colors.initial);
    const [colorTheme, setColorTheme] = useState<{ [key: string]: string }>(
        themes.colors[theme],
    );

    const changeTheme = () => {
        const currentTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(currentTheme);
    };

    useEffect(() => {
        setColorTheme(themes.colors[theme]);
    }, [theme]);

    const appContext = useMemo(() => {
        return {
            changeTheme,
            colorTheme
        };
    }, [theme, colorTheme]);

    return (
        <AppContext.Provider value={appContext}>{children}</AppContext.Provider>
    );
};
