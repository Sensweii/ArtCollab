from django.urls import include
from django.urls import path

urlpatterns = [
    path('', include('logos.api.v1.urls')),
    path('', include('users.api.v1.urls')),
]
