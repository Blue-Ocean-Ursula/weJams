import React from 'react';
import Navbar from './navbar.jsx';
import HPMusicList from './musicList.jsx';
import HPUsersList from './usersList.jsx';
import axios from 'axios';
//12$asfse456
class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uploads: {
        "musicName": "Javascript is another jazz",
        "version_history": [
          {
            "version_name": "Official instrumental",
            "description": "I got the inspiration from my FEC project experience",
            "url": "http://aweaewawe/wasd.com/weaa12343",
            "likes": 15,
            "createdAt": "Thu Jul 11 2022 11:21:26",
          },
          {
            "version_name": "Remix",
            "description": "this is a song I wrote for one of my memorable experience",
            "url": "http://aweaewawe/wasd.com/weaa12343",
            "likes": 12,
            "createdAt": "Fri Aug 18 2022 11:21:26",
          }
        ]
      },
      users: [],
      loggedInUser: null,
    }
  }

  componentDidMount = () => {
    if (this.props.user !== 'Guest') {
      console.log('hit')
      this.getUserInfo();
    }
    this.getAllUsers();
  }

  getUserInfo = () => {
    axios({
      method: "get",
      withCredentials: true,
      url: 'http://localhost:3005/account/getUser'
    })
    .then((res) => {
      console.log(res)
      this.setState({
        loggedInUser: res.data,
      })
    })
    console.log(this.state.loggedInUser)
  }

  getAllUsers = () => {
    axios({
      method: "get",
      withCredentials: true,
      url: 'http://localhost:3005/account/getallUser'
    })
    .then((res) => {
      console.log(res)
      this.setState({
        users: res.data,
      })
    })

  }

  goToMyProf = () => {
    // when clicking on my profile pic or username, go to user profile prage
  }

  goToRandomUsersProf = () => {
    // when clicking a users profile pic or name, bring to that users profile
  }

  messageRandomUser = () => {
    // when clicked open a modal(maybe) that allows the user to message the random user clicked
  }

  requestCollobRandomUser = () => {
    // when clicked, open a live chat option with specified user
  }



  render() {
    const musicList = this.state.uploads.version_history.map((version) => (
      <HPMusicList version={version} />
    ));
    const usersList = this.state.users.map((user) => (
      <HPUsersList user={user} uploads={user.uploads} />
    ));
    if (this.props.user === 'Guest' || this.props.user === null) {
      return (
        <>
          <div className='homepage-container'>
            <Navbar land={this.props.land} user={this.props.user} />
            <div className="versionList">{usersList}</div>
            <div className="versionList">{musicList}</div>
          </div>
        </>
      )
    } else if (this.state.loggedInUser !== null) {
      return (
        <>
          <div className='homepage-container'>
            <Navbar land={this.props.land} user={this.props.user} />
            <div className='homepage-userinfo-container'>
              <img className='usersphoto' src={this.state.loggedInUser.avatar} alt='profile' />
              <h4 className='username-h4'>{this.props.user}</h4>
              <p className='userbio'>{this.state.loggedInUser.bio}</p>
            </div>
            <div className="versionList">{usersList}</div>
            <div className="versionList">{musicList}</div>
          </div>
        </>
      )
    }

  }
}

export default Homepage;