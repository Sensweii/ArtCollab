from rest_framework import serializers
from rest_framework.serializers import HyperlinkedModelSerializer

from logos.models import Logo
from users.models import User


class LogoSerializer(HyperlinkedModelSerializer):
    """Serializer for logo model."""
    author = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.exclude(is_superuser=True))

    class Meta:
        model = Logo
        fields = [
            'id',
            'author',
            'name',
            'image',
            'url',
        ]
        extra_kwargs = {
            'url': {'view_name': 'logos-detail'}
        }
