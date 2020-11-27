from django.db import models

from core.models import TimeStampModel
from users.models import User

class Logos(TimeStampModel):
    """Model for logo objects."""

    owner = models.ForeignKey(User, on_delete=models.PROTECT)
    name = models.CharField(max_length=256)
    image = models.ImageField(blank=True)
