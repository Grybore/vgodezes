<<<<<<< HEAD
const DEFAULT_STATE = {
  authenticated: false,
  avatar: '',
  username: '',
};
const auth = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'AUTH_STATUS':
      return Object.assign({}, state, {
        authenticated: action.authenticated,
        avatar: action.avatar,
        username: action.username,
      });
    case 'IŠEITI':
      return DEFAULT_STATE;
    default:
      return state;
  }
};

export default auth;
=======
const DEFAULT_STATE = {
  authenticated: false,
  avatar: '',
  username: '',
};
const auth = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'AUTH_STATUS':
      return Object.assign({}, state, {
        authenticated: action.authenticated,
        avatar: action.avatar,
        username: action.username,
      });
    case 'IŠEITI':
      return DEFAULT_STATE;
    default:
      return state;
  }
};

export default auth;
>>>>>>> 0a276c0d594bd0ccc1910be31f0fc259c6319449
