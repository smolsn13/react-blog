import React, { Component } from 'react';
import Comment from './Comment';
import Author from './Author';
import './App.css';

class Post extends Component {
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
        {allAuthors}
        <h4>{body}</h4>
        <br/>
        <h3>Comments:</h3>
        {allComments}
      </div>
    );
  }
}

export default Post;
