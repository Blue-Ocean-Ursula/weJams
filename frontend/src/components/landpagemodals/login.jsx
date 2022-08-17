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
        <form>
        <input
          type='text'
          placeholder='Username'
          name='username'
          onChange={this.props.loginVal}
        /><br/>
        <input
          type='password'
          placeholder='Password'
          name='password'
          onChange={this.props.loginVal}
        />
        </form>
        <button onClick={this.props.submit}>Submit</button>
        {this.props.userErr && <span style={{'color':'red'}}>Error in Username or Password, please try again.</span>}
        </div>
      </div>


    )
  }
}

export default Login;