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
    this.setState({
      loginModal: true
    })
  }

  loginSubmitButton = (e) => {
    var user = this.state.username;
    var password = this.state.password;
    axios({
      method: "post",
      data: {
        username: user,
        password: password,
      },
      withCredentials: true,
      url: 'http://localhost:3005/account/login'
    })
    .then((res) => {
      if (res.data === 'successfully authenticated') {
        this.props.changeUser(user);
        this.props.goHome();
      } else {
        this.setState({
          userErr: true
        })
      }
    })
  }

  signUpButton = (e) => {
    this.setState({
      signupModal: true,
    })
  }

  signupSubmitButton = (e) => {
      var user = this.state.username;
      var password = this.state.password;
      var email = this.state.newEmail;
      axios({
        method: "post",
        data: {
          username: user,
          password: password,
          email: email,
        },
        withCredentials: true,
        url: 'http://localhost:3005/account/register'
      })
      .then((res) => {
        if (res.data === "User Created") {
          this.props.changeUser(user);
            this.props.goHome();
        }
      })
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
        <h1 id='weTitle'>WeJamz</h1>
        <button onClick={this.loginButton} className='landpage-buttons'>Login</button>
        <button onClick={this.signUpButton} className='landpage-buttons'>Sign Up</button>
        <button onClick={this.props.goHome} className='landpage-buttons'>Continue as Guest</button>
        {this.state.loginModal && <Login open={this.state.loginModal} changeUser={this.props.changeUser} loginVal={this.loginVal} submit={this.loginSubmitButton} userErr={this.state.userErr} passErr={this.state.passErr} exit={this.exitModal}/>}
        {this.state.signupModal && <Signup loginVal={this.loginVal} submit={this.signupSubmitButton} exit={this.exitModal}/>}
      </div>

    )
  }
}

export default Landing;