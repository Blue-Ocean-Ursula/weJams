import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }



  render() {
    return (
      <div className='landingModalBackground' onClick={this.props.exit}>
        <div className='landingModalContainer'>
          <h1>Sign-Up</h1>
          <p>Please create a new username and password</p>
          <input
            type='text'
            placeholder='Username'
            name='newUsername'
            onChange={this.props.loginVal}
          />
          <input
            type='text'
            placeholder='Password'
            name='newPassword'
            onChange={this.props.loginVal}
          />
          <input
            type='text'
            placeholder='E-Mail'
            name='newEmail'
            onChange={this.props.loginVal}
          />
          <button onClick={this.props.submit}>Submit</button>
        </div>
      </div>

    )
  }
}

export default Signup;