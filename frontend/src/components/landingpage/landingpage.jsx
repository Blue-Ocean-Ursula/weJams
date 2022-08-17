import React from 'react';
import Homepage from '../homepage/homepage.jsx';
import Login from '../landpagemodals/login.jsx';
import Signup from '../landpagemodals/signup.jsx';
import axios from 'axios';

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signupModal: null,
      password: null,
      username: null,
      newEmail: null
    }
  }

  signUpButton = (e) => {
  // onClick => open a model with options for username, email, password
    this.setState({
      signupModal: true,
    })
  }

  exitModal = (e) => {
    this.setState({
      signupModal: false,
    })
  }

  loginVal = (e) => {
    var name = e.target.name;
    var val = e.target.value;
    this.setState({
      [name]: val
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

  render() {
    return (
      <div className='mainLanding'>
        <h1 id='weTitle'>WeJamz</h1>
        <button onClick={this.props.loginButton} className='landpage-buttons'>Login</button>
        <button onClick={this.signUpButton} className='landpage-buttons'>Sign Up</button>
        <button onClick={this.props.goHome} className='landpage-buttons'>Continue as Guest</button>
        {this.props.login && <Login open={this.state.loginModal} changeUser={this.props.changeUser} loginVal={this.props.loginVal} submit={this.props.submit} userErr={this.props.userErr} passErr={this.state.passErr} exit={this.props.exit}/>}
        {this.state.signupModal && <Signup loginVal={this.loginVal} submit={this.signupSubmitButton} exit={this.exitModal}/>}
      </div>

    )
  }
}

export default Landing;
