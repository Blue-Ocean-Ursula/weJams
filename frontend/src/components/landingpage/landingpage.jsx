import React from 'react';
import Homepage from '../homepage/homepage.jsx';
import Login from '../landpagemodals/login.jsx';
import Signup from '../landpagemodals/signup.jsx';
import axios from 'axios';

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginModal: null,
      signupModal: null,
      username: null,
      password: null,
      newUsername: null,
      newPassword: null,
      newEmail: null,
      userErr: null,
      passErr: null,
    }
  }

  loginButton = (e) => {
    // onClick => open a modal with username and password fields
    this.setState({
      loginModal: true
    })
  }

  loginSubmitButton = (e) => {
    // on Submit query database to find if username is in database and matches password
    // if yes login user and send to homepage as that user
    // if no alert message ->
    // if user isn't in database, "No user by that name"
    // if password is incorrect, "That password doesn't match, please try again"

    // axios GET request...
    // if res.data.username !== undefined then
    // if res.data.username.password === this.state.password
    // login successfully
    // else "That password doesn't match, please try again"
    // else "No user by that name"
    var user = this.state.username;
    var pass = this.state.password;
    axios({
      method: "post",
      data: {
        username: user,
        password: pass,
      },
      withCredentials: true,
      url: 'http://localhost:3005/login'
    })
      .then((res) => { console.log(res) })

    this.setState({
      userErr: true
    })
    this.props.changeUser(user)
    alert('user = ' + user)
  }

  signUpButton = (e) => {
    // onClick => open a model with options for username, email, password
    this.setState({
      signupModal: true,
    })
  }

  signupSubmitButton = (e) => {
    // on submit, check database for username,
    // if no user in database, put user data into database, bring user to homepage
    // else if user is in database already, "That username already exists. Please try another username"
    e.preventDefault();
    axios({
      method: "post",
      data: {
        username: this.state.newUsername,
        password: this.state.newPassword,
        email: this.state.newEmail,
      },
      withCredentials: true,
      url: 'http://localhost:3005/register'
    })
      .then((res) => { console.log(res) })
  }

  guestButton = (e) => {
    // onClick => bring user to homepage, but with restricted access (no access) to personal user profile
  }


  loginVal = (e) => {
    var name = e.target.name;
    var val = e.target.value;
    this.setState({
      [name]: val
    })
  }

  exitModal = (e) => {
    this.setState({
      loginModal: false,
      signupModal: false,
    })
  }

  render() {
    return (
      <div className='mainLanding'>
            {this.state.loginModal && <Login open={this.state.loginModal} changeUser={this.props.changeUser} loginVal={this.loginVal} submit={this.loginSubmitButton} userErr={this.state.userErr} passErr={this.state.passErr} exit={this.exitModal} />}
        {this.state.signupModal && <Signup loginVal={this.loginVal} submit={this.signupSubmitButton} exit={this.exitModal} />}
        <h1 className='weTitle'>WeJamz</h1>
        <div className="buttonsRowLp">
          <button onClick={this.loginButton} className='landpage-buttons'>Login</button>
          <button onClick={this.props.goHome} className='landpage-buttons'>Continue as Guest</button>
          <button onClick={this.signUpButton} className='landpage-buttons'>Sign Up</button>
        </div>
      </div>

    )
  }
}

export default Landing;