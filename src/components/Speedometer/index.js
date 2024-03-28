// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  accelerate = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    } else {
      this.setState(() => ({count: 200}))
    }
  }

  applyBreak = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    } else {
      this.setState(() => ({count: 0}))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="bg-content">
          <h1 className="heading">SPEEDOMETER</h1>
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
          />
          <h1 className="paragraph">Speed is {count}mph</h1>
          <p className="des"> Min Limit is 0mph, Max Limit is 200mph</p>
          <div>
            <button
              type="button"
              className="accelerate-button"
              onClick={this.accelerate}
            >
              Accelerate
            </button>
            <button
              type="button"
              className="break-button"
              onClick={this.applyBreak}
            >
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
