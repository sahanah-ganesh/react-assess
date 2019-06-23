const initialState = {
  candidates: [],
  applications: [],
  questions: []
};

function rootReducer(state = initialState, action) {

  if (action.type === 'CANDIDATES_LOADED') {
    return Object.assign({}, state, {
      candidates: state.candidates.concat(action.payload)
    });
  }

  if (action.type === 'APPLICATIONS_LOADED') {
    return Object.assign({}, state, {
      applications: state.applications.concat(action.payload)
    });
  }

  if (action.type === 'QUESTIONS_LOADED') {
    return Object.assign({}, state, {
      questions: state.questions.concat(action.payload)
    });
  }

  return state;
};

export default rootReducer;