import {createAction} from 'app/utils/redux.util';
import {call, put, takeEvery} from '@redux-saga/core/effects';

export const SET_LANGUAGE = 'SETTINGS/SET_LANGUAGE';

export const setLanguage = createAction(SET_LANGUAGE);

// function* getCinemas() {
//   try {
//     const {data} = yield call(fetchAllCinemas);
//     if (data) {
//       yield put(putCinemas(data));
//     }
//   } catch (ex) {
//     console.warn(ex);
//   }
// }

// export function* sagaWatcher() {
//   yield takeEvery(SET_LOCATION, getCinemas);
// }
