import React from 'react';
import Login from '../landpagemodals/login.jsx';
import Landing from '../landingpage/landingpage.jsx';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginModal: false,
      username: null,
      password: null,
      userErr: false
    }
  }

searchButton = (e) => {
  alert('this doesn\'t work yet');
}

loginButton = (e) => {
  // onClick => open a modal with username and password fields
  this.setState({
    loginModal: true
  })
}

exitModal = (e) => {
  this.setState({
    loginModal: false
  })
}


  render() {
    if (this.props.user === 'Guest') {
      var log = <button id='logout' onClick={this.loginButton}>Login</button>
    } else {
      var log = <button id='logout' onClick={this.props.land}>Logout</button>;
    }
    return (
      <div>
      <span className='navbar'>
        <div id='logo'>
          <img src='https://res.cloudinary.com/dktim9rur/image/upload/v1660579940/Screen_Shot_2022-08-15_at_10.12.00_AM_ju6kt7.jpg' alt='logo'/>
        </div>
        <div id='search'>
        <input type='text' placeholder='Username or Genre'/>
        <button onClick={this.searchButton}>Search</button>
        </div>
        <div id='signedIn'>Signed in as {this.props.user}</div>
        {log}
      </span>
        {this.state.loginModal && <Login loginVal={Landing.loginVal} submit={Landing.loginSubmitButton} exit={this.exitModal} userErr={this.state.userErr}/>}
        {/* loginVal={Landing.loginVal} submit={Landing.loginSubmitButton} userErr={Landing.state.userErr} passErr={Landing.state.passErr}  */}
      </div>
    )
  }
}

export default Navbar;