var sched;

function getClase(parcial, semana, clase) {
	var	f = 0
	sched.forEach(function (item) {		
		if (item.parcial==parcial && item.semana==semana && item.clase==clase) {
			console.log("Parcial: " + item.parcial + ", Semana: " + item.semana + ", Clase: " + item.clase)
			f=item
			return
		}
	})
	return f
}

function mostrarClase(parcial, semana, clase) {
	console.log("Parcial: "+ parcial + " semana: " + semana + " clse: " + clase);	
	$("#listPanel a").attr("class","list-group-item");
	$($("#listPanel > a")[parcial]).attr("class","list-group-item active");
	//$($("#semanas"+(parcial+1)+" > a")[semana]).attr("class","list-group-item active");
	$($("#p"+(parcial+1)+ "clases"+(semana+1)+" > a")[clase]).attr("class","list-group-item active");
	c=getClase(parcial, semana, clase);
	$("#seccionClases").empty();
	$("#seccionClases").append($("<h3>").text(c.tema));
	$("#seccionClases").append($("<h4>").text(c.descripcion));
	if (c.leccion || c.taller || c.deber){
			$("#seccionClases").append($("<div>", {"class":"panel panel-default"})
				//.append($("<div>", {"class":"panel-heading"}).text("Actividades de la Clase"))
				.append($("<ul>",{"id":"listaObjetivos", "class":"list-group panel"})))
		}
	if (c.leccion) {
		$("#listaObjetivos").append($("<li>", {"class":"list-group-item list-group-item-danger"}).text("Se tomará una Lección"));
	}
	if (c.taller) {
		$("#listaObjetivos").append($("<li>",{"class":"list-group-item list-group-item-info"}).text("Se realizará un taller"));
	}
	if (c.deber){
		$("#listaObjetivos").append($("<li>", {"class":"list-group-item list-group-item-warning"}).text("Se revisará el deber"));
	}

	if (c.controlLectura) {
		$("#seccionClases").append($("<div>",{"id":"divLectura", "class": "panel panel-info"})
			.append($("<div>",{"class":"panel-heading", "href":"#ocultarLectura", "data-toggle":"collapse"})
				.text("Material de Lectura"))
			.append($("<div>",{"class":"panel-body"})
				.append($("<p>").text("Lectura: ").append($("<a>", {"href":c.linkLectura, "target":"_blank"}).text(c.lectura)))				
				.append($("<div>",{"id":"ocultarLectura", "class":"collapse in"})
					.append($("<div>",{"class":"embed-responsive embed-responsive-4by3"})
						.append($("<iframe>", {"src":"media/"+c.linkCap, "type":"application/pdf"}))))))
	}
	if(c.diapositiva){
		$("#seccionClases").append($("<div>",{"class":"divDiapositiva", "class": "panel panel-info"})
			.append($("<div>",{"class":"panel-heading", "href":"#ocultarDiapositiva", "data-toggle":"collapse"})
				.text("Diapositiva de la clase"))
			.append($("<div>",{"id":"ocultarDiapositiva", "class":"panel-body collapse in"})
				.append($("<div>",{ "class":"embed-responsive embed-responsive-4by3"})
					.append($("<iframe>", {"src":"media/"+c.linkDiapositiva})))))
	}
	if(c.video){
		$("#seccionClases").append($("<div>",{"id":"divVideo", "class": "panel panel-info"})
			.append($("<div>",{"class":"panel-heading", "href":"#ocultarVideo", "data-toggle":"collapse"})
				.text("Video Relacionado"))
			.append($("<div>",{"class":"panel-body", "id":"ocultarVideo", "class":"collapse in"})
				.append($("<div>",{ "class":"embed-responsive embed-responsive-16by9"})
					.append($("<iframe>", {"src":c.linkVideo})))))
	}
}
/*
$(document).ready(function(){
	url="info/clases"
	$.getJSON(url, function(resp){
		sched=resp;
		resp.data.parcial.forEach(function(par, i){
			$("#listPanel").append($("<a>",{"href":"#semanas"+(i+1), "class":"list-group-item", "data-toggle":"collapse", "data-parent":"#asideSemanas"})
				.text("Parcial "+ (i+1)))
			.append($("<div>", {"class":"collapse", "id":"semanas"+(i+1)}));
			par.semana.forEach(function(sem, index){
				$("#semanas"+(i+1)).append($("<a>",{"href":"#p"+(i+1)+"clases"+(index+1), "class":"list-group-item", "data-toggle":"collapse", "data-parent":"#semanas"+(i+1)})
					.text("Semana "+ (index+1)))
				.append($("<div>", {"class":"collapse", "id":"p"+(i+1)+"clases"+(index+1)}));
				sem.clase.forEach(function (cla, j) {
					$("#p"+(i+1)+"clases"+(index+1)).append($("<a>",{"href":"#", "class":"list-group-item", "data-parent":"#p"+(i+1)+"clases"+(index+1)})
						.text(cla.descripcion)
						.click(function () {
							mostrarClase(i, index, j);
						}));
				});
			});
		});
		$("#listPanel a")[0].click()
		$("#semanas1 a")[0].click()
		mostrarClase(0,0,0);
	});
});
*/
$(document).ready(function(){
	url="info/clases"
	$.getJSON(url, function(resp){
		sched=[];
		resp.forEach(function(item){
			sched.push(item.fields)
		})
		for (var par = 0; par < 2; par++) {
			$("#listPanel").append($("<a>",{"href":"#semanas"+(par+1), "class":"list-group-item", "data-toggle":"collapse", "data-parent":"#asideSemanas"})
				.text("Parcial "+ (par+1)))
			.append($("<div>", {"class":"collapse", "id":"semanas"+(par+1)}));
			for (var sem = 0; sem < 7; sem++) {
				$("#semanas"+(par+1)).append($("<a>",{"href":"#p"+(par+1)+"clases"+(sem+1), "class":"list-group-item", "data-toggle":"collapse", "data-parent":"#semanas"+(par+1)})
					.text("Semana "+ (sem+1)))
				.append($("<div>", {"class":"collapse", "id":"p"+(par+1)+"clases"+(sem+1)}));
				for (var cls = 0; cls < 2; cls++) {
					cla=getClase(par+1, sem+1, cls+1);
					if(cla!=0){
						(function (par, sem, cls) {
							console.log("par: "+par + " sem: "+sem+" cls: "+cls);						
							$("#p"+(par+1)+"clases"+(sem+1)).append($("<a>",{"href":"#", "class":"list-group-item", "data-parent":"#p"+(par+1)+"clases"+(sem+1)})
							.text(cla.descripcion)
							.click(function () {
								mostrarClase(par+1, sem+1, cls+1);
							}));
						}
						)(par, sem, cls);						
					}
				}
			}
		}
		$("#listPanel a")[0].click()
		$("#semanas1 a")[0].click()
		mostrarClase(1,1,1);
	})
})


for (var i = 0; i < results.length; i++) {
	(function (i) {
		marker = results[i];
		google.maps.event.addListener(marker, 'click', function() { 
			change_selection(i);
		}); 
	})(i);
}