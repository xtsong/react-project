import React, { Component } from 'react';

class LikesButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0
    }
    // this.increaseLikes = this.increaseLikes.bind(this);
  }

  increaseLikes() {
    let num = this.state.likes;
    this.setState({
      likes: ++num
    });
  }

  render() {
    return (
      <div className="likes-button-component">
        <button
          className="btn btn-outline-primary btn-lg"
          type="button"
          onClick={() => { this.increaseLikes() }}
        >
          点赞：{this.state.likes}
        </button>
      </div>
    )
  }
}

export default LikesButton;