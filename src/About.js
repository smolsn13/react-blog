import React, { Component } from 'react';
const axios = require('axios');

class About extends Component {

  constructor(props) {
    super(props)
    this.state = {
      zipcode: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState( {zipcode: event.target.value} )
    console.log('Your zip code is' + this.state.zipcode)
  }

  handleClick(event) {
    let zipcode = this.state.zipcode
    let weatherApi = 'http://api.openweathermap.org/data/2.5/weather?zip=' + zipcode + ',us&appid=052f26926ae9784c2d677ca7bc5dec98'

    axios.get(weatherApi)
    .then((response) => {
      console.log(response)
      this.setState({ weather: this.state.weather })
    })
    .catch((error) => {
      console.log('An error occurred while parsing', error)
    })
  }

  render() {

    if (this.state.zipcode) {
      var currentWeather = this.state.zipcode
    } else {
      var currentWeather = 'Loading...'
    }

    return(
    <div>
      <p>Look up the current weather in your area!</p>
      <label>Enter your zip code:
      <input type="text" onChange={this.handleChange} />
      </label>
      <input type="submit" value="See my forecast" onClick={this.handleClick} />
      <p>{currentWeather}</p>
    </div>
    )
  }
}
export default About;
