export const fetchListTasks = (listId, success, error) => {
  $.ajax({
    method: "GET",
    url: `api/lists/${listId}/tasks`,
    success,
    error
  });
};

export const fetchTasks = (success, error) => {
  $.ajax({
    method: "GET",
    url: 'api/tasks',
    success,
    error
  });
};

export const fetchTask = (listId, taskId, success, error) => {
  $.ajax({
    method: "GET",
    url: `api/lists/${listId}/tasks/${taskId}`,
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

export const createTaskReq = (listId, task, success, error) => {
  $.ajax({
    method: "POST",
    url: `api/lists/${listId}/tasks`,
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
