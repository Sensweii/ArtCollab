from django.contrib.auth.base_user import AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin
from django.db import models

from core.models import TimeStampModel
from .managers import UserManager


class User(AbstractBaseUser, PermissionsMixin, TimeStampModel):
    """Model to override Django's User model."""
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=128, blank=True)
    last_name = models.CharField(max_length=128, blank=True)
    is_active = models.BooleanField(default=True)
    verified = models.BooleanField(
        default=False,
        help_text='Set `True` for users that verified email.')
    is_staff = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = UserManager()

    def update_password(self, password):
        """Method to ensure password hashing on update."""
        self.set_password(password)
        self.save()
