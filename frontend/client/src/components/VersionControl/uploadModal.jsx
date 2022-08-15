import React from 'react';

class UploadModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="uploadModalBackground">
        <div className="uploadModalContainer">
          <div className="modalTopRow">
            <div>
              Upload Modal
            </div>
            <button onClick={this.props.close}>
              x
            </button>
          </div>

          <div>
            version name
            <form>
              <input></input>
            </form>
          </div>
          <div>
            description
            <form>
              <input></input>
            </form>
          </div>
          <div>
            url
            <form>
              <input></input>
            </form>
          </div>

          <button>submit</button>
        </div>
      </div>
    )
  }
}

export default UploadModal;