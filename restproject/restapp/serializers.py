from django.contrib.auth.models import User
from .models import QuestionAnswer
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
	qalist = serializers.PrimaryKeyRelatedField(many=True, queryset=QuestionAnswer.objects.all())
	class Meta:
		model = User
		fields = ('id', 'username', 'first_name', 'last_name', 'email','qalist')


class QuestionAnswerSerializer(serializers.ModelSerializer):
	class Meta:
		model = QuestionAnswer
		fields = ('question','answer')