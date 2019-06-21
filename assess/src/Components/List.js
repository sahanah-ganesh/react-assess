import React, { Component } from 'react';
import CandidateContainer from './CandidateContainer.js';
import '.././Styles/List.css';

class List extends Component {

  render() {

    return (
      <div className="list-page">
        <CandidateContainer candidates={ this.props.candidates } applications={ this.props.applications }/>
      </div>
    );
  }
}

export default List;