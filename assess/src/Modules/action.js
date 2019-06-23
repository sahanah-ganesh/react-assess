export function getCandidates() {
  return function(dispatch) {
    return fetch('http://localhost:3010/candidates')
      .then(response => response.json())
      .then(json => {
        dispatch({ type: 'CANDIDATES_LOADED', payload: json });
      });
  }
}

export function getApplications() {
  return function(dispatch) {
    return fetch('http://localhost:3010/applications')
      .then(response => response.json())
      .then(json => {
        dispatch({ type: 'APPLICATIONS_LOADED', payload: json });
      });
  }
}

export function getQuestions() {
  return function(dispatch) {
    return fetch('http://localhost:3010/questions')
      .then(response => response.json())
      .then(json => {
        dispatch({ type: 'QUESTIONS_LOADED', payload: json });
      });
  }
}