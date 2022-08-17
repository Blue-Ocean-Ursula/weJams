import React from 'react';
//import CreateBandModal from "./UploadBandModal.jsx";

class BandModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {


    }
  }


  //this component shows the current project and a list of the edits(history)
  //it will also display the information attached to each project and edit


  //put req to db with new audio upload
  //function that will allow user to upload version
  handleCreateBand = () => {
    if (this.state.uploadModal === false) {
      this.setState({
        createModal: true
      })
    } else {
      this.setState({
        createModal: false
      })
    }
    //TODO:
    //axios post request to database with info for current edit

  }


  handleDownload = () => {
    //TODO:
    //hanlde down load for each individual edit
  }


  render() {


    return (
      <>
        <div className="vCModalBackground">
          <div className="vCModalContainer">
            <div className="modalTopRow">
              <div className="orangeText24">
                Band Information
              </div>
              <button className="modalCloseButton">
                X
              </button>
            </div>
            <div>
              <form>
                <input className="forms" onChange={(e) => { this.setState({ url: e.target.value }) }}></input>
              </form>
              <div className="orangeText10">
                band name
              </div>
            </div>
            <div>
              <form>
                <input className="forms" onChange={(e) => { this.setState({ url: e.target.value }) }}></input>
              </form>
              <div className="orangeText10">
                bio
              </div>
            </div>
            <div>
              <form>
                <input className="forms" onChange={(e) => { this.setState({ url: e.target.value }) }}></input>
              </form>
              <div className="orangeText10">
                genre
              </div>
            </div>
            <div>
              <button className="modalSubmitButton" onClick={this.handleCreateBand}>add new band</button>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default BandModal;



