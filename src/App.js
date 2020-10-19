import React from 'react';
import { Route,Switch } from 'react-router-dom';
import './App.css';
import HomePage from "./Pages/Homepage/HomePage.jsx"
import ShopPage from "./Pages/ShopPage/ShopPage"
import Header from './Components/Header/Header'
import SignInAndSignUP from './Pages/signIn-signUp/signIn-signUp'
function App() {
  return (
    <div>
    <Header/>
    <Switch>
<Route exact path='/' component={HomePage}/>
<Route exact path='/shop' component={ShopPage}/>
<Route exact path='/signin' component={SignInAndSignUP}/>
</Switch>
</div>
    
  );
}

export default App;
