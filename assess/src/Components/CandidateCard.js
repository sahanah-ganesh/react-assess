import React, { Component } from 'react';
import Hidden from './Hidden.js';

class CandidateCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: "",
      showHidden: false,
      symbol: "+",
      application: null,
      videos: null,
    }
    this.showHidden = this.showHidden.bind(this);
  }

// 3. Matching candidate appID with application id
  getApplicationByID(id) {
    for (let application of this.props.applications) {
      if (application.id === id) {
        return application;
      }
    }
  }

// 2. Sets state for selected candidate application and video information with results from 3
  applicationSelected = id => {
    let application = this.getApplicationByID(id);
    this.setState({
      application: application,
      videos: application.videos
    })
  }

// Also 2. Toggles expand button from + to - and also hidden information
  showHidden() {
    let newSymbol;
    if (this.state.symbol === "+") {
      newSymbol = "-";
    } else {
      newSymbol = "+";
    }

    this.setState({
      showHidden: !this.state.showHidden,
      symbol: newSymbol
    })
  }

  render() {

// 1. onClick triggers this function
    const onExpand = (id) => (evt) => {
      this.applicationSelected(id);
      this.showHidden();
    }

    return (
    <div>
      <div className="candidate-card">
        <div className="image-card">
          <img className="candidate-image" src="https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/user.png" alt={ this.props.alt || 'Image' }/>
        </div>
        <div className="candidate-info">
          <h3 className="candidate-name">{ this.props.name }</h3>
          <p>ID: { this.props.id }</p>
          <p>Application ID: { this.props.appID }</p>
{/* When expand button clicked and above functions run, maps through videos to pass along to Hidden Component */}
          { this.state.showHidden && this.state.videos.map((video) => {
              return <Hidden
                key={ video.questionId }
                id={ video.questionId }
                src={ video.src }
                questions={ this.props.questions }
                />
              })
            }
        </div>
{/* Currently not addressing candidates without applications. Just not showing an expand button */}
        { this.props.appID?
          <div className="expand-button" onClick={ onExpand(this.props.appID) }>{ this.state.symbol }</div>
          : null
        }
      </div>
    </div>
    )
  }
};

export default CandidateCard;