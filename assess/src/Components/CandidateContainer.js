import React, { Component } from 'react';
import CandidateCard from './CandidateCard.js';

class CandidateContainer extends Component {

// Maps candidate array of objects props from App for Candidate Card Component
// Passing App state to Candidate Card Component
// With more time I would refactor this into a functional component as it only renders

  render() {
    return (
      <div className="list-page">
        {
          this.props.candidates.map((candidate) => {
            return <CandidateCard
              key={ candidate.id }
              id={ candidate.id }
              name={ candidate.name }
              appID={ candidate.applicationId }
              candidates={ this.props.candidates }
              applications={ this.props.applications }
              questions={ this.props.questions }
            />
          })
        }
      </div>
    )
  }
};

export default CandidateContainer;
