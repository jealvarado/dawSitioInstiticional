var sched;

function getClase(parcial, semana, clase) {
	sched.forEach(function (item) {
		if (item.parcial==parcial && item.semana==semana && item.clase==clase) {
			return item
		}
	})
	return 0
}

function mostrarClase(parcial, semana, clase) {
	console.log("Parcial: "+parcial, " semana: "+semana+" clse: "+clase);	
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
						.append($("<iframe>", {"src":c.linkCap, "type":"application/pdf"}))))))
	}
	if(c.diapositiva){
		$("#seccionClases").append($("<div>",{"class":"divDiapositiva", "class": "panel panel-info"})
			.append($("<div>",{"class":"panel-heading", "href":"#ocultarDiapositiva", "data-toggle":"collapse"})
				.text("Diapositiva de la clase"))
			.append($("<div>",{"id":"ocultarDiapositiva", "class":"panel-body collapse in"})
				.append($("<div>",{ "class":"embed-responsive embed-responsive-4by3"})
					.append($("<iframe>", {"src":c.linkDiapositiva})))))
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
		for (var i = 0; i < 2; i++) {
			$("#listPanel").append($("<a>",{"href":"#semanas"+(i+1), "class":"list-group-item", "data-toggle":"collapse", "data-parent":"#asideSemanas"})
				.text("Parcial "+ (i+1)))
			.append($("<div>", {"class":"collapse", "id":"semanas"+(i+1)}));
			for (var index = 0; index < 7; index++) {
				$("#semanas"+(i+1)).append($("<a>",{"href":"#p"+(i+1)+"clases"+(index+1), "class":"list-group-item", "data-toggle":"collapse", "data-parent":"#semanas"+(i+1)})
					.text("Semana "+ (index+1)))
				.append($("<div>", {"class":"collapse", "id":"p"+(i+1)+"clases"+(index+1)}));
				for (var j = 0; j < 2; j++) {
					cla=getClase(i, index, j);
					if(cla)
					$("#p"+(i+1)+"clases"+(index+1)).append($("<a>",{"href":"#", "class":"list-group-item", "data-parent":"#p"+(i+1)+"clases"+(index+1)})
						.text(cla.descripcion)
						.click(function () {
							mostrarClase(i, index, j);
						}));
				}
			}
		}
	})
})