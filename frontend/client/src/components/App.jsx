import React from 'react';
import Homepage from './homepage/homepage.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }



  render() {
    return (
      <>
        <h1>Land Page</h1>
        <Homepage/>

      </>

    )
  }
}

export default App;