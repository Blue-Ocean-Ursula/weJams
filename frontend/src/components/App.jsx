import React from 'react';
import Homepage from './homepage/homepage.jsx';
import Landing from './landingpage/landingpage.jsx';
// import ProfileHome from './profilepage/profilePageIndex.jsx';
import axios from 'axios';
import { Global } from '../styledComp.jsx';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginModal: null,
      user: 'Guest',
      view: 'landing',
      background: 'https://res.cloudinary.com/dktim9rur/image/upload/v1660423540/DJ_Background_uayfxx.webp',
      username: null,
      password: null,
      newEmail: null,
      userErr: null,
      passErr: null,
    }
  }
  goLanding = (e) => {
    this.setState({
      user: 'Guest',
      view: 'landing',
      background: 'https://res.cloudinary.com/dktim9rur/image/upload/v1660423540/DJ_Background_uayfxx.webp'
    })
  }
  goHome = (e) => {
    this.setState({
      view: 'home',
      background: 'https://res.cloudinary.com/dktim9rur/image/upload/v1660423540/DJ_Background_uayfxx.webp'
    })
  }
  goProfile = (e) => {
    this.setState({
      view: 'profile',
      background: 'https://media.giphy.com/media/Wm92G9u3KisHcdo3yl/giphy.gif'
    })
  }
  changeUser = (user) => {
    this.setState({
      user: user
    })
  }
  exitModal = (e) => {
    this.setState({
      loginModal: false,
      signupModal: false,
      userErr: null
    })
  }
  loginButton = (e) => {
    // onClick => open a modal with username and password fields
    this.setState({
      loginModal: true
    })
  }
  loginVal = (e) => {
    var name = e.target.name;
    var val = e.target.value;
    this.setState({
      [name]: val
    })
  }
  loginSubmitButton = (e) => {
    var user = this.state.username;
    var password = this.state.password;
    axios({
      method: "post",
      data: {
        username: user,
        password: password,
      },
      withCredentials: true,
      url: 'http://localhost:3005/account/login'
    })
    .then((res) => {
      if (res.data === 'successfully authenticated') {
        this.changeUser(user);
        this.exitModal();
        this.goHome();
      } else {
        this.setState({
          userErr: true
        })
      }
    })
  }
  render() {
    return (
      <>
      <Global backgroundImg={this.state.background}/>
      {this.state.view === 'landing' && <Landing loginVal={this.loginVal} submit={this.loginSubmitButton} goHome={this.goHome} user={this.state.user} changeUser={this.changeUser} userErr={this.state.userErr} exit={this.exitModal} loginButton={this.loginButton} login={this.state.loginModal}/>}
      {this.state.view === 'home' && <Homepage loginVal={this.loginVal} submit={this.loginSubmitButton} goProfile={this.goProfile} land={this.goLanding} user={this.state.user} changeUser={this.changeUser} userErr={this.state.userErr} view={this.state.view} goHome={this.goHome} loginButton={this.loginButton} login={this.state.loginModal} exit={this.exitModal}/>}
      {/* <ProfileHome /> */}
      {/*<Global backgroundImg={this.state.background}/>
      {this.state.view === 'landing' && <Landing goHome={this.goHome} user={this.state.user} changeUser={this.changeUser}/>}
      {this.state.view === 'home' && <Homepage goProfile={this.goProfile} land={this.goLanding} user={this.state.user} changeUser={this.changeUser}/>}
    */}
      </>
    )
  }
}
export default App;