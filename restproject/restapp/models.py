# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
	
class QuestionAnswer(models.Model):
    question = models.CharField(max_length=200)
    answer = models.CharField(max_length=200)