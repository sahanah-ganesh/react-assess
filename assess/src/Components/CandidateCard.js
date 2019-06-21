import React, { Component } from 'react';
import Hidden from './Hidden.js';

class CandidateCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: "",
      showHidden: false,
      symbol: "+",
      results: true,
      application: null,
      videos: null,
    }
    // this.handleChange = this.handleChange.bind(this);
    // this.handleKeyUp = this.handleKeyUp.bind(this);
    this.showHidden = this.showHidden.bind(this);
    // this.createTag = this.createTag.bind(this);
    // this.tagResults = this.tagResults.bind(this);
  }

  getApplicationByID(id) {
    for (let application of this.props.applications) {
      if (application.id === id) {
        return application;
      }
    }
    // getQuestionByID(application.video);
  }

  applicationSelected = id => {
    let application = this.getApplicationByID(id);
    this.setState({
      application: application,
      videos: application.videos
    })
    // console.log('application', application);
    console.log('videos', application.videos)
  }

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
    // const { tag, value } = this.state;
    const onExpand = (id) => (evt) => {
      this.applicationSelected(id);
      this.showHidden();
    }

    return (
    <div>
    { this.state.results &&
      <div className="candidate-card">
        <div className="image-card">
          <img className="candidate-image" src="https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/user.png" alt={ this.props.alt || 'Image' }/>
        </div>
        <div className="candidate-info">
          <h3 className="candidate-name">{ this.props.name }</h3>
          <p>ID: { this.props.id }</p>
          <p>Application ID: { this.props.appID }</p>
          { this.state.showHidden && this.state.videos.map((video) => {
              return <Hidden
                key={ video.questionId }
                id={ video.questionId }
                src={ video.src }
                applications={ this.state.application }
                questions={ this.props.questions }
                />
              })
            }
        </div>
        { this.props.appID?
          <div className="expand-button" onClick={ onExpand(this.props.appID) }>{ this.state.symbol }</div>
          : null
        }
      </div>
    }
    </div>
    )
  }
};

export default CandidateCard;