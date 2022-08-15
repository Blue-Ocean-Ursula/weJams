import React from 'react';

class UploadModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      url: ''
    }
  }

  //for submission will send post request to the users versions
  //function send post req and closes modal window
  handleSubmit = () => {
    //post req to server:

    this.props.close();
  }

  render() {
    return (
      <div className="uploadModalBackground">
        <div className="uploadModalContainer">
          <div className="modalTopRow">
            <div className="orangeText20">
              upload new version
            </div>
            <button className="modalCloseButton" onClick={this.props.close}>
              x
            </button>
          </div>
          <div className="orangeText10">
            <form>
              <input className="forms" onChange={(e)=>{this.setState({name: e.target.value})}}></input>
            </form>
              version name
          </div>
          <div className="orangeText10">
            <form>
              <input className="forms" onChange={(e)=>{this.setState({description: e.target.value})}}></input>
            </form>
            description
          </div>
          <div className="orangeText10">
            <form>
              <input className="forms" onChange={(e)=>{this.setState({url: e.target.value})}}></input>
            </form>
            url
          </div>
          <button className="modalSubmitButton" onClick={this.handleSubmit}>submit version</button>
        </div>
      </div>
    )
  }
}

export default UploadModal;