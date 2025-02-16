// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    randomNumber: 0,
  }

  generateRandomNumber = () => {
    this.setState({randomNumber: Math.ceil(Math.random() * 100)})
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1>Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button type="button" onClick={this.generateRandomNumber}>
            Generate
          </button>
          <p>{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
