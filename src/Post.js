import React, { Component } from 'react';
import Comment from './Comment';
import Author from './Author';
import './App.css';

class Post extends Component {
  constructor(props) {
  super()
    this.state = {
      body: props.body,
      input: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  changeBody(e) {
    this.setState({
      body: this.state.body
    })
  }

  handleChange(e) {
    this.setState({
      body: e.target.value
    })
  }

  render() {

    const { title, authors, body, comments } = this.props

    {/*let allComments = [
      <Comment text={comments[0]}/>,
      <Comment text={comments[1]}/>,
      <Comment text={comments[2]}/>
    ] */}

    {/*map function returns a new array*/}

    let allComments = comments.map(function(comment, index) {
      return <Comment key={index} text={comment} id={index}/>
    })

    let allAuthors = authors.map(function(author, index) {
      return <Author key={index} text={author} id={index}/>
    })

    return (

        <div>
          <h1>{title}</h1>
          <p>Written by: </p>
            <p>{allAuthors}</p>
          <h2>{this.state.body}</h2>
          <br/>
          <input type="text" value={this.state.value} onChange={this.handleChange}/>
          <br/>
          <h3>Comments:</h3>
          {allComments}
        </div>
    );
  }
}

export default Post;
