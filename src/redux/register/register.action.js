import {call, put, takeEvery} from 'redux-saga/effects';

import {createAction} from 'app/utils/redux.util';
import {fetchRegister} from 'app/api/register.api';
// import {setUser} from '../user/user.action';

export const SET_REGISTER_DATA = 'AUTH/SET_REGISTER_DATA';

export const setRegisterData = createAction(SET_REGISTER_DATA);

function* setData(action) {
  try {
    const data = yield call(fetchRegister, {
      username: action.payload.email,
      password: action.payload.password,
    });

    if (data.username) {
      // yield put(setUser(true));
    }

    // AsyncStorage.getItem('accessToken', (err, result) => console.log(result));

    // yield put(setFilms(data));
    // yield put(setState(STATE_SUCCESS));
  } catch (ex) {
    console.warn(ex);
  }
}

export function* sagaWatcher() {
  yield takeEvery(SET_REGISTER_DATA, setData);
}
