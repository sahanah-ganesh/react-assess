import React, { Component } from 'react';

class Hidden extends Component {

  constructor(props) {
    super(props);
    this.state = {
      question: null,
      questionID: null,
      value: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.getQuestionByID(this.props.id);
  }

// Similar to getApplicationByID, matching questionIDs
  getQuestionByID(id) {
    for (let question of this.props.questions) {
      if (question.id === id) {
        this.setState({
          question: question,
          questionID: id
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

// Remove whitespace from beginning and end of string and make comment
// Set value back to empty string for new event target value
// Find in video arr the obj where questionID matches current questionID
// Find all video objs in video arr
// Make new comment obj with comments added to existing comment arr
// PUT to update json api with new comment obj
  handleSubmit(event) {
    event.preventDefault();
    const { value } = this.state;
    let comment = value.trim();
    if (!comment) {
      return;
    }
    this.setState({
      value: ''
    })
    let app = this.props.app;
    let videoArr = this.props.videos.filter((video) => {
      return video.questionId === this.state.questionID
    })
    const allVideos = this.props.videos.filter((video) => {
      return video.questionId !== this.state.questionID
    })
    videoArr[0].comments.push(comment);
    allVideos.push(videoArr[0]);
    let newComment = {
      id: app,
      videos: allVideos
    }
    const postComments = (data) => {
      return fetch(`http://localhost:3010/applications/${data.id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
      })
    }
    postComments(newComment);
  }

  render() {
    const { value } = this.state;
// Make comments show on page.
    return (
      <div className='candidate-info'>
        { this.state.question &&
        <div className='other-info'>
            <span><h2 className='question'>Question: { this.state.question.question }</h2></span>
            <video className='video' width='320' height='240' controls>
              <source src={ this.props.src } type='video/mp4'/>
            </video>
            { this.props.comments ? this.props.comments.map((comment, i) => (
              <p className="comment" key={ comment + i }>
                <b>Anonymous</b>: { comment }
              </p>
              ))
              :
              null
            }
            <form onSubmit={ this.handleSubmit }>
              <div className='comment-box'>
                <input
                  type='text'
                  className='comment-input'
                  placeholder='Leave a comment'
                  value={ value }
                  onChange={ this.handleChange }
                />
              </div>
              <button id='save' type='submit' className='save-button'>SAVE</button>
              </form>
        </div>
        }
      </div>
    );
  }
}

export default Hidden;