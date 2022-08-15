import React from 'react';
import Navbar from './navbar.jsx';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }



  render() {
    return (
      <>
        <div className='homepage-container'>
          <Navbar/>
          <div className='homepage-usersphoto'>
          <img src='https://res.cloudinary.com/dktim9rur/image/upload/v1660423540/DJ_Background_uayfxx.webp'/>
          </div>

          <span className='userBio'>
          <h4>Bio</h4>
          {/* <p>{this.props.userBio}</p> */}
          </span>
          <div className='homepage-usersList'></div>
        </div>
      </>

    )
  }
}

export default Homepage;