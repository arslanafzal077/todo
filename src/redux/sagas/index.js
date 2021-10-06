import { fork } from 'redux-saga/effects';
import {
  loginRequest,
  signupRequest
} from './root';

import {
  fetchToodoListRequest,
  addTodoListRequest,
  fetchItemDetailRequest,
  updateItemRequest
} from './app';

export function* rootSaga() {
  yield fork(loginRequest);
  yield fork(signupRequest);
  yield fork(fetchToodoListRequest);
  yield fork(addTodoListRequest);
  yield fork(fetchItemDetailRequest);
  yield fork(updateItemRequest);
}
