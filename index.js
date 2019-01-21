import React from "react";
import ReactDOM from "react-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from "./reducers"
import StateLoader from "./components/StateLoader/StateLoader"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "assets/lib/bootstrap.min.css"
import "assets/scss/paper-dashboard.scss";
import "assets/lib/style.css";
import "assets/lib/material-icons.css";
import "assets/lib/paper-dashboard.css";
import WelcomeRoute from  "./welcomeRoute";
import EmployeeRoute from "./EmployeeRoute/EmployeeRoute";


const stateLoader = new StateLoader();
export const store = createStore(reducer,stateLoader.loadState());
store.subscribe(() => {
    stateLoader.saveState(store.getState());
});


ReactDOM.render(
  <Provider store={store}>
  <Router>
      <Switch>
          <Route path="/welcome/:role/:id" component={WelcomeRoute} />
          <Route path="/employee" component={EmployeeRoute} />

          <Route path="*" component={WelcomeRoute} />

      </Switch>
  </Router>
  </Provider>,
  document.getElementById("root")
);
