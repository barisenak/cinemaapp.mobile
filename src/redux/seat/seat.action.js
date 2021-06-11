import {call, put, takeEvery} from 'redux-saga/effects';

import {createAction} from 'app/utils/redux.util';
import {fetchRemoveFilmFromFav} from 'app/api/film.api';
import {setUser} from '../user/user.action';

export const SET_SELECTED_SEAT = 'SEAT/SET_SELECTED_SEAT';
export const REMOVE_SELECTED_SEAT = 'SEAT/REMOVE_SELECTED_SEAT';

export const setSelectedSeat = createAction(SET_SELECTED_SEAT);
export const removeSelectedSeat = createAction(REMOVE_SELECTED_SEAT);

// function* setSeatNumber(action) {
//   try {
//     const data = yield call(fetchFilmToFav, {
//       userId: action.payload.userId,
//       filmId: action.payload.filmId,
//       Authorization:
//         'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiNjBiMGQ3NDc0OTIxMjkwMDIyZTdmMDRhIiwiaWF0IjoxNjIyNTM1ODM5LCJleHAiOjE2MjI2MjIyMzl9.R0vKSst34Hg4gBagmb2S0uFCl586lcoTnzMFwD6og60',
//     });

//     if (data.message) {
//       const userData = yield call(fetchRemoveFilmFromFav, {
//         userId: action.payload.userId,
//         filmId: action.payload.filmId,
//         Authorization:
//           'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiNjBiMGQ3NDc0OTIxMjkwMDIyZTdmMDRhIiwiaWF0IjoxNjIyNTM1ODM5LCJleHAiOjE2MjI2MjIyMzl9.R0vKSst34Hg4gBagmb2S0uFCl586lcoTnzMFwD6og60',
//       });
//       yield put(setUser(userData));
//     } else {
//       yield put(setUser(data));
//     }
//   } catch (ex) {
//     console.warn(ex);
//   }
// }

// export function* sagaWatcher() {
//   yield takeEvery(SET_SELECTED_SEAT, setSeatNumber);
// }
