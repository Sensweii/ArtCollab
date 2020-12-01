from rest_framework.permissions import AllowAny
from rest_framework.viewsets import ModelViewSet

from users.models import User
from .serializers import UserSerializer


class UserViewSet(ModelViewSet):
    """Viewset for handling users endpoint."""
    queryset = User.objects.exclude(is_superuser=True)
    serializer_class = UserSerializer
    permission_classes = [AllowAny]
