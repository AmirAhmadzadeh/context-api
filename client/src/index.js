import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './sass/index.scss';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

function Appliaction() {
  return (
    <Provider store={configureStore()}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  )
}

ReactDOM.render(<Appliaction />,
  document.querySelector('#root'));