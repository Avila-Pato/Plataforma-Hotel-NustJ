from django.contrib.auth.models import AbstractUser, Group, Permission
from django.db import models

class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=50, unique=True)

    # Agregar related_name para evitar conflictos
    groups = models.ManyToManyField(
        Group,
        related_name='customuser_groups',  # Nombre único para evitar conflictos
        blank=True
    )
    user_permissions = models.ManyToManyField(
        Permission,
        related_name='customuser_permissions',  # Nombre único para evitar conflictos
        blank=True
    )
