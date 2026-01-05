import {useContext} from 'react'
import Button from './Button.jsx'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthProvider.jsx';

const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const handleLogOut = () => {
     localStorage.removeItem("access_token");
     localStorage.removeItem("refresh_token");
     setIsLoggedIn(false);
     navigate("/login");
  }
  return (
    <nav className="navbar-container pt-4 py-3 pb-3 align-items-start">
      <div className="container d-flex align-items-center justify-content-between">
        
        <Link className="navbar-brand text-light fw-bold" to="/">
          <h2 className='text-info'>
            SPP..<span className="fs-6">STOCK PREDICTION PORTAL</span>
          </h2>

        </Link>

        <div className="d-flex gap-3">
          {/* { condition ? true : false} */}
          {isLoggedIn ? (
            <>
              <Button text='Dashboard' class='btn-outline-info' url='/dashboard' />
              <Button text='Logout' class='btn-outline-danger'  onClick={handleLogOut} />
            </> 
          ) : (
              <>
                <Button text='Login' class='btn-outline-info' url='/login' />
                <Button text='Register' class='btn-info' url='/register' />
              </>
          )}
          
        </div>

      </div>
    </nav>
  )
}

export default Header;
