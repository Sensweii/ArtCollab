from django.db import models


class TimeStampModel(models.Model):
    """
    Base model for setting time stamps. Inherit this class when time
    tracking is desired.
    """
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(blank=True, null=True)

    class Meta:
        abstract = True