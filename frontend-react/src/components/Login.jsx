import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider.jsx";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const {setIsLoggedIn} = useContext(AuthContext);

  const handlelogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({}); // clear old errors

    const userData = {
      username,
      password,
    };

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/v1/token/",
        userData
      );

      localStorage.setItem("access_token", response.data.access);
      localStorage.setItem("refresh_token", response.data.refresh);
      setIsLoggedIn(true); 
      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);

      if (error.response) {
        if (error.response.status === 401) {
          setErrors({ general: "Invalid username or password" });
        } else if (error.response.data?.detail) {
          setErrors({ general: error.response.data.detail });
        } else {
          setErrors({ general: "Login failed. Try again." });
        }
      } else {
        setErrors({ general: "Server not responding. Try later." });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 bg-light-dark p-5 rounded mt-5">
          <h3 className="text-info text-center mb-4">
            Explore the World of Stocks with Your Portal
          </h3>

          <form onSubmit={handlelogin}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {errors.general && (
              <div className="alert alert-danger text-center">
                {errors.general}
              </div>
            )}

            <button
              className="btn btn-info d-block mx-auto w-25 mt-3"
              type="submit"
              disabled={loading}
            >
              {loading ? "Loading..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
