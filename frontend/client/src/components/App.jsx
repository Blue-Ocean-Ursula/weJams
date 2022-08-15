import React from 'react';
import Homepage from './homepage/homepage.jsx';
import Login from './landpagemodals/login.jsx';
import Signup from './landpagemodals/signup.jsx';
import Landing from './landingpage/landingpage.jsx';
import "../styles.css";
import axios from 'axios';
import { Global } from '../styledComp.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'landing',
      background: 'https://res.cloudinary.com/dktim9rur/image/upload/v1660423540/DJ_Background_uayfxx.webp'
    }
  }

  goHome = (e) => {
    this.setState({
      view: 'home',
      background: 'https://media.giphy.com/media/Wm92G9u3KisHcdo3yl/giphy.gif'
    })
  }

  render() {
    return (
      <>
      <Global backgroundImg={this.state.background}/>
      {this.state.view === 'landing' && <Landing goHome={this.goHome}/>}
      {this.state.view === 'home' && <Homepage className='homePage'/>}

      </>
    )
  }
}

export default App;