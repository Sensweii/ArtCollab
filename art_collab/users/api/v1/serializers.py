from rest_framework.serializers import HyperlinkedModelSerializer

from users.models import User


class UserSerializer(HyperlinkedModelSerializer):
    """Serializer for user model."""
    class Meta:
        model = User
        fields = [
            'id',
            'email',
            'first_name',
            'last_name',
            'url',
        ]
        extra_kwargs = {
            'url': {'view_name': 'users-detail'}
        }
