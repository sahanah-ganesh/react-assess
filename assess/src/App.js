import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCandidates } from './Modules/action.js';
import { getApplications } from './Modules/action.js';
import { getQuestions } from './Modules/action.js';
import CandidateCard from './Components/CandidateCard.js';
import './Styles/App.css';

export class App extends Component {
  componentDidMount() {
    this.props.getCandidates();
    this.props.getApplications();
    this.props.getQuestions();
  }

  render() {
    return (
      <div className='App'>
        <div className='list-page'>
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
      </div>
    )
  }
};

function mapStateToProps(state) {
  return {
    candidates: state.candidates,
    applications: state.applications,
    questions: state.questions
  };
}

export default connect(
  mapStateToProps,
  { getCandidates, getApplications, getQuestions },
)(App);

