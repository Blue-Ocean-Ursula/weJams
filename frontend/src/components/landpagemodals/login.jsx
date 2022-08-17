import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }

    // document.addEventListener("click", () => {
    //   var open = false;
    //   if (event.target.className !== 'landpage-buttons') {
    //     open = true;
    //   }
    //   console.log(open);
    //   if (open === true && event.target.parentElement.className !== 'landingModalContainer') {
    //     this.props.exit();
    //   }
    // },
    // false
    // )

  }



  render() {
    return (
      <div className='landingModalBackground'>
        <div className='vCModalContainer'>
          <div className="modalTopRow">
            <div className="orangeText24">
              Login
            </div>
            <button className="modalCloseButton" onClick={this.props.exit}>
              X
            </button>
          </div>
          <div>
            <input
              type='text'
              placeholder='Username'
              name='username'
              onChange={this.props.loginVal}
              className="forms"
            />
            <input
              type='text'
              placeholder='Password'
              name='password'
              onChange={this.props.loginVal}
              className="forms"
            />
          </div>
          <div className="modalSubmitButton">
            <button className="modalSubmitButton" onClick={this.props.submit}>Submit</button>
          </div>
          {this.props.userErr && <span style={{ 'color': 'red' }}>errr message here</span>}
        </div>
      </div>


    )
  }
}

export default Login;