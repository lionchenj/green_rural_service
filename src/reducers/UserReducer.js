const initialState = {
  userinfo: {}
};

export default (state = initialState, actions) => {
  switch (actions.type) {
    case "GETUSERINFO":
      return {
        ...state,
        userinfo: {
          ...state.userinfo,
          ...actions.val
        }
      };
      break;
    default:
      return state;
  }
};
