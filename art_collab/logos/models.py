from django.db import models

from core.models import TimeStampModel
from users.models import User

class Logo(TimeStampModel):
    """Model for logo objects."""

    author = models.ForeignKey(User, on_delete=models.PROTECT)
    name = models.CharField(max_length=256)
    image = models.ImageField(blank=True)
    image_link = models.CharField(max_length=512, blank=True)
