import React, { Component } from "react";
import List from './Components/List.js';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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

  getCandidates() {
    fetch("http://localhost:3010/candidates")
    .then(response => response.json())
    .then(data => {
      const candidates = data;
      // console.log('candidates', candidates)
      this.setState({
        candidates: candidates
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

    return (
      <div className="App">
        <List
          candidates={ this.state.candidates }
          applications={ this.state.applications }
          questions={ this.state.questions }/>
      </div>
    );
  }
}

export default App;
