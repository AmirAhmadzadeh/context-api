import * as actions from './actions';



export function signIn(userId) {
  return {
    type: actions.SIGN_IN_SUCCESS,
    payload: userId
  }
}

export function signOut() {
  return {
    type: actions.SIGN_IN_FAILED
  }
}