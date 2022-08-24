import React from 'react';
import {BrowserRouter, Switch ,Route } from 'react-router-dom';

import checkout from '../checkout/checkout';
import home from "../home/home";
import login from "../login/login";
import product from "../product/product";
import registration from "../registration/registration";


function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={home} />
        <Route path="/product" component={product} />
        <Route path="/login" component={login} />
        <Route path="/checkout" component={checkout} />
        <Route path="/registration" component={registration} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
