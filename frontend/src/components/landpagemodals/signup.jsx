import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }



  render() {
    return (
        <div className='lPModalContainer'>
          <div className="modalTopRow">
            <div className="orangeText24">
              Sign-Up
            </div>
            <button className="modalCloseButton" onClick={this.props.exit}>
              X
            </button>
          </div>
          <div className="signUpMline2">Please create a new username and password</div>
          <div>
            <form>
              <input
                type='text'
                placeholder='Username'
                name='newUsername'
                onChange={this.props.loginVal}
                className="forms"
              />
            </form>
            <form>
              <input
                type='text'
                placeholder='Password'
                name='newPassword'
                onChange={this.props.loginVal}
                className="forms"
              />
            </form>
            <form>
              <input
                type='text'
                placeholder='E-Mail'
                name='newEmail'
                onChange={this.props.loginVal}
                className="forms"
              />
            </form>
          </div>
          <div>
            <button className="modalSubmitButton" onClick={this.props.submit}>Submit</button>
          </div>
        </div>
    )
  }
}

export default Signup;