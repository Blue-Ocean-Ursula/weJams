import React from 'react';

class HPUsersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    const userUploads = this.props.uploads.map((uploaded, i) => (
      // console.log(uploaded.version_history);
      uploaded.version_history.map((song) => (
        <div style={{padding: 2, fontSize: 15}}>{song.version_name}</div>
      ))
    ));
    return (
      <div className="homepage-userlist-div">
        <div className="username-photo">
          <img className='usersList-photo' src={this.props.user.avatar} alt='profile' />
          <div className="homepage-userprojects-div">{this.props.user.username}</div>
        </div>
        <div className="homepage-userprojects-div">{userUploads}</div>

        <div className="homepage-userprojects-buttons">
          <button className="messageButton">Message</button>
          <button className="requestButton">Request Collaboration</button>
        </div>
      </div>

    )
  }
}

export default HPUsersList;