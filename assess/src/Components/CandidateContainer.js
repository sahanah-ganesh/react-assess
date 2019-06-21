import React, { Component } from 'react';
import CandidateCard from './CandidateCard.js';

class CandidateContainer extends Component {

  render() {
    return (
      <div>
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
