import React from 'react';
import Homepage from './features/homepage/';
import {Provider} from 'react-redux';
import {configureStore} from './core/configureStore';

const store = configureStore();

function App() {
  return (
      <Provider store={store}>
        <Homepage/>
      </Provider>
  );
}

export default App;
