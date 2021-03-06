export const FETCH_ALL_TASKS = "FETCH_ALL_TASKS";
export const FETCH_LIST_TASKS = "FETCH_LIST_TASKS";
export const FETCH_ONE_TASK = "FETCH_ONE_TASK";
export const RECEIVE_ALL_TASKS = "RECEIVE_ALL_TASKS";
export const RECEIVE_ONE_TASK = "RECEIVE_ONE_TASK";
export const UPDATE_TASK = 'UPDATE_TASK';
export const CREATE_TASK = 'CREATE_TASK';
export const DESTROY_TASK = 'DESTROY_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const REMOVE_TASKS = 'REMOVE_TASKS';
export const RECEIVE_TASK_DETAIL = "RECEIVE_TASK_DETAIL";
export const SEARCH_TASKS = "SEARCH_TASKS";

export const removeTasks = () => ({
  type: REMOVE_TASKS
});

export const searchTasks = (queryStr) => ({
  type: SEARCH_TASKS,
  queryStr
});

export const fetchAllTasks = () => ({
  type: FETCH_ALL_TASKS
});

export const fetchListTasks = (listId) => ({
  type: FETCH_LIST_TASKS,
  listId
});

export const receiveAllTasks = (tasks) => ({
  type: RECEIVE_ALL_TASKS,
  tasks
});

export const receiveOneTask = (task) => {
  return {
    type: RECEIVE_ONE_TASK,
    task
  };
};

export const updateTask = (id, task, oldListId) => {
  return {type: UPDATE_TASK,
  id,
  task,
  oldListId
  };
};

export const createTask = (listId, task) => ({
  type: CREATE_TASK,
  listId,
  task
});

export const destroyTask = (id) => ({
  type: DESTROY_TASK,
  id
});

export const removeTask = (id) => {
  return {
    type: REMOVE_TASK,
    id
  };
};

export const receiveTaskDetail = (task) => ({
  type: RECEIVE_TASK_DETAIL,
  task
});
