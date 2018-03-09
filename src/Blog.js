import React from 'react';
import Post from './Post';

const Blog = (props) => {
  const post = props.post;

  return (
    <div>
      <Post
        title={ post.title }
        authors={ post.authors }
        body={ post.body }
        comments={ post.comments }
        />
    </div>
  )
}

export default Blog;
