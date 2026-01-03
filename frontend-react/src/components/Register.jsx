import React, { useState } from "react";
import axios from "axios";

const Register = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({})
    const [successMessage, setSuccessMessage] = useState(false);
    const [loading , setLoading] = useState(false);

    const handleRegistration = async (e) => { 
        e.preventDefault();
        setLoading(true);

        const userData = {
            username: username,
            email: email,
            password: password
        }
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/v1/register/', userData)
            console.log('response.data=>', response.data);
            console.log('User registered successfully');
            setErrors({});
            setSuccessMessage(true);
        }
        catch (error) {
            if (error.response) {
                setErrors(error.response.data);
                console.error('Registration error:', error.response.data);
            } else {
                setErrors({ general: 'Network error or server is down' });
                console.error('Registration error:', error.message);
            }
        }
        finally {
            setLoading(false);
        }
    }
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 bg-light-dark p-5 rounded mt-5">

          <h3 className="text-light text-center mb-4"> Create an Account </h3>

          <form onSubmit={handleRegistration}>
                      {errors.general && <div className="alert alert-danger text-center">{errors.general}</div>}
                      <div className="mb-3">
                          <input type="text" className="form-control mb-3" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                          <small>
                            {errors.username && <div className="text-danger">{errors.username}</div>}
                          </small>
                      </div>
                      <div className="mb-3">
                          <input type="email" className="form-control mb-3" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                      </div>
                      <div className="mb-3">
                          <input type="password" className="form-control mb-4" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                           <small>
                            {errors.password && <div className="text-danger">{errors.password}</div>}
                          </small>
                      </div>
                        {successMessage && <div className="text-success text-center mb-3">Registration successful! You can now log in.</div>}
                      {loading ? (
                          <button type="submit" className="btn btn-info d-block mx-auto w-25 mt-3 disabled">Please Wait .....</button>
                      ) : (
                          <button type="submit" className="btn btn-info d-block mx-auto w-25 mt-3">Register</button>
                      )}
          </form>

        </div>
      </div>
    </div>
  );
};

export default Register;
