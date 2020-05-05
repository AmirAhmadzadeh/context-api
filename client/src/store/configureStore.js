import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import rThunk from 'redux-thunk';
import { authReducer, streamReducer } from './reducer';
import { reducer as formReducer } from 'redux-form';


const reducer = combineReducers({
  auth: authReducer,
  form: formReducer,
  streams: streamReducer
});


const composeEnhaunster = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const configureStore = () => {
  return createStore(reducer, composeEnhaunster(applyMiddleware(rThunk)));
}



export default configureStore;