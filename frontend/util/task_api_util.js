export const fetchTasks = (success, error) => {
  $.ajax({
    method: "GET",
    url: "api/tasks",
    success,
    error
  });
};

export const fetchTask = (id, success, error) => {
  $.ajax({
    method: "GET",
    url: `api/tasks/${id}`,
    success,
    error
  });
};

export const updateTaskReq = (id, task, success, error) => {
  $.ajax({
    method: "PATCH",
    url: `api/tasks/${id}`,
    data: {task},
    success,
    error
  });
};

export const createTaskReq = (task, success, error) => {
  $.ajax({
    method: "POST",
    url: 'api/tasks',
    data: {task},
    success,
    error
  });
};

export const destroyTaskReq = (id, success, error) => {
  $.ajax({
    method: 'DELETE',
    url: `api/tasks/${id}`,
    success,
    error
  });
};
