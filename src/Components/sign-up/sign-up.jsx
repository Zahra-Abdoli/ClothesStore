import React from "react";
import Input from "../form-input/input";
import CostumButton from "../boutton/button";
import {
  auth,
  CreateUserProfileDocument,
} from "../../firebase/firebase.utiles";
import "./sign-up.scss";
export class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  handeSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      
      await CreateUserProfileDocument(user, {displayName});
      debugger
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error);
    }
  };
  handleChange = event => {
    const { name, value } = event.target;
    debugger
    this.setState({ [name]: value });
  };
  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">
          I do not have account
          <span> sign up with email and your account</span>
        </h2>
        <form className="sign-up-form" onSubmit={this.handeSubmit}>
          <Input
            type="text"
            value={displayName}
            name="displayName"
            onChange={this.handleChange}
            label="Display Name"
            required
          />
          <Input
            type="email"
            value={email}
            name="email"
            onChange={this.handleChange}
            label="Email"
            required
          />
          <Input
            type="password"
            value={password}
            name="password"
            onChange={this.handleChange}
            label="Password"
            required
          />
          <Input
            type="password"
            value={confirmPassword}
            name="confirmPassword"
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <CostumButton type="submit">Sign Up</CostumButton>
        </form>
      </div>
    );
  }
}
export default SignUp;
