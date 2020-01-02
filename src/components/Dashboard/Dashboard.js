import React from "react"
import { beerCountRef } from "../../firebase/references"

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = { count: null }
  }

  componentWillMount() {
    beerCountRef.on("value", snapshot => {
      this.setState({ count: snapshot.val() || 0 })
    })
  }

  decrementCounter = () => {
    if (this.state.count > 0) {
      const count = this.state.count - 1
      this.setState({ count })
      this.updateFirebase(count)
    }
  }

  incrementCounter = () => {
    const count = this.state.count + 1
    this.setState({ count })
    this.updateFirebase(count)
  }

  updateFirebase(value) {
    beerCountRef.set(value)
  }

  render() {
    const COUNT = this.state.count
    return (
      <div className="dashboard">
        <div className="dashboard-card">
          <h2 className="card-amount">
            {COUNT}
            <sup>BEERS SAVED</sup>
          </h2>
          <div className="card-controls">
            <div className="card-controlMinus" onClick={this.decrementCounter}>
              -
            </div>
            <div className="card-controlPlus" onClick={this.incrementCounter}>
              +
            </div>
          </div>
          <p className="card-saved">
            You've saved <span>€{(COUNT * 0.9583).toFixed(2)}</span> so far
          </p>
        </div>
      </div>
    )
  }
}

export default Dashboard
