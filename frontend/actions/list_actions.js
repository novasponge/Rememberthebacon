export const FETCH_ALL_LISTS = "FETCH_ALL_LISTS";
export const FETCH_ONE_LIST = "FETCH_ONE_LIST";
export const RECEIVE_ALL_LISTS = "RECEIVE_ALL_LISTS";
export const RECEIVE_ONE_LIST = "RECEIVE_ONE_LIST";
export const UPDATE_LIST = 'UPDATE_LIST';
export const CREATE_LIST = 'CREATE_LIST';
export const DESTROY_LIST = 'DESTROY_LIST';
export const REMOVE_LIST = 'REMOVE_LIST';
export const RECEIVE_LIST_DETAIL = 'RECEIVE_LIST_DETAIL';
export const ADD_TASK_NUM_TO_LIST = "ADD_TASK_NUM_TO_LIST";


export const addTaskNumToList = (listId, numTask) => {
  return {
    type: ADD_TASK_NUM_TO_LIST,
    listId,
    numTask
  }
};

export const fetchAllLists = () => ({
  type: FETCH_ALL_LISTS,
});

export const receiveAllLists = ({list_index_info, task_num_info}) => ({
  type: RECEIVE_ALL_LISTS,
  list_index_info,
  task_num_info
});

export const receiveOneList = (list) => ({
  type: RECEIVE_ONE_LIST,
  list
});

export const updateList = (id, list) => ({
  type: UPDATE_LIST,
  id,
  list
});

export const createList = (list) => ({
  type: CREATE_LIST,
  list
});

export const destroyList = (id) => ({
  type: DESTROY_LIST,
  id
});

export const removeList = (id) => ({
  type: REMOVE_LIST,
  id
});

export const receiveListDetail = (list) => ({
  type: RECEIVE_LIST_DETAIL,
  list
});
