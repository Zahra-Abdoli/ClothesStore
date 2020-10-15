import React from 'react';
import { Route,Switch } from 'react-router-dom';
import './App.css';
import HomePage from "./Pages/Homepage/HomePage.jsx"
import ShopPage from "./Pages/ShopPage/ShopPage"
function App() {
  return (
    <Switch>
<Route exact path='/' component={HomePage}/>
<Route exact path='/shop' component={ShopPage}/>
</Switch>
    
  );
}

export default App;
