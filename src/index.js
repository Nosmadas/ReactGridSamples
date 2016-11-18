import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import DevTools from './containers/DevTools';
import appReducer from './reducers/reducer';
import App from './app';

const store = configureStore();

const root = document.getElementById('root');
const renderApp = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
      <div>
        <App />
        <DevTools />
        </div>
      </Provider>
    </AppContainer>,
    root
  );
};

if (module.hot) {
  module.hot.accept('./reducers/reducer', () => {
    store.replaceReducer(appReducer);
  });

  module.hot.accept('./app', renderApp);
}

renderApp();
