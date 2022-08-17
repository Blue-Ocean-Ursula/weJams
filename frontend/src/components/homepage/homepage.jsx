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
      users: [],
      loggedInUser: null,
      uploads: [],
      VCShow: false,
      currentVersion: '',
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
        this.setState({
          loggedInUser: res.data,
        })
      })
  }

  getAllUsers = () => {
    axios({
      method: "get",
      withCredentials: true,
      url: 'http://localhost:3005/account/getallUser'
    })
      .then((res) => {
        this.setState({
          users: res.data,
        }, () => {
          var uploadsArr = [];
          this.state.users.forEach((user) => {
            user.uploads.forEach((uploaded) => {
              if (uploaded.version_history.length > 0) {
                uploadsArr.push(uploaded);
              }
            })
          })
          this.setState({
            uploads: uploadsArr,
          })
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

  seeVCModal = (e) => {
    console.log(e.target.attributes[1].value);
    this.setState({
      VCShow: true,
    })
  };


  render() {
    // let newUploads = this.state.uploads;
    const musicList = this.state.uploads.map((uploaded2) => (
      <HPMusicList seeVCModal={this.seeVCModal} usersUploads={uploaded2.version_history[0]}/>
    ));
    const usersList = this.state.users.map((user) => (
      <HPUsersList user={user} uploads={user.uploads} />
    ));
    if ((this.props.user === 'Guest' && this.state.uploads.length !== 0) || this.props.user === null) {
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