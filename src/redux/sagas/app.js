import { takeLatest, put, delay } from "redux-saga/effects";
import { ACTION } from '@redux/string';
import {
  fetchTodoListSuccess, todoRefreshingStatus,
  addTodoListSuccess,addTodoRefreshingStatus,
  itemDetailSuccess,itemDetailRefreshingStatus
} from '@redux/actions/AppActions';
import Api from '@utils/api';
import Storage from '@utils/storage';
import { Alert } from "react-native";

export function* fetchToodoListRequest() {
  yield takeLatest(ACTION.FETCH_TODO_LIST_REQUEST, fetchToodoList);
}
function* fetchToodoList(params) {
  let {
    navigation
  } = params.data;
  try {
    yield put(todoRefreshingStatus(true));
    let resp = yield Api.get('api/items')
    console.log(resp,"response");
    if (resp.success) {
      yield put(fetchTodoListSuccess(resp.items.data));
    } else {
      alert("Something went wrong.")
    }
  }
  catch (e) {
    yield put(todoRefreshingStatus(false));
  }
}

export function* addTodoListRequest() {
  yield takeLatest(ACTION.ADD_TODO_LIST_REQUEST, addToodoList);
}
function* addToodoList(params) {
  let {
    navigation,body
  } = params.data;
  try {
    yield put(addTodoRefreshingStatus(true));
    let resp = yield Api.post('api/item',body)
    console.log(resp,"response");
    if (resp.success) {
      yield put(addTodoListSuccess(resp.item));
      navigation.navigate('Todo')
    } else {
      alert("Something went wrong.")
    }
  }
  catch (e) {
    console.log(e, "eee");
    yield put(addTodoRefreshingStatus(false));
  }
}

export function* fetchItemDetailRequest() {
  yield takeLatest(ACTION.FETCH_ITEM_DETAILL_REQUEST, fetchItemDetail);
}
function* fetchItemDetail(params) {
  let {
    navigation,id
  } = params.data;
  try {
    yield put(itemDetailRefreshingStatus(true));
    let resp = yield Api.get(`api/item/${id}`)
    console.log(resp,"response");
    if (resp.success) {
      yield put(itemDetailSuccess(resp.item));
    } else {
      alert("Something went wrong.")
    }
  }
  catch (e) {
    yield put(itemDetailRefreshingStatus(false));
  }
}
export function* updateItemRequest() {
  yield takeLatest(ACTION.UPDATE_ITEM_REQUEST, updateItem);
}
function* updateItem(params) {
  let {
    navigation,id,body
  } = params.data;
  try {
    yield put(addTodoRefreshingStatus(true));
    let resp = yield Api.put(`api/item/${id}`,body)
    console.log(resp,"response");
    if (resp.success) {
      yield put(addTodoListSuccess(resp.item));
      navigation.navigate('Todo')
    } else {
      alert("Something went wrong.")
    }
  }
  catch (e) {
    yield put(addTodoRefreshingStatus(false));
  }
}


