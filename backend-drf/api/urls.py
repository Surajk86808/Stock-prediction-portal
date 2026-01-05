from django.urls import path
from accounts import views as account_views
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import StockPredictionAPIView

urlpatterns = [
    path("register/", account_views.RegisterView.as_view()),
    
    # JWT Auth endpoints
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    
    # Protected endpoint example or protected views can be added here
    path('protected-view/', account_views.ProtectedView.as_view(), name='protected_view'),
    
    
    # Stock Prediction API endpoint
    path('predict/', StockPredictionAPIView.as_view(), name='stock_predictions'),
]