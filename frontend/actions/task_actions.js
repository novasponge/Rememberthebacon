export const FETCH_ALL_TASKS = "FETCH_ALL_TASKS";
export const FETCH_ONE_TASK = "FETCH_ONE_TASK";
export const RECEIVE_ALL_TASKS = "RECEIVE_ALL_TASKS";
export const RECEVIE_ONE_TASK = "RECEIVE_ONE_TASK";
export const UPDATE_TASK = 'UPDATE_TASK';
export const CREATE_TASK = 'CREATE_TASK';
export const DESTROY_TASK = 'DESTROY_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';

export const fetchAllTasks = () => ({
  type: FETCH_ALL_TASKS,
});

export const fetchOneTask = (id) => ({
  type: FETCH_ONE_TASK,
  id
});

export const receiveAllTasks = (tasks) => ({
  type: RECEIVE_ALL_TASKS,
  tasks
});

export const receiveOneTask = (task) => ({
  type: RECEVIE_ONE_TASK,
  task
});

export const updateTask = (id, task) => ({
  type: UPDATE_TASK,
  id,
  task
});

export const createTask = (task) => ({
  type: CREATE_TASK,
  task
});

export const destroyTask = (id) => ({
  type: DESTROY_TASK,
  id
});

export const removeTask = (id) => ({
  type: REMOVE_TASK,
  id
});
