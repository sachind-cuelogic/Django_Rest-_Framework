from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from django.contrib.auth import views as auth_views
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^postdata/', views.postdata,name="postdata"),
    url(r'^updateData/(?P<pk>[0-9]+)/$', views.updateData, name="updateData"),

    url(r'^users/', views.UserList.as_view()),
    url(r'^users1/(?P<pk>[0-9]+)/$', views.UserDetail.as_view()),
    url(r'^qa/', views.QuestionAnswerList.as_view()),
    url(r'^qa1/(?P<pk>[0-9]+)/$', views.QuestionAnswerDetail.as_view())
]	