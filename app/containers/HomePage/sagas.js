import { takeLatest, put, take, cancel, call } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { getData } from '../../services/apiUtil';
import {
  REQUEST_LOAD_DATA,
  SUCCESS_LOAD_DATA,
} from './constants';


export function* requestLoadData() {
  try {
    const data = yield call(getData);
    yield put({
      type: SUCCESS_LOAD_DATA,
      data,
    });
  } catch (err) {
    console.log('Error Sagas Fetch');
  }
}

export function* watchLoadData() {
  const watcher = yield takeLatest(REQUEST_LOAD_DATA, requestLoadData);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}
// All sagas to be loaded
export default [
  watchLoadData,
];
