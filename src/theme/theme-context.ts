import React from 'react';
import { DarkTheme } from '../theme/darkTheme';
import { Theme } from '../theme/theme';

export const themes = {
  dark: DarkTheme,
}

export const ThemeContext = React.createContext(themes.dark);