import React, { Component } from 'react';
import '.././Styles/List.css';

class Hidden extends Component {



  render() {
    return (
      <div className="candidate-info">
        <div className="other-info">
          <video width="320" height="240" controls>
            <source src={ this.props.src } type="video/mp4"/>
          </video>
        </div>
      </div>
    );
  }
}

export default Hidden;