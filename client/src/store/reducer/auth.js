import * as actions from '../action/actions';

const initState = {
  isSignIn: null,
  userId: null
}


export function authReducer(state = initState, action) {
  switch (action.type) {
    case actions.SIGN_IN_SUCCESS:
      return {
        ...state,
        isSignIn: true,
        userId: action.payload
      }
    case actions.SIGN_IN_FAILED: {
      return {
        ...state,
        isSignIn: false,
        userId: null
      }
    }
    default:
      return state;
  }
}