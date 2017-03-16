var dictResuel={};
var listEstud=[];
var estud=[];
var listCurso=[];
var dictCurso={};

$(document).ready(function(){	
	$.ajax({
		type: "GET",
		crossDomain:true,
		url: "http://http://sandboxdaw.herokuapp.com/api/resuelto",
		success: function (data) {		
			data.resueltos.forEach(function (resuelto) {
				if (dictResuel[resuelto.idUsuario]) {
					dictResuel[resuelto.idUsuario]+=1;
				}
				else{
					dictResuel[resuelto.idUsuario]=1;
				}
			});
			$.ajax({
				type: "GET",
				crossDomain:true,
				url: "http://http://sandboxdaw.herokuapp.com/api/usuario",
				success: function (datos) {					
					datos.usuarios.forEach(function(usuario) {
						if(usuario.rol=="Estudiante"){
							listEstud.push(usuario._id)
							if (dictResuel[usuario._id]) {
								var est={
									nombre:usuario.nombre,
									apellido:usuario.apellido,
									ejercicios:dictResuel[usuario._id],
									paralelo:usuario.paralelo
								}
								estud.push(est);
								if (dictCurso[est.paralelo]) {
									if (dictCurso[est.paralelo].ejercicios<est.ejercicios) {
										dictCurso[est.paralelo]=est;
									}
								}
								else{
									dictCurso[est.paralelo]=est;
									listCurso.push(est.paralelo);
								}
							}
						}
					});
					if (listCurso.length>0) {
						listCurso.forEach(function(cur) {
							var s=dictCurso[cur];
							$("#divBody").append($("<div>",{"class":"panel panel-default"})
								.append($("<div>",{"class":"panel-heading"})
									.append($("<h4>",{"class":"text-center"}).text("Paralelo " + cur)))
								.append($("<div>",{"class":"panel-body"})
									.append($("<p>",{"class":"text-center"}).text(s.nombre + " " + s.apellido + ": " + s.ejercicios + " ejercicios resueltos"))));
						});
					}
					else{
						$("#divBody").append($("<p>",{"class":"text-center"}).text("No se encuentran registros..."));
					}
				}
			});
		} 
	}); 
});