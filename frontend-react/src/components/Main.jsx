import React from 'react'
import Button from './Button.jsx'

const Main = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="p-5 text-center bg-light-dark rounded col-md-8">
        <h1 className="text-info">Stock Prediction Portal</h1>
        <p className="text-light lead">
          This stock prediction application utilizes machine learning techniques,
          specifically employing Keras and LSTM models within the Django framework.
          It forecasts future stock prices using 100-day and 200-day moving averages.
        </p>
        <Button text='Explore' class="btn-info" url='/dashboard' />
      </div>
    </div>
  )
}

export default Main
