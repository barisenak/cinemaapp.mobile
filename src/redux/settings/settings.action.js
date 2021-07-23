import {createAction} from 'app/utils/redux.util';
import {
  call,
  put,
  takeEvery,
  eventChannel,
  END,
} from '@redux-saga/core/effects';

export const SET_LANGUAGE = 'SETTINGS/SET_LANGUAGE';
export const SET_THEME = 'SETTINGS/SET_THEME';

export const setLanguage = createAction(SET_LANGUAGE);
export const setTheme = createAction(SET_THEME);

function countdown(secs) {
  return eventChannel(emitter => {
    const iv = setInterval(() => {
      secs -= 1;
      if (secs > 0) {
        emitter(secs);
      } else {
        // this causes the channel to close
        emitter(END);
      }
    }, 1000);
    // The subscriber must return an unsubscribe function
    return () => {
      clearInterval(iv);
    };
  });
}
