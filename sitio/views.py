from django.shortcuts import render

from info.models import Seccion, Requisito, CoRequisito, Noticia

# Create your views here.

def index(request):
	return render (request, 'sitio/index.html')

def curso(request):
	des = Seccion.objects.get(titulo=Seccion.DESCRIPCION)
	req = Requisito.objects.all()
	coreq = CoRequisito.objects.all()
	syl = Seccion.objects.get(titulo=Seccion.SYLLABUS)
	pol = Seccion.objects.get(titulo=Seccion.POLITICAS)
	return render (request, 'sitio/curso.html', {"des":des, "req":req, "coreq":coreq, "syl":syl, "pol":pol})

def ayudantias(request):
	return render (request, 'sitio/ayudantias.html')

def planificacion(request):
	return render (request, 'sitio/week2week.html')

def equipo(request, num=""):
	return render (request, 'sitio/equipo'+num+'.html')

def noticias(request):
	news = Noticia.objects.all().order_by("-fecha")
	return render (request, 'sitio/noticias.html', {"news":news})

def rankings(request):
	return render (request, 'sitio/rankings.html')