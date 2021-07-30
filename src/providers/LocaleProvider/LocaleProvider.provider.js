import get from 'lodash/get';

import {ENGLISH, RUSSIAN} from 'app/enum/settings.enum';

import en from 'app/assets/locale/en.json';
import ru from 'app/assets/locale/ru.json';

const LOCALE_MAP = {
  [ENGLISH]: en,
  [RUSSIAN]: ru,
};

export const LocaleProvider = ({language, children}) => {
  const ts = (key, options) => {
    return get(LOCALE_MAP[language], key, 'not found');
  };

  return children({ts});
};
