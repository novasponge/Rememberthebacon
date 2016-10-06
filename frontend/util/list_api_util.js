export const fetchLists = (success, errors) => {
  $.ajax({
    method: "GET",
    url: 'api/lists',
    success,
    errors
  });
};

export const fetchList = (id, success, errors) => {
  $.ajax({
    method: "GET",
    url: `api/lists/${id}`,
    success,
    errors
  });
};

export const updateListReq = (id, list, success, errors) => {
  $.ajax({
    method: "PATCH",
    url: `api/lists/${id}`,
    data: {list},
    success,
    errors
  });
};

export const createListReq = (list, success, errors) => {
  $.ajax({
    method: "POST",
    url: 'api/lists',
    data: {list},
    success,
    errors
  });
};
