import React, { Fragment } from "react"

import Beer from "../../img/beer.svg"

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-card">
        {/* <img src={Beer} alt="Tall beer glass, filled with beer"></img> */}
        <h4>4</h4>
        <p>
          <span>-</span>
          <span>+</span>
        </p>
      </div>
    </div>
  )
}

export default Dashboard
