import React, { Component } from 'react';

class NameCard extends Component {
  render() {
    const { name, number, isMan, tags } = this.props;
    return (
      <div className="alert alert-success">
        <h4 className="alert-heading">{name}</h4>
        <ul>
          <li>电话：{number}</li>
          <li>性别：{ isMan ? '男' : '女' }</li>
          <hr/>
          <p>
            {
              tags.map((tag, index) => (
                <span className="badge badge-pill badge-primary" key={index}>{tag}</span>
              ))
            }
          </p>
        </ul>
      </div>
    )
  }
}

export default NameCard;
