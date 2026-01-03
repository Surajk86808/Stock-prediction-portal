import React from 'react'
import Button from './Button.jsx'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="navbar-container pt-4 py-3 pb-3 align-items-start">
      <div className="container d-flex align-items-center justify-content-between">
        
        <Link className="navbar-brand text-light fw-bold" to="/">
          Stock-Prediction-portal
        </Link>

        <div className="d-flex gap-3">
          <Button text='Login' class='btn-outline-info' url='/login' />
          &nbsp;
          <Button text='Register' class='btn-info' url='/register' />
        </div>

      </div>
    </nav>
  )
}

export default Header
