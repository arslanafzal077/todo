import { ACTION } from '@redux/string';

export const fetchTodoListRequest = (data) => {
  return {
    type: ACTION.FETCH_TODO_LIST_REQUEST,
    data:data
  }
}
export const fetchTodoListSuccess = (data) => {
  return {
    type: ACTION.FETCH_TODO_LIST_SUCCESS,
    data: data
  }
}

export const todoRefreshingStatus = (status) => {
  return {
    type: ACTION.TODO_LIST_REFRESHING_STATUS,
    status: status
  }
}
export const addTodoListRequest = (data) => {
  return {
    type: ACTION.ADD_TODO_LIST_REQUEST,
    data:data
  }
}
export const addTodoListSuccess = (data) => {
  return {
    type: ACTION.ADD_TODO_LIST_SUCCESS,
    data: data
  }
}

export const addTodoRefreshingStatus = (status) => {
  return {
    type: ACTION.ADD_TODO_LIST_REFRESHING_STATUS,
    status: status
  }
}

export const fetchItemDetailRequest = (data) => {
  return {
    type: ACTION.FETCH_ITEM_DETAILL_REQUEST,
    data:data
  }
}
export const itemDetailSuccess = (data) => {
  return {
    type: ACTION.ITEM_DETAIL_SUCCESS,
    data: data
  }
}
export const itemDetailRefreshingStatus = (status) => {
  return {
    type: ACTION.ITEM_DETAIL_REFRESHING_STATUS,
    status: status
  }
}
export const setStatusForEdit = (status) => {
  return {
    type: ACTION.SET_STATUS_FOR_EDIT,
    status: status
  }
}
export const updateItemRequest = (data) => {
  return {
    type: ACTION.UPDATE_ITEM_REQUEST,
    data:data
  }
}



