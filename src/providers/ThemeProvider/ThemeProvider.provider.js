import React, {useEffect, useState} from 'react';
import {Appearance} from 'react-native';

import dark from 'app/assets/theme/dark.js';
import light from 'app/assets/theme/light.js';
import {DARK, LIGHT} from 'app/enum/theme.enum';

const THEME_MAP = {
  [DARK]: dark,
  [LIGHT]: light,
};

export const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    setTheme(Appearance.getColorScheme());
    Appearance.addChangeListener(({colorScheme}) => {
      setTheme(colorScheme);
    });
  }, []);

  if (!theme) return null;

  return children({theme: THEME_MAP[theme]});
};
