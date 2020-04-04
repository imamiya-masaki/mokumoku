from django.db import models

# Create your models here.
@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    """
    ユーザ新規作成時、自動的にTOKENを発行する。
    """
    if created:
        Token.objects.create(user=instance)
