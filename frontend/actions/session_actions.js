export const SIGNUP = "SIGNUP";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERROR = 'CLEAR_ERROR';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const signup = (user) => ({
  type: SIGNUP,
  user
});

export const logout = () => ({
  type: LOGOUT,
});

export const login = (user) => ({
  type: LOGIN,
  user
});

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearError = (error) => ({
  type: CLEAR_ERROR,
  error
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});
