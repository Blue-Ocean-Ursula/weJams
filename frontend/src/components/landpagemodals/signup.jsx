import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }



  render() {
    return (
      <div className='landingModalBackground'>
        <div className='landingModalContainer'>
        <button id='modalExit' onClick={this.props.exit}>X</button>
          <h1>Sign-Up</h1>
          <p>Please create a new username and password</p>
          <form>
          <input
            type='text'
            placeholder='Username'
            name='username'
            onChange={this.props.loginVal}
          />
          <br/>
          <input
            type='password'
            placeholder='Password'
            name='password'
            onChange={this.props.loginVal}
          />
          <br/>
          <input
            type='text'
            placeholder='E-Mail'
            name='newEmail'
            onChange={this.props.loginVal}
          />
          </form>
          <button onClick={this.props.submit}>Submit</button>
        </div>
      </div>

    )
  }
}

export default Signup;