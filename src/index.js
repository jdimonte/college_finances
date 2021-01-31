import React from 'react';
import ReactDOM from 'react-dom';
import AuthProvider from './provider/AuthProvider'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import './Style.css';
import reportWebVitals from './reportWebVitals';
// pages
import Home from './pages/Home';
import SignInPage from './pages/SignInPage';
import Dashboard from './pages/Dashboard';
import NotFoundPage from './pages/404';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={SignInPage} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/404" component={NotFoundPage} />
        <Redirect to="/404" /> 
      </Switch>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
