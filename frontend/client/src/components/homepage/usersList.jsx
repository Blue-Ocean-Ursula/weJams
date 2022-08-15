import React from 'react';

class HPUsersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    const userUploads = this.props.uploads.map((uploaded, i) => (
      // console.log(uploaded.musicName)
      <p className="hompage-userprojects-div" key={i}>{uploaded.musicName}</p>
  ));
    return (
      <div className="homepage-userlist-div">
        <div className="username-photo">
          <img className='usersList-photo' src={this.props.user.avatar} alt='profile' />
          <div className="hompage-userprojects-div">{this.props.user.username}</div>
        </div>
        <div className='homepage-userprojects-div'>{userUploads}</div>

        <div className="hompage-userprojects-div">
          <button className="messageButton">Message</button>
          <button className="requestButton">Request Collaboration</button>
        </div>
      </div>

    )
  }
}

export default HPUsersList;