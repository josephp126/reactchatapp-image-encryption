import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import GlobalProvider from './context/Provider'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Routes from './routes';

ReactDOM.render(
  <GlobalProvider>
    <React.StrictMode>
      <Router>
        <Switch>
          <Routes />
        </Switch>
      </Router>
    </React.StrictMode>
  </GlobalProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
