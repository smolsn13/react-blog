import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Post from './App';
import registerServiceWorker from './registerServiceWorker';

var post = {
  title: "Dinosaurs are awesome",
  authors: [
    "Stealthy Stegosaurus",
    "Tiny T-Rex",
    "Ivory Iguanodon"
  ],
  body: "Watch out for Stealthy Stegosaurus's spikes!",
  comments: [
    "First!",
    "Great post!",
    "Hire this author now!"
  ]
}

ReactDOM.render(
  <Post
  title={post.title}
  body={post.body}
  comments={post.comments}
  authors={post.authors}
  />, document.getElementById('root'));
registerServiceWorker();
