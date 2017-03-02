from django.shortcuts import render
from models import *
from django.core import serializers
from django.http import JsonResponse, HttpResponse




# Create your views here.


"""admin.site.register(Ayudante)
admin.site.register(Ayudantia)
admin.site.register(AyudanteTareas)
admin.site.register(Profesor)
admin.site.register(Clase)"""

def  ayudantes(request):
	listaAyudantes = Ayudante.objects.all()	
	return HttpResponse(serializers.serialize('json', listaAyudantes), content_type='application/json')

def  ayudantias(request):
	listaAyudantias = Ayudantia.objects.all()
	return HttpResponse(serializers.serialize('json', listaAyudantias), content_type='application/json')


def  ayudanteTareas(request):
	listaAyudanteTareas = AyudanteTareas.objects.all()
	return HttpResponse(serializers.serialize('json', listaAyudanteTareas), content_type='application/json')

def  profesores(request):
	listaProfesores = Profesor.objects.all()
	return HttpResponse(serializers.serialize('json', listaProfesores), content_type='application/json')

def  clases(request):
	listaClases = Clase.objects.all()
	return HttpResponse(serializers.serialize('json', listaClases), content_type='application/json')
