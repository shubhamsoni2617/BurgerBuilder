import React, { Component } from 'react';
import './App.css';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import { Route, Switch } from 'react-router-dom';
import Orders from './containers/Orders'

import Layout from './components/Layout/Layout';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch> 
            <Route path="/Checkout" component={Checkout} />
            <Route path="/Orders" component={Orders} />
            <Route path="/" exact component={BurgerBuilder} />
          </Switch>
         
        </Layout>
      </div>
    );
  }
}

export default App;
