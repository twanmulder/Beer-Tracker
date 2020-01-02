import React from "react"

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  decrementCounter = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 })
    }
  }

  incrementCounter = () => {
    this.setState({ count: this.state.count + 1 })
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
            You've saved €<span>{(COUNT * 0.9583).toFixed(2)}</span> so far
          </p>
        </div>
      </div>
    )
  }
}

export default Dashboard
