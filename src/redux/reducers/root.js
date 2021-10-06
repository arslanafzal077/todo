import { ACTION } from '@redux/string';

const initialState = {
  login: {
    isLoading: false,
    data: {}
  },
  signup: {
    isLoading: false,
    data: {}
  }
}

export const root = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.LOGIN_CALL_SUCCESS:
      return {
        ...state,
        login: {
          data: action.data,
          isLoading: false
        },
      }
    case ACTION.LOGIN_REFRESHING_STATUS:
      return {
        ...state,
        login: {
          ...state.login,
          isLoading: action.status
        }
      }
    case ACTION.SIGNUP_CALL_SUCCESS:
      return {
        ...state,
        signup: {
          data: action.data,
          isLoading: false
        },
      }
    case ACTION.SIGNUP_REFRESHING_STATUS:
      return {
        ...state,
        signup: {
          ...state.signup,
          isLoading: action.status
        }
      }
    default:
      return state
  }
}

export default root
