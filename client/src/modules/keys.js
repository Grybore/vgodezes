<<<<<<< HEAD
const DEFAULT_STATE = { available: 0, minimum: 3, loaded: false };
const keys = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'GET_AVAILABLE_KEYS_RECEIVED':
      return Object.assign({}, state, {
        available: action.keyCount,
        loaded: true,
      });
    case 'EXIT':
    case 'AUTH_STATUS':
      return DEFAULT_STATE;
    default:
      return state;
  }
};

export default keys;
=======
const DEFAULT_STATE = { available: 0, minimum: 3, loaded: false };
const keys = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'GET_AVAILABLE_KEYS_RECEIVED':
      return Object.assign({}, state, {
        available: action.keyCount,
        loaded: true,
      });
    case 'EXIT':
    case 'AUTH_STATUS':
      return DEFAULT_STATE;
    default:
      return state;
  }
};

export default keys;
>>>>>>> 0a276c0d594bd0ccc1910be31f0fc259c6319449
