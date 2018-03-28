
from django.conf.urls import url
from django.contrib import admin
from . import views

urlpatterns = [
    url(r'^$', views.test, name='main'),
    url(r'^adding', views.adding, name='adding'),
]
