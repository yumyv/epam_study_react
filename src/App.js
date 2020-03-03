import React from 'react';
import Navigation from './components/Navigation';
import {AppRoutes} from './components/AppRoutes';
import {Footer} from './components/Footer';
import styles from './styles.module.scss';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {configureStore} from './core/configureStore';

const store = configureStore();

function App() {
  return (
      <Provider store={store}>
        <BrowserRouter>
          <Navigation/>
          <main className={styles.main}>
            <AppRoutes/>
          </main>
          <Footer/>
        </BrowserRouter>
      </Provider>
  );
}

export default App;
