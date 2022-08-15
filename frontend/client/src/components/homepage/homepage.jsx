import React from 'react';
import VersionControl from '../VersionControl/VersionControl.jsx';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }



  render() {
    return (
      <>
        {/* <h1>Home Page</h1> */}
        <VersionControl />
      </>

    )
  }
}

export default Homepage;