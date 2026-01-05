import { useEffect, useState } from 'react'
import axiosInstance from '../../axiosinstance'

const Dashboard = () => {
  const [ticker, setTicker] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const [plot, setPlot] = useState(null)
  const [ma100, setMA100] = useState(null)
  const [ma200, setMA200] = useState(null)
  const [prediction, setPrediction] = useState(null)

  const [mse, setMSE] = useState(null)
  const [rmse, setRMSE] = useState(null)
  const [r2, setR2] = useState(null)

  /* ---------------- Protected Test Call ---------------- */
  useEffect(() => {
    const fetchProtectedData = async () => {
      try {
        const response = await axiosInstance.get('/protected-view/')
        console.log(response.data)
      } catch (err) {
        console.error('Error fetching protected data:', err)
      }
    }
    fetchProtectedData()
  }, [])

  /* ---------------- Submit Handler ---------------- */
  const handleSubmit = async (e) => {
    e.preventDefault()

    // Clear old data BEFORE request
    setError(null)
    setPlot(null)
    setMA100(null)
    setMA200(null)
    setPrediction(null)
    setMSE(null)
    setRMSE(null)
    setR2(null)

    setLoading(true)

    try {
      const response = await axiosInstance.post('/predict/', {
        ticker: ticker.trim(),
      })

      // If backend sends error → STOP
      if (response.data.error) {
        setError(response.data.error)
        return
      }

      const backendRoot = import.meta.env.VITE_BACKEND_ROOT

      setPlot(`${backendRoot}${response.data.plot_img}`)
      setMA100(`${backendRoot}${response.data.plot_100_dma}`)
      setMA200(`${backendRoot}${response.data.plot_200_dma}`)
      setPrediction(`${backendRoot}${response.data.plot_prediction}`)

      setMSE(response.data.mse)
      setRMSE(response.data.rmse)
      setR2(response.data.r2)
    } catch (err) {
      console.error('API error:', err)
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 mx-auto">

          {/* -------- Input Form -------- */}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Stock Ticker (e.g. AAPL)"
              value={ticker}
              onChange={(e) => {
                setTicker(e.target.value)
                setError(null)
              }}
              required
            />

            {error && (
              <div className="alert alert-danger mt-3 text-center">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="btn btn-info mt-3 w-100"
              disabled={loading}
            >
              {loading ? 'Please wait...' : 'Predict'}
            </button>
          </form>
        </div>

        {/* -------- Prediction Output -------- */}
        {!error && prediction && (
          <div className="prediction mt-5">

            {[plot, ma100, ma200, prediction].map(
              (img, idx) =>
                img && (
                  <div className="p-3 text-center" key={idx}>
                    <img
                      src={img}
                      alt="stock-plot"
                      style={{ maxWidth: '100%' }}
                    />
                  </div>
                )
            )}

            <div className="text-light p-3 text-center">
              <h4>Model Evaluation</h4>
              <p>MSE: {mse}</p>
              <p>RMSE: {rmse}</p>
              <p>R²: {r2}</p>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default Dashboard
