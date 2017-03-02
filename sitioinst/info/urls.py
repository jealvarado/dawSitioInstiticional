"""sitioinst URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.conf import settings

from . import views

app_name = "info"

urlpatterns = [
	url(r'^ayudantes', views.ayudantes, name='ayudantes'),
	url(r'^ayudanteTareas', views.ayudanteTareas, name='ayudanteTareas'),
	url(r'^ayudantias', views.ayudantias, name='ayudantias'),
	url(r'^profesores', views.profesores, name='profesores'),
	url(r'^clases', views.clases, name='clases'),
]
