import React from 'react';
import {BrowserRouter, Switch ,Route } from 'react-router-dom';

import checkout from "../checkout/checkout";
import Notification from '../checkout/notification';
import home from "../home/home";
import login from "../login/login";
import product from "../product/product";
import registration from "../registration/registration";


function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={home} />
        <Route path="/home" component={home} />
        <Route path="/product" component={product} />
        <Route path="/login" component={login} />
        <Route path="/checkout" component={checkout} />
        <Route path="/registration" component={registration} />
        <Route path="/notification" component={Notification} />
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;
