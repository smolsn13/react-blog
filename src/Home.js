import React, { Component } from 'react';
const axios = require('axios');

class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      shakespeare: ''
    }
  }

  componentDidMount() {

    // the url for our API
    let poemApi = 'http://ShakeItSpeare.com/api/poem'

    // using fetch to get api data ---------------------------
    // our fetch of that poem API
    // fetch(poemApi)
    //   .then((response) => {
    //     return response.json()
    //   })
    //   .then((json) => {
    //     this.setState({shakespeare: json.poem})
    //     })
    //     .catch((error) => {
    //       console.log('An error occurred while parsing', error)
    //   })

    //  One way to use axios --------------------------------

    axios.get(poemApi)
      .then((response) => {
        this.setState({ shakespeare: response.data.poem })
      })
      .catch((error) => {
        console.log('An error occurred while parsing', error)
      })

    // Another way to use axios -----------------------------
      // axios({
      //   method: 'GET',
      //   url: poemApi
      // })
      // .then((response) => {
      //   this.setState({ shakespeare: response.data.poem })
      // })
  }



  render() {

    if (this.state.shakespeare) {
      var poetry = this.state.shakespeare
    } else {
      var poetry = 'Loading...'
    }
      return (
        <div className='App'>
          <h1>Home</h1>
          <h3>Welcome to my website!</h3>
          <p>You have great taste. Come back often to see our recent posts.</p>
          <h3>This is my favorite Shakespeare poem:</h3>
          <p>{poetry}</p>
        </div>
      )
    }
  }




export default Home;
