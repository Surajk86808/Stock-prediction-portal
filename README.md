# 📈 Stock Prediction Portal (SPP)

> A production-ready, full-stack machine learning application that leverages LSTM neural networks to predict stock prices with interactive visualizations and comprehensive model evaluation metrics.

[![Python](https://img.shields.io/badge/Python-3.8+-blue.svg)](https://www.python.org/)
[![Django](https://img.shields.io/badge/Django-6.0-green.svg)](https://www.djangoproject.com/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB.svg)](https://reactjs.org/)
[![TensorFlow](https://img.shields.io/badge/TensorFlow-Keras-orange.svg)](https://www.tensorflow.org/)

---

## 🌟 Project Overview

The **Stock Prediction Portal** is an enterprise-grade web application that combines cutting-edge deep learning algorithms with modern web technologies to deliver accurate stock price predictions. Built with a Django REST Framework backend and a responsive React frontend, this application demonstrates proficiency in full-stack development, machine learning integration, and secure authentication practices.

### 🎯 Key Highlights

- **LSTM Neural Networks** for time-series forecasting with proven accuracy
- **JWT Authentication** ensuring secure, stateless user sessions
- **Real-time Data Fetching** from Yahoo Finance API via yfinance
- **Interactive Visualizations** showcasing price trends, moving averages, and predictions
- **Model Performance Metrics** including MSE, RMSE, and R² scores
- **Responsive UI** with Bootstrap 5 and custom dark-themed design
- **Token Refresh Mechanism** for seamless user experience

---

## 🏗️ Architecture & Tech Stack

### Backend Architecture

```
Django REST Framework (DRF)
├── Authentication: JWT (SimpleJWT)
├── API Design: RESTful endpoints
├── ML Framework: TensorFlow/Keras
├── Data Processing: pandas, numpy, scikit-learn
├── Visualization: matplotlib
└── Data Source: yfinance API
```

### Frontend Architecture

```
React 19.2 + Vite
├── Routing: React Router v7
├── State Management: Context API
├── HTTP Client: Axios with interceptors
├── Styling: Bootstrap 5 + Custom CSS
└── Build Tool: Vite (ultra-fast HMR)
```

### Machine Learning Pipeline

```
Data Collection → Preprocessing → Feature Engineering → 
LSTM Model → Prediction → Inverse Scaling → Visualization
```

---

## 🚀 Features Deep Dive

### 1. **Advanced ML Predictions**
- **100-Day & 200-Day Moving Averages**: Technical indicators for trend analysis
- **LSTM Architecture**: Captures long-term dependencies in sequential stock data
- **MinMax Scaling**: Normalizes data for optimal neural network performance
- **Trained on 10 Years of Historical Data**: Ensures robust pattern recognition

### 2. **Comprehensive Visualizations**
Four distinct charts generated per prediction:
- 📊 **Closing Price History**: Full historical view of the stock
- 📈 **100-Day Moving Average**: Short-term trend overlay
- 📉 **200-Day Moving Average**: Long-term trend comparison
- 🎯 **Actual vs Predicted Prices**: Side-by-side validation of model accuracy

### 3. **Secure Authentication System**
- **JWT Access Tokens** (30-second expiry for demo; configurable for production)
- **Refresh Tokens** (1-day validity)
- **Automatic Token Refresh**: Axios interceptors handle token renewal transparently
- **Protected Routes**: React Context API guards dashboard access
- **Password Hashing**: Django's built-in secure password management

### 4. **Intelligent Error Handling**
- **Backend Validation**: Ticker existence checks, empty data handling
- **Frontend UX**: User-friendly error messages and loading states
- **Network Resilience**: Graceful degradation on API failures
- **401 Handling**: Automatic logout on authentication failures

---

## 📂 Project Structure

```
stock-prediction-portal/
│
├── backend-drf/                    # Django Backend
│   ├── accounts/                   # User authentication app
│   │   ├── serializers.py          # User serialization
│   │   └── views.py                # Registration & protected views
│   ├── api/                        # Core API app
│   │   ├── serializers.py          # Stock prediction serializer
│   │   ├── views.py                # StockPredictionAPIView
│   │   ├── urls.py                 # API routing
│   │   └── utils.py                # Plot saving utilities
│   ├── stock_prediction_main/      # Project settings
│   │   ├── settings.py             # Django configuration
│   │   └── urls.py                 # Root URL config
│   ├── media/                      # Generated prediction plots
│   ├── stock_prediction_model.keras # Pre-trained LSTM model
│   └── manage.py                   # Django management script
│
└── frontend-react/                 # React Frontend
    ├── src/
    │   ├── components/             # Reusable UI components
    │   │   ├── Header.jsx          # Navigation bar
    │   │   ├── Footer.jsx          # Footer section
    │   │   ├── Main.jsx            # Landing page
    │   │   ├── Login.jsx           # Login form
    │   │   ├── Register.jsx        # Registration form
    │   │   ├── NotFound.jsx        # 404 page
    │   │   ├── Button.jsx          # Reusable button component
    │   │   └── dashboard/
    │   │       └── Dashboard.jsx   # Prediction interface
    │   ├── AuthProvider.jsx        # Authentication context
    │   ├── PrivateRoute.jsx        # Protected route wrapper
    │   ├── PublicRoute.jsx         # Guest-only route wrapper
    │   ├── axiosinstance.js        # Configured Axios client
    │   ├── App.jsx                 # Root component
    │   └── main.jsx                # React entry point
    ├── public/                     # Static assets
    ├── package.json                # NPM dependencies
    └── vite.config.js              # Vite configuration
```

---

## 🛠️ Installation & Setup

### Prerequisites

Ensure you have the following installed:
- **Python 3.8+** (with pip)
- **Node.js 18+** (with npm)
- **Git**
- **Virtual environment tool** (optional but recommended)

### Backend Setup (Django)

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/stock-prediction-portal.git
   cd stock-prediction-portal/backend-drf
   ```

2. **Create and activate virtual environment**
   ```bash
   python -m venv venv
   
   # On Windows
   venv\Scripts\activate
   
   # On macOS/Linux
   source venv/bin/activate
   ```

3. **Install dependencies**
   ```bash
   pip install django djangorestframework djangorestframework-simplejwt
   pip install django-cors-headers python-decouple
   pip install yfinance pandas numpy matplotlib scikit-learn
   pip install tensorflow keras
   ```

4. **Configure environment variables**
   
   Create a `.env` file in `backend-drf/`:
   ```env
   SECRET_KEY=your-secret-key-here
   DEBUG=True
   ```

5. **Apply migrations**
   ```bash
   python manage.py migrate
   ```

6. **Create superuser (optional)**
   ```bash
   python manage.py createsuperuser
   ```

7. **Run the development server**
   ```bash
   python manage.py runserver
   ```
   
   Backend will be available at `http://127.0.0.1:8000/`

### Frontend Setup (React)

1. **Navigate to frontend directory**
   ```bash
   cd ../frontend-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   Create a `.env` file in `frontend-react/`:
   ```env
   VITE_BACKEND_BASE_API=http://127.0.0.1:8000/api/v1
   VITE_BACKEND_ROOT=http://127.0.0.1:8000
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```
   
   Frontend will be available at `http://localhost:5173/`

---

## 🎮 Usage Guide

### Step 1: Register an Account
1. Navigate to `http://localhost:5173/register`
2. Fill in username, email, and password
3. Click "Register"
4. Success message confirms account creation

### Step 2: Login
1. Go to `http://localhost:5173/login`
2. Enter your credentials
3. Upon successful login, you'll be redirected to the dashboard

### Step 3: Make a Prediction
1. On the dashboard, enter a valid stock ticker (e.g., `AAPL`, `GOOGL`, `TSLA`)
2. Click "Predict"
3. Wait for the model to process (typically 10-30 seconds depending on data size)
4. View the four generated charts and model evaluation metrics

### Step 4: Explore & Logout
- Click "Dashboard" to return to the prediction interface
- Click "Logout" to end your session securely

---

## 🔒 Security Features

### JWT Token Management
```javascript
// Axios interceptor automatically adds token to requests
config.headers['Authorization'] = `Bearer ${accessToken}`;

// Token refresh on 401 errors
if (error.response.status === 401 && !originalRequest.retry) {
    const response = await axiosInstance.post('/token/refresh/', 
        { refresh: refreshToken }
    );
    localStorage.setItem('access_token', response.data.access);
}
```

### Backend Security Measures
- **CORS Configuration**: Restricts cross-origin requests to `localhost:5173`
- **Password Hashing**: Uses Django's PBKDF2 algorithm
- **Permission Classes**: `IsAuthenticated` for protected endpoints
- **Token Expiry**: Short-lived access tokens minimize attack surface

---

## 📊 Model Performance

The pre-trained LSTM model demonstrates strong predictive capabilities:

| Metric | Description | Typical Range |
|--------|-------------|---------------|
| **MSE** | Mean Squared Error | Lower is better |
| **RMSE** | Root Mean Squared Error | Closer to 0 = higher accuracy |
| **R²** | Coefficient of Determination | 0.8-0.95 indicates excellent fit |

*Note: Actual values vary based on stock volatility and historical patterns.*

---

## 🔬 Technical Implementation Details

### 1. LSTM Model Architecture
```python
model = Sequential([
    LSTM(units=50, return_sequences=True, input_shape=(100, 1)),
    Dropout(0.2),
    LSTM(units=50, return_sequences=True),
    Dropout(0.2),
    LSTM(units=50),
    Dropout(0.2),
    Dense(units=1)
])
```

### 2. Data Preprocessing Pipeline
```python
# Fetch 10 years of data
df = yf.download(ticker, start=datetime(now.year-10, now.month, now.day), end=now)

# Calculate moving averages
ma100 = df.Close.rolling(100).mean()
ma200 = df.Close.rolling(200).mean()

# Split data (70% train, 30% test)
data_training = df.Close[0:int(len(df)*0.7)]
data_testing = df.Close[int(len(df)*0.7):]

# MinMax scaling
scaler = MinMaxScaler(feature_range=(0,1))
scaled_data = scaler.fit_transform(data)
```

### 3. Prediction Logic
```python
# Prepare test sequences (100-day windows)
for i in range(100, input_data.shape[0]):
    x_test.append(input_data[i-100:i])
    y_test.append(input_data[i, 0])

# Make predictions
y_predicted = model.predict(x_test)

# Inverse transform to original scale
y_predicted = scaler.inverse_transform(y_predicted)
```

---

## 🐛 Troubleshooting

### Common Issues & Solutions

**Issue**: `ModuleNotFoundError: No module named 'tensorflow'`
- **Solution**: Ensure TensorFlow is installed: `pip install tensorflow`

**Issue**: Frontend shows "Network error or server is down"
- **Solution**: Verify Django server is running on port 8000
- Check CORS settings in `backend-drf/stock_prediction_main/settings.py`

**Issue**: Token refresh fails with 401 error
- **Solution**: Clear localStorage and log in again
- Check refresh token hasn't expired (1-day validity)

**Issue**: "No data found for the given ticker"
- **Solution**: Verify ticker symbol is correct (use Yahoo Finance symbols)
- Some international stocks may not be available

**Issue**: Plots not displaying
- **Solution**: Check `MEDIA_ROOT` and `MEDIA_URL` settings in `settings.py`
- Ensure `media/` directory has write permissions

---

## 🚀 Deployment Considerations

### Backend (Django)
1. Set `DEBUG=False` in production
2. Use environment variables for `SECRET_KEY`
3. Configure production database (PostgreSQL recommended)
4. Use gunicorn/uWSGI for serving
5. Implement proper logging
6. Set up HTTPS with SSL certificates
7. Increase token lifetimes appropriately

### Frontend (React)
1. Run `npm run build` to create optimized production build
2. Serve static files via Nginx or similar
3. Update `VITE_BACKEND_BASE_API` to production URL
4. Enable compression (gzip/brotli)
5. Implement CDN for static assets

### Infrastructure
- **Recommended Stack**: AWS/Azure/GCP
- **Backend**: EC2/App Service with load balancing
- **Database**: RDS PostgreSQL
- **Static Files**: S3/Azure Blob Storage
- **CDN**: CloudFront/Azure CDN

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### Development Guidelines
- Follow PEP 8 for Python code
- Use ESLint configuration for React code
- Write descriptive commit messages
- Add unit tests for new features
- Update documentation as needed

---

## 📚 Learning Resources

This project demonstrates proficiency in:
- **Full-Stack Development**: Django + React integration
- **Machine Learning**: LSTM neural networks for time-series prediction
- **RESTful API Design**: DRF best practices
- **Authentication**: JWT implementation
- **State Management**: React Context API
- **Data Visualization**: Matplotlib plotting
- **Financial Data Analysis**: Technical indicators

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Suraj Kumar**

- Built with ❤️ in 2026
- Demonstrating full-stack ML engineering capabilities
- Contact: [Your Email] | [LinkedIn] | [GitHub]

---

## 🙏 Acknowledgments

- **TensorFlow/Keras** for the deep learning framework
- **Yahoo Finance API** for reliable stock data
- **Django REST Framework** for robust API development
- **React** community for excellent documentation
- **Bootstrap** for responsive UI components

---

## 📈 Future Enhancements

- [ ] Real-time WebSocket price updates
- [ ] Multi-stock portfolio predictions
- [ ] Sentiment analysis integration (Twitter/News)
- [ ] Advanced technical indicators (RSI, MACD, Bollinger Bands)
- [ ] Model retraining pipeline
- [ ] Historical prediction accuracy tracking
- [ ] Email/SMS alerts for price thresholds
- [ ] Mobile app (React Native)
- [ ] Dark/Light theme toggle
- [ ] Export predictions to CSV/PDF

---

<div align="center">

**⭐ Star this repository if you find it helpful!**

Made with passion for Machine Learning and Full-Stack Development

</div>
