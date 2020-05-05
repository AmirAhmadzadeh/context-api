//array base Approach 

import {
  FETCH_STREAM,
  FETCH_STREAMS,
  EDIT_STREAM,
  DELETE_STREAM,
  CREATE_STREAM
} from '../action/actions';

const initState = {
  streams: [],
  selectedStream: null
};

export default function (state = initState, action) {
  switch (action.key) {
    case FETCH_STREAMS:
      return {
        ...state,
        streams: [...state.streams, action.payload]
      }
    case FETCH_STREAM:
      return {
        ...state,
        selectedStream: action.payload
      }

    case EDIT_STREAM:
      return {
        ...state,
        streams: state.streams.map(item => {
          if (item.id === action.payload.id) {
            return action.payload;
          }
          return item;
        })
      }
    case DELETE_STREAM:
      return {
        ...state,
        streams: state.streams.filter(item => {
          return item.id !== action.payload.id
        })
      }
    case CREATE_STREAM:
      return {
        ...state
      }
    default:
      return state
  }
}