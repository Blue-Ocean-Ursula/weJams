import React from 'react';
import Homepage from './homepage/homepage.jsx';
import Landing from './landingpage/landingpage.jsx';
import ProfilePage from './profilepage/profilepage.jsx'
import axios from 'axios';
import { Global } from '../styledComp.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: 'Guest',
      view: 'landing',
      background: 'https://res.cloudinary.com/dktim9rur/image/upload/v1660423540/DJ_Background_uayfxx.webp'
    }
  }

  goLanding = (e) => {
    this.setState({
      view: 'landing',
      background: 'https://res.cloudinary.com/dktim9rur/image/upload/v1660423540/DJ_Background_uayfxx.webp'
    })
  }

  goHome = (e) => {
    this.setState({
      view: 'home',
      background: 'https://res.cloudinary.com/dktim9rur/image/upload/v1658162058/nyyag1xyh1z7akuep8px.gif'
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

  render() {
    return (
      <>
      <ProfilePage />

      {/*<Global backgroundImg={this.state.background}/>
      {this.state.view === 'landing' && <Landing goHome={this.goHome} user={this.state.user} changeUser={this.changeUser}/>}
      {this.state.view === 'home' && <Homepage goProfile={this.goProfile} land={this.goLanding} user={this.state.user} changeUser={this.changeUser}/>}
    */}
      </>
    )
  }
}

export default App;