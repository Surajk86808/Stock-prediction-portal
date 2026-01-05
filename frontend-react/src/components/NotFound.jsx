import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../AuthProvider.jsx'

const NotFound = () => {
  const { isLoggedIn } = useContext(AuthContext)

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: '70vh' }}
    >
      <div className="text-center">

        <h1 className="display-1 text-danger fw-bold">404</h1>

        <h3 className="text-light mb-3">
          Oops! Page not found
        </h3>

        <p className="text-muted mb-4">
          The page you are looking for doesn’t exist or may have been moved.
        </p>

        {isLoggedIn ? (
          <Link to="/dashboard" className="btn btn-info px-4">
            Back to Dashboard
          </Link>
        ) : (
          <Link to="/login" className="btn btn-success px-4">
            Go to Login
          </Link>
        )}

      </div>
    </div>
  )
}

export default NotFound
