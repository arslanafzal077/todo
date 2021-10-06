import { takeLatest, put, delay } from "redux-saga/effects";
import { ACTION } from '@redux/string';
import {
  loginRefreshingUpdate, loginCallSuccess,
  signupRefreshingUpdate, signupCallSuccess
} from '@redux/actions/RootActions';
import Api from '@utils/api';
import Storage from '@utils/storage';
import { StackActions } from '@react-navigation/native';
import { Alert } from "react-native";

export function* loginRequest() {
  yield takeLatest(ACTION.LOGIN_CALL_REQUEST, login);
}

function* login(params) {
  let {
    navigation, body,
  } = params.data;
  try {
    yield put(loginRefreshingUpdate(true));
    let resp = yield Api.post('api/login', body)
    if (resp.success) {
      yield put(loginCallSuccess(resp.user));
      Storage.storeData('@token', resp.user.token);
      navigation.dispatch(
        StackActions.replace('App')
      );
    } else {
      alert("Something went wrong.")
    }
  } catch (e) {
    console.log(e,"exception");
    yield put(loginRefreshingUpdate(false));
    alert(e.error?e.error:e.message)
  }

}

export function* signupRequest() {
  yield takeLatest(ACTION.SIGNUP_CALL_REQUEST, signUp);
}

function* signUp(params) {
  let {
    navigation, body,
  } = params.data;
  console.log(params, "params in saga");
  try {
    yield put(signupRefreshingUpdate(true));
    let resp = yield Api.post('api/register', body)
    console.log(resp, "response");
    if (resp.success) {
      yield put(signupCallSuccess(resp));
      Alert.alert(
        "Success",
        resp.message,
        [
          { text: "OK", onPress: () => navigation.navigate('Login') }
        ]
      );
    } else {
      alert("Something went wrong.")
    }
  } catch (e) {
    yield put(signupRefreshingUpdate(false));
    alert(e.error ? e.error : e.message)
  }

}



