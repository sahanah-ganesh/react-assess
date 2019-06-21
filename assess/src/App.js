import React, { Component } from "react";
import CandidateContainer from "./Components/CandidateContainer.js";
import './Styles/App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      candidates: [],
      applications: [],
      questions: [],
    }
  }

// Get the candidate array of objects from API and set state
  getCandidates() {
    fetch("http://localhost:3010/candidates")
    .then(response => response.json())
    .then(data => {
      const candidates = data;
      this.setState({
        candidates: candidates
      })
    })
    .catch(error => console.log('error', error))
  }

// Get the applications array of objects from API and set state
  getApplications() {
    fetch("http://localhost:3010/applications")
    .then(response => response.json())
    .then(data => {
      const applications = data;
      this.setState({
        applications: applications,
      })
    })
    .catch(error => console.log('error', error))
  }

// Get the question array of objects from API and set state
  getQuestions() {
    fetch("http://localhost:3010/questions")
    .then(response => response.json())
    .then(data => {
      const questions = data;
      this.setState({
        questions: questions,
      })
    })
    .catch(error => console.log('error', error))
  }

// Make fetches happen early in component life cycle
  componentDidMount() {
    this.getCandidates();
    this.getApplications();
    this.getQuestions();
  }

// Pass along state as props to Candidate Container component
  render() {

    return (
      <div className="App">
        <CandidateContainer
          candidates={ this.state.candidates }
          applications={ this.state.applications }
          questions={ this.state.questions }/>
      </div>
    );
  }
}

export default App;
