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
        <div className='landingModalContainer'>
        <button id='modalExit' onClick={this.props.exit}>X</button>
        <h1>Login </h1>
        <input
          type='text'
          placeholder='Username'
          name='username'
          onChange={this.props.loginVal}
          className="formsLp"
        />
        <input
          type='text'
          placeholder='Password'
          name='password'
          onChange={this.props.loginVal}
          className="formsLp"
        />
        <button onClick={this.props.submit}>Submit</button>
        {this.props.userErr && <span style={{'color':'red'}}>errr message here</span>}
        </div>
      </div>


    )
  }
}

export default Login;