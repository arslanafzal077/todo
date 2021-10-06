import { ACTION } from '@redux/string';

export const loginCallRequest = (data) => {
  return {
    type: ACTION.LOGIN_CALL_REQUEST,
    data: data
  }
}
export const loginCallSuccess = (data) => {
  return {
    type: ACTION.LOGIN_CALL_SUCCESS,
    data: data
  }
}
export const loginRefreshingUpdate = (status) => {
  return {
    type: ACTION.LOGIN_REFRESHING_STATUS,
    status: status
  }
}
export const signupCallRequest = (data) => {
  return {
    type: ACTION.SIGNUP_CALL_REQUEST,
    data: data
  }
}
export const signupCallSuccess = (data) => {
  return {
    type: ACTION.SIGNUP_CALL_SUCCESS,
    data: data
  }
}
export const signupRefreshingUpdate = (status) => {
  return {
    type: ACTION.SIGNUP_REFRESHING_STATUS,
    status: status
  }
}


