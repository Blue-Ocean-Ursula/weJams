import React from 'react';
import Login from '../landpagemodals/login.jsx';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
      userErr: false
    }
  }

searchButton = (e) => {
  alert('this doesn\'t work yet');
}

  render() {
    if (this.props.user === 'Guest') {
      var log = <button id='logout' onClick={this.props.loginButton}>Login</button>
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
        {this.props.login && <Login loginVal={this.props.loginVal} submit={this.props.submit} exit={this.props.exit} userErr={this.props.userErr} changeUser={this.props.changeUser} />}
        {/* loginVal={Landing.loginVal} submit={Landing.loginSubmitButton} userErr={Landing.state.userErr} passErr={Landing.state.passErr}  */}
      </div>
    )
  }
}

export default Navbar;