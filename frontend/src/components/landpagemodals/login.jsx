import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }



  render() {
    return (
      <>
        <h1>Login</h1>
        <input
          type='text'
          placeholder='Username'
          name='username'
          onChange={this.props.loginVal}
        />
        <input
          type='text'
          placeholder='Password'
          name='password'
          onChange={this.props.loginVal}
        />
        <button onClick={this.props.submit}>Submit</button>
        {this.props.userErr && <span style={{'color':'red'}}>errr message here</span>}
      </>


    )
  }
}

export default Login;