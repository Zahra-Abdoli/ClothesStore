import React from 'react'
import Input from '../../Components/form-input/input'
import CustomButton from '../boutton/button'
import './sign-in.scss'
export class SignIn extends React.Component
{
    constructor(props){
        super(props)
        this.state={
            password:'',
            email:''
        }
    }
    handleSubmit=event=>{
        event.preventDefault();
        this.setState({password:"",email:""})

    }
    handleChange=event=>{
        const{value,name}=event.target;
        this.setState({[name]:value})
    }

    render(){
        return(
<div className='sign-in'>
<h2 className='title'>I already have an account</h2>
<span>sign in with your email and your password</span>
<form onSubmit={this.handleSubmit}>
    <Input type="email" name='email' label='Email' value={this.state.email} handlechange={this.handleChange} required/>
    <Input type="password" name='password' label='Password' value={this.state.password} handlechange={this.handleChange} required/>
    <CustomButton type='submit'>Sign in</CustomButton>

    </form>
</div>
        );
    }
}
export default SignIn;