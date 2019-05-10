import React from 'react';
import { Provider, connect } from 'react-redux';

import store from './store/index';
import TodoList from './TodoList';

const App = () => (
  <Provider store={store}>
    <TodoList />
  </Provider>
);

export default App;
