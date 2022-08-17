import React from 'react';
import axios from 'axios';

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
    //TODO:
    //axios post request to database with info for creating band

    axios({
      method: 'post',
      url: 'http://localhost:3005/band/',
      data :
      {
        bandname: "new band",
        bio:  "We are a new band",
        avatar: "https://robohash.org/minimaetvoluptatum.png?size=50x50&set=set1",
        genre: ["pop"],
        followers: ["follower1"],
        following: ["otherBand1", "otherBand2"],
        uploads: [
          {
            musicName: "new song1",
            version_history:
          {
            version_name: "Version1",
            description: "new description",
            url: "http://aweaewawe/wasd.com/weaa12353",
            likes: 0,
            createdAt: "Wed Aug 17 2021 11:21:26"
          }
       }
      ],
        timeline: {
          time: "Fri Aug 05 2021 11:21:26",
          action: "Started the new band",
          collaborator: "wE are a new band"
        },
        members: ["new member1", "new member2"]
      }
     })


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



