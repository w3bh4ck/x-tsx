import React from 'react';
import Routes from './routes/Routes';
import axios from 'axios';
import { Provider } from 'react-redux';
import store from './redux/store/store';

axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';
axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
