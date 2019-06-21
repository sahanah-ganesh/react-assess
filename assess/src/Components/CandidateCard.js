import React, { Component } from 'react';
import Hidden from './Hidden.js';

class CandidateCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tags: [],
      value: "",
      showHidden: false,
      symbol: "+",
      results: true,
      chosen: null,
    }
    // this.handleChange = this.handleChange.bind(this);
    // this.handleKeyUp = this.handleKeyUp.bind(this);
    this.showHidden = this.showHidden.bind(this);
    // this.getCandidateByID = this.getCandidateByID(this);
    // this.candidateSelected = this.candidateSelected(this);
    // this.createTag = this.createTag.bind(this);
    // this.tagResults = this.tagResults.bind(this);
  }

  getApplicationByID(id) {
    console.log('id2', id);
    for (let application of this.props.applications) {
      if (application.id === id) {
        console.log('can', application);
        return application;
      }
    }
    return false;
  }

  candidateSelected = id => {
    console.log('id', id);
    let chosenOne = this.getApplicationByID(id);
    this.setState({
      chosen: chosenOne
    })
    console.log('chosen', chosenOne)
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
      this.candidateSelected(id);
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
          { this.state.showHidden &&
            <div>
              <Hidden applications={ this.props.applications } questions={ this.props.questions }/>
            </div>
          }
        </div>
        <div className="expand-button" onClick={ onExpand(this.props.appID) }>{ this.state.symbol }</div>
      </div>
    }
    </div>
    )
  }
};

export default CandidateCard;