import React from "react";
import Input from "../../Components/form-input/input";
import CustomButton from "../boutton/button";
import "./sign-in.scss";
import {auth, signInWithGoogle } from "../../firebase/firebase.utiles";
export class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      email: "",
    };
  }
  handleSubmit =async event => {
    event.preventDefault();
    const{email,password}=this.state;
    try{
      await auth.signInWithEmailAndPassword(email,password);
      this.setState({ password: "", email: "" });
    }catch(error){
      console.log(error);
    }

    

  };
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>sign in with your email and your password</span>
        <form onSubmit={this.handleSubmit}>
          <Input
            type="email"
            name="email"
            label="Email"
            value={this.state.email}
            handlechange={this.handleChange}
            required
          />
          <Input
            type="password"
            name="password"
            label="Password"
            value={this.state.password}
            handlechange={this.handleChange}
            required
          />
          <div className="buttons">
            <CustomButton type="submit">SignIn</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              SignIn with google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
export default SignIn;
