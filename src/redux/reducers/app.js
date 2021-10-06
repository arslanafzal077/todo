import { ACTION } from '@redux/string';

const initialState = {
  home: {
    isLoading: false,
    data: []
  },
  add: {
    isLoading: false,
    isEdit:false,
    data: {}
  },
  detail: {
    isLoading: false,
    data: {}
  }
}

export const app = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.FETCH_TODO_LIST_SUCCESS:
      return {
        ...state,
        home: {
          ...state.home,
          data: action.data,
          isLoading: false
        }
      }

    case ACTION.TODO_LIST_REFRESHING_STATUS:
      return {
        ...state,
        home: {
          ...state.home,
          isLoading: action.status
        }
      }
    case ACTION.ADD_TODO_LIST_SUCCESS:
      return {
        ...state,
        add: {
          ...state.add,
          data: action.data,
          isLoading: false
        }
      }

    case ACTION.ADD_TODO_LIST_REFRESHING_STATUS:
      return {
        ...state,
        add: {
          ...state.add,
          isLoading: action.status
        }
      }
    case ACTION.ITEM_DETAIL_SUCCESS:
      return {
        ...state,
        detail: {
          ...state.detail,
          data: action.data,
          isLoading: false
        }
      }

    case ACTION.ITEM_DETAIL_REFRESHING_STATUS:
      return {
        ...state,
        detail: {
          ...state.detail,
          isLoading: action.status
        }
      }
      case ACTION.SET_STATUS_FOR_EDIT:
      return {
        ...state,
        add: {
          ...state.add,
          isEdit: action.status
        }
      }
      
    default:
      return state
  }
}

export default app
