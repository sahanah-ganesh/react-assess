import React, { Component } from "react";
import List from './Components/List.js';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Styles/App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      candidates: [],
      candidatesByID: {},
      applications: [],
      applicationsByID: {},
      questions: [],
      questionsByID: {},
    }
  }

  getCandidates() {
    fetch("http://localhost:3010/candidates")
    .then(response => response.json())
    .then(data => {
      const candidates = data;
      // console.log('candidates', candidates)
      this.setState({
        candidates: candidates,
        candidatesByID: candidates.reduce(
          (acc, item) => Object.assign(acc, {
            [item.applicationId]: item
            }), {})
      })
    })
    .catch(error => console.log('error', error))
  }

  getApplications() {
    fetch("http://localhost:3010/applications")
    .then(response => response.json())
    .then(data => {
      const applications = data;
      // console.log('applications', applications)
      this.setState({
        applications: applications,
        applicationsByID: applications.reduce(
          (acc, item) => Object.assign(acc, {
            [item.id]: item
            }), {})
      })
    })
    .catch(error => console.log('error', error))
  }

  getQuestions() {
    fetch("http://localhost:3010/questions")
    .then(response => response.json())
    .then(data => {
      const questions = data;
      // console.log('questions', questions)
      this.setState({
        questions: questions,
        questionsByID: questions.reduce(
          (acc, item) => Object.assign(acc, {
            [item.id]: item
            }), {})
      })
    })
    .catch(error => console.log('error', error))
  }

  componentDidMount() {
    this.getCandidates();
    this.getApplications();
    this.getQuestions();
  }

  render() {
    // console.log('appID', this.state.applicationsByID);
    // console.log('canID', this.state.candidatesByID);
    // console.log('qID', this.state.questionsByID);

    return (
      <div className="App">
        <List candidates={ this.state.candidates } applications={ this.state.applications } questions={ this.state.questionsByID }/>
      </div>
    );
  }
}

export default App;
