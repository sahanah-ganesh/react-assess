import React, { Component } from 'react';
import '.././Styles/List.css';

class Hidden extends Component {

  constructor(props) {
    super(props);
    this.state = {
      question: null
    }
  }

  componentDidMount() {
    this.getQuestionByID(this.props.id);
  }

  getQuestionByID(id) {
    for (let question of this.props.questions) {
      if (question.id === id) {
        console.log('q', question);
        this.setState({
          question: question
        })
      }
    }
  }


  render() {

    return (
      <div className="candidate-info">
        { this.state.question &&
        <div className="other-info">
            <h2>Question: { this.state.question.question }</h2>
            <video width="320" height="240" controls>
              <source src={ this.props.src } type="video/mp4"/>
            </video>
            <h4>Comments:</h4>
            <input
                type="text"
                placeholder="Comment & hit ENTER"
                // value={ value }
                // onChange={ this.handleChange }
                // ref="tag"
                className="comment-input"
                // onKeyUp={ this.handleKeyUp }
                />
          </div>
        }
      </div>
    );
  }
}

export default Hidden;