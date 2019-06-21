import React, { Component } from 'react';
import '.././Styles/List.css';

class Hidden extends Component {

  constructor(props) {
    super(props);
    this.state = {
      question: null,
      value: "",
      comments: [],
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.createComment = this.createComment.bind(this);
  }

  componentDidMount() {
    this.getQuestionByID(this.props.id);
  }

// Similar to getApplicationByID, matching questionIDs
  getQuestionByID(id) {
    for (let question of this.props.questions) {
      if (question.id === id) {
        this.setState({
          question: question
        })
      }
    }
  }

// Every keystroke in comment box changes state
  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }

// Once enter is hit in comment box, trigger function to create comment
  handleKeyUp(event) {
    const key = event.keyCode;

    if (key === 13) {
      this.createComment();
    }
  }

// Remove whitespace from beginning and end of string
// Set state with every new comment and put value back to empty string for next comment
  createComment() {
    const { comments, value } = this.state;
    let comment = value.trim();
    if (!comment) {
      return;
    }
    this.setState({
      comments: [...comments, comment],
      value: ""
    })
  }

  render() {

    const { comments, value } = this.state;
// Make comments show on page.
// With more time I would have the comments persist on the page by adding to API.JSON
    return (
      <div className="candidate-info">
        { this.state.question &&
        <div className="other-info">
            <h3 className="question">Question: { this.state.question.question }</h3>
            <video className="video" width="320" height="240" controls>
              <source src={ this.props.src } type="video/mp4"/>
            </video>
            <h3>Comments:</h3>
              { comments.map((comment, i) => (
                <p key={comment + i} className="comment">
                  {comment}
                </p>
              )) }
            <input
                type="text"
                placeholder="Comment & hit ENTER"
                value={ value }
                onChange={ this.handleChange }
                ref="comment"
                className="comment-input"
                onKeyUp={ this.handleKeyUp }
                />
          </div>
        }
      </div>
    );
  }
}

export default Hidden;