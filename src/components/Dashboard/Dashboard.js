import React from "react"
import { beerCountRef } from "../../firebase/references"

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = { count: 0, countIsVisible: false }
  }

  componentDidMount() {
    beerCountRef.on("value", snapshot => {
      this.setState({ count: snapshot.val() || 0 })
    })
  }

  componentDidUpdate() {
    if (!this.state.countIsVisible) {
      this.setState({ countIsVisible: true })
    }
  }

  decrementCounter = () => {
    if (this.state.count > 0) {
      const count = this.state.count - 1
      this.updateFirebase(count)
    }
  }

  incrementCounter = () => {
    const count = this.state.count + 1
    this.updateFirebase(count)
  }

  updateFirebase(value) {
    beerCountRef.set(value)
  }

  render() {
    const COUNT = this.state.count
    const COUNTISVISIBLE = this.state.countIsVisible

    return (
      <div className="dashboard">
        <div className="dashboard-card">
          <h2
            className={
              COUNTISVISIBLE
                ? "card-amount card-amount--visible"
                : "card-amount card-amount--hidden"
            }
          >
            <span>{COUNT}</span>
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
          <p
            className="card-saved"
            className={
              COUNTISVISIBLE
                ? "card-saved card-saved--visible"
                : "card-saved card-saved--hidden"
            }
          >
            You've saved <span>€{(COUNT * 0.9583).toFixed(2)}</span> so far
          </p>
        </div>
      </div>
    )
  }
}

export default Dashboard
