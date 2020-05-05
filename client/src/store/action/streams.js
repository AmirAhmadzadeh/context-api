import streamApi from '../../api/';
import {
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  EDIT_STREAM,
  DELETE_STREAM
} from './actions';
//create stream 
export const createStream = (data) => async dispatch => {
  try {
    const response = await streamApi.post('/streams', { ...data });
    dispatch({ type: CREATE_STREAM })
    // dispatch(streamCreatedSuccessfully());
  } catch (error) {
    console.log('[Error in Create Stream Action Creator]', error);
  }
}

//fetch streams 
export const fetchStreams = () => async dispatch => {
  try {
    const response = await streamApi.get('/streams');
    dispatch({
      type: FETCH_STREAMS,
      payload: response.data
    })
  } catch (error) {
    console.log('Error in FetchStreams action Creator');
  }
}
// fetch stram 
export const fetchStream = (id) => async dispatch => {
  try {
    const response = streamApi.get(`/streams/${id}`);
    dispatch({
      type: FETCH_STREAM,
      payload: response.data
    });
  } catch (error) {
    console.log('Error Inside FetchStream', error);
  }
}

//edit streams 
export const editStream = (id, formVals) => async dispatch => {
  const response = await streamApi.put(`/streams/${id}`, formVals)
  dispatch({
    type: EDIT_STREAM,
    payload: response.data
  });
}

export const deleteStream = (id) => async dispatch => {
  await streamApi.delete(`/streams/${id}`);
  dispatch({
    type: DELETE_STREAM,
    payload: id
  });
  // fetchStreams();
}