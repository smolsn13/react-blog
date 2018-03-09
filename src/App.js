import React, { Component } from 'react';
import Home from './Home';
import Blog from './Blog';
import FavoriteMovie from './FavoriteMovie';
import FavoriteFood from './FavoriteFood';
import About from './About';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './App.css';

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

class App extends Component {
  render() {
    return(
      <Router>
        <div>
          <nav>
            <Link to='/' className="link">Home</Link>{' '}
            <Link to='/blog' className="link">Blog</Link>{' '}
            <Link to='/favMovie' className="link">Favorite Movie</Link>{' '}
            <Link to='/favFood' className="link">Favorite Food</Link>{' '}
            <Link to='/about' className="link">About</Link>
          </nav>
          <Route exact path='/' component={Home} />
          <Route path='/blog' component={() => <Blog post={post} />} />
          <Route path='/favMovie' component={FavoriteMovie} />
          <Route path='/favFood' component={FavoriteFood} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    )
  }
}
export default App;
