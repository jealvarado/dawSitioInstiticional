"""sitio URL Configuration

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

app_name = "sitio"

urlpatterns = [    
	url(r'^curso', views.curso, name='curso'),
	# url(r'^ayudanteTareas', views.ayudanteTareas, name='ayudanteTareas'),
	url(r'^ayudantias', views.ayudantias, name='ayudantias'),
	url(r'^equipo(?P<num>[0-9]{0,1})', views.equipo, name='equipo'),
	url(r'^week2week', views.planificacion, name='planificacion'),
    url(r'^', views.index, name='index'),
]
