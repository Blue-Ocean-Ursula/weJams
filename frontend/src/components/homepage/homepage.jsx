import React from 'react';
import Navbar from './navbar.jsx';
import HPMusicList from './musicList.jsx';
import HPUsersList from './usersList.jsx';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uploads: {"musicName": "Javascript is another jazz",
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
      users: [
        {
          "username": "Lawrence",
          "bio": "I am a singer from Italy, Please enjoy my music!",
          "avatar": "https://robohash.org/uteteum.png?size=50x50&set=set1",
          "category": ["pop","r&b" ],
          "following": ["Dua Lipa", "Candace"],
          "followedby": ["Kai"],
          "memberof": ["Butterflies", "Ice ages"],
          "uploads": [
            {
              "musicName": "I like HR",
              "version_history": [
              {
              "version_name": "Original version",
              "description": "this is a song I wrote for one of my memorable experience",
              "url": "http://aweaewawe/wasd.com/weaa12343",
              "likes": 12,
              "createdAt": "Fri Aug 12 2022 11:21:26",
              },
              {
              "version_name": "Remix 1",
              "description": "this is a song I wrote for one of my memorable experience",
              "url": "http://aweaewawe/wasd.com/weaa12343",
              "likes": 12,
              "createdAt": "Fri Aug 18 2022 11:21:26",
              }]
            },

            {
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
              "createdAt": "Fri Aug 18 2022 11:21:26"}]
            }],
          "timeline": [
            {"date": "Fri Aug 05 2020 11:21:26", "action": "Joined in the community", "involvedName": null},
            {"date": "Fri Aug 03 2021 11:21:26", "action": "Published a new song", "involvedName": "Javascript is another jazz"},
            {"date": "Fri Aug 05 2021 11:21:26", "action": "Joined band",  "involvedName": "Ice ages"},
            {"date": "Fri Nov 12 2021 11:21:26", "action": "Published a new song", "involvedName": "I like HR"},
            {"date": "Fri Jul 12 2021 11:21:26", "action": "Joined band", "involvedName": "butterfly"}
          ]},

       {
        "username": "Candace",
        "bio": "I am a singer from China, Please enjoy my music!!",
        "avatar": "https://robohash.org/quodmodiet.png?size=50x50&set=set1",
        "category": ["Jazz","K-Pop", "old school" ],
        "following": ["Dua Lipa"],
        "followedby": ["Lawrence", "Kai"],
        "memberof": ["Butterflies"],
        "uploads": [
          {
            "musicName": "Dynamite",
            "version_history": [
              {
              "version_name": "official soundtrack",
                  "description": "the feeling, the mood, the dynamite!",
                "url": "http://aweaewawe/wasd.com/weaa22343",
                "likes": 100,
                "createdAt": "Fri Aug 10 2022 11:21:26"
              }]
          },
          {
            "musicName": "Life live living",
            "version_history": [
            { "version_name": "Soundtrack 0",
            "description": "I wrote this for the ET i met last week.",
            "url": "http://aweaewawe/wasd.com/weaa22344",
            "likes": 7,
            "createdAt": "Mon Jul 11 2022 11:21:26"
            }]
          }],
        "timeline": [
          {"date": "Fri Jul 12 2020 11:21:26", "action": "Joined in the community", "involvedName": null},
          {"date": "Fri Dec 12 2020 11:21:26", "action": "Published a new song", "involvedName": "dynamite"},
          {"date": "Fri Jul 12 2021 11:21:26", "action": "Published a new song", "involvedName": "Life live living"},
          {"date": "Fri Jul 12 2021 11:21:26", "action": "Joined band", "involvedName": "butterfly"}]

       },

       {
        "username": "Kai",
        "bio": "I don\’t care, I don\’t mind, I am myself!",
        "avatar": "https://robohash.org/numquamnihilet.png?size=50x50&set=set1",
        "category": ["old school", "pop music"],
        "following": ["Dua Lipa", "Lawrence", "Candace"],
        "followedby": ["Lawrence", "Kai"],
        "memberof": ["Ice ages"],
        "uploads": [{
          "musicName": "randomSong",
          "description": "whatever!",
          "url": "http://aweaewawe/wasd.com/weaa25343",
          "likes": 30,
          "createdAt": "Fri Aug 10 2022 10:21:26"}],
        "timeline": [
          {"date": "Fri Aug 10 2020 10:21:26", "action": "Joined in the community", "involvedName": null},
          {"date": "Fri Aug 10 2022 10:21:26", "action": "Published a new song", "involvedName": "randomSong"},
          {"date": "Fri Aug 05 2021 11:21:26", "action": "Joined band",  "involvedName": "Ice ages"}]

       }
       ],
    }
  }



  render() {
    const versionList = this.state.uploads.version_history.map((version) => (
      <HPMusicList version={version} />
    ));
    const usersList = this.state.users.map((user) => (
      <HPUsersList user={user} uploads={user.uploads}/>
    ));
    return (
      <>
        <div className='homepage-container'>
          <Navbar land={this.props.land} user={this.props.user} loginVal={this.props.loginVal} submit={this.props.submit} loginButton={this.props.loginButton} changeUser={this.props.changeUser} userErr={this.props.userErr} exit={this.props.exit} login={this.props.login}/>
          <div className='homepage-userinfo-container'>
            <img className='usersphoto' src='https://res.cloudinary.com/dktim9rur/image/upload/v1660423540/DJ_Background_uayfxx.webp' alt='profile' />
            <h4 className='username-h4'>Username</h4>
            <p className='userbio'>This is my bio. I'm really good at writing and I'm here to show it. </p>
          </div>
          <div className="versionList">{usersList}</div>
          <div className="versionList">{versionList}</div>
        </div>
        </>

        )
  }
}

        export default Homepage;