from django.db import models
from django.contrib.auth.models import User


class Work (models.Model):
    job = models.CharField('Деятельность', max_length=50)
    jobcode = models.CharField('Код', max_length=10)

    def __str__(self):
        return self.job

    class Meta:
        verbose_name = 'Задача'
        verbose_name_plural = 'Задачи'


# часы в табеле

