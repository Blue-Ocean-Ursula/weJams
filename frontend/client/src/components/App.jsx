import React from 'react';
import Homepage from './homepage/homepage.jsx';
import Login from './landpagemodals/login.jsx';
import Signup from './landpagemodals/signup.jsx';
import "../styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginModal: true,
      signupModal: true,
      username: null,
      password: null,
      newUsername: null,
      newPassword: null,
      newEmail: null,
      userErr: null,
      passErr: null
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

      this.setState({
        userErr: true
      })
  }

  signUpButton = (e) => {
    // onClick => open a model with options for username, email, password
    this.setState({
      signupModal: true,
    })
  }

  signupSubmitButton = () => {
    // on submit, check database for username,
      // if no user in database, put user data into database, bring user to homepage
      // else if user is in database already, "That username already exists. Please try another username"
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

  render() {
    return (
      <div className='mainLanding'>
        <h1 id='weTitle'>WeJamz</h1>
        <button className='landpage-buttons'>Login</button>
        <button className='landpage-buttons'>Sign Up</button>
        <button className='landpage-buttons'>Continue as Guest</button>
        {this.state.loginModal && <Login loginVal={this.loginVal} submit={this.loginSubmitButton} userErr={this.state.userErr} passErr={this.state.passErr} />}
        {this.state.signupModal && <Signup loginVal={this.loginVal} submit={this.signupSubmitButton}/>}
        <Homepage/>
      </div>

    )
  }
}

export default App;