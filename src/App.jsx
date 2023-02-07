import React, { useState } from 'react'
import { plans } from './data'

const App = () => {
  const [option, setOption] = useState('monthly')

  const handleToggle = () => {
    if (option === 'monthly') {
      setOption('annually')
    } else {
      setOption('monthly')
    }
  }
  return (
    <div className="sec">
      <div className="container">
        <div className="row justify-content-center">
          <h1 className="sec-title text-center">Our Services</h1>
          <div className="d-flex align-items-center justify-content-center sec-header gap-2">
            <label htmlFor="#" className="sec-subtitle">
              Monthly
            </label>
            <label className="switch">
              <input type="checkbox" onClick={handleToggle} />
              <span className="slider round"></span>
            </label>
            <label htmlFor="" className="sec-subtitle">
              Anually
            </label>
          </div>
        </div>
        <div className="row justify-content-center align-items-center cards px-4 text-center">
          {plans.map((plan) => {
            const {
              planType,
              monthlyPrice,
              annualPrice,
              maxStorage,
              maxUsers,
              maxSend,
            } = plan
            return (
              <div className="col-12 col-md-4 card gap-3 p-5 " key={planType}>
                <h2 className="text-capitalize card-title">{planType}</h2>
                <h2 className="display-1 card-price">
                  <small className="display-5 align-middle">$</small>
                  {option === 'monthly' ? monthlyPrice : annualPrice}
                </h2>
                <ul className="list-unstyled card-list">
                  <li>{maxStorage} Storage</li>
                  <li>{maxUsers} Users Allowed</li>
                  <li>Send Up to{maxSend}</li>
                </ul>
                <a href="#" className="card-btn bg-secondary text-primary">
                  Learn More
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App
