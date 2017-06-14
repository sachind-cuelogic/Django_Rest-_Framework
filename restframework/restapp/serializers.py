from django.contrib.auth.models import User, Group
from .models import QuestionAnswer
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):

	class Meta:
		model = User
		fields = ('id', 'username', 'first_name', 'last_name', 'email','get_full_name')


class QuestionAnswerSerializer(serializers.ModelSerializer):
	class Meta:
		model = QuestionAnswer
		fields = ('question','answer')
