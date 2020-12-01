from rest_framework.permissions import AllowAny
from rest_framework.viewsets import ModelViewSet

from logos.models import Logo
from .serializers import LogoSerializer


class LogoViewSet(ModelViewSet):
    """Viewset for logo model."""
    queryset = Logo.objects.all()
    serializer_class = LogoSerializer
    permission_classes = [AllowAny]
