import React from 'react';
import { Route,Switch } from 'react-router-dom';
import './App.css';
import HomePage from "./Pages/Homepage/HomePage.jsx"
import ShopPage from "./Pages/ShopPage/ShopPage"
import Header from './Components/Header/Header'
import SignInAndSignUP from './Pages/signIn-signUp/signIn-signUp'
import {auth,CreateUserProfileDocument} from './firebase/firebase.utiles'
export class App extends React.Component{

  constructor(){
    super();
    this.state={
      currentUser:null
    }

  }
unsubscribeFromAuth=null;
  componentDidMount(){
    this.unsubscribeFromAuth=auth.onAuthStateChanged( async userAuth=>{
      if(userAuth)
      {
     const userRef= await CreateUserProfileDocument(userAuth);
     debugger;
     userRef.onSnapshot(snapShot=>{
       this.setState({
         currentUser:{
           id:snapShot.id,
           ...snapShot.data()
         }
        });
     });
     debugger;
  }
  this.setState({currentUser:userAuth})
});
  }
  componentWillUnmount(){
this.unsubscribeFromAuth();
  }
  render(){
  return (
    <div>
    <Header currentUser={this.state.currentUser}/>
    <Switch>
<Route exact path='/' component={HomePage}/>
<Route exact path='/shop' component={ShopPage}/>
<Route exact path='/signin' component={SignInAndSignUP}/>
</Switch>
</div>
    
  );
}
}
export default App;
