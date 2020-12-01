from django.urls import include
from django.urls import path
from rest_framework import routers

from .viewsets import LogoViewSet


router = routers.DefaultRouter()
router.register(r'logos', LogoViewSet, basename='logos')

urlpatterns = [
    path('', include(router.urls)),
]
