export const fetchLists = (success, error) => {
  $.ajax({
    method: "GET",
    url: 'api/lists',
    success,
    error
  });
};

export const fetchList = (id, success, error) => {
  $.ajax({
    method: "GET",
    url: `api/lists/${id}`,
    success,
    error
  });
};

export const updateListReq = (id, list, success, error) => {
  $.ajax({
    method: "PATCH",
    url: `api/lists/${id}`,
    data: {list},
    success,
    error
  });
};

export const createListReq = (list, success, error) => {
  $.ajax({
    method: "POST",
    url: 'api/lists',
    data: {list},
    success,
    error
  });
};

export const destroyListReq = (id, success, error) => {
  $.ajax({
    method: "DELETE",
    url: `api/lists/${id}`,
    success,
    error
  });
};
