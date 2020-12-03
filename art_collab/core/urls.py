from django.urls import include
from django.urls import path

from .views import HomeView

urlpatterns = [
    path('accounts/', include('django.contrib.auth.urls')),
    path('', HomeView.as_view(), name='home'),
]
