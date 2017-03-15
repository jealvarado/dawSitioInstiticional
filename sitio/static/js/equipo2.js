var r
function cargar(){
	$(".table tbody").empty()
	var url = "info/profesores"
	$.getJSON(url,function(resul){
		r=resul
		resul.forEach(function(item){
			if(item.fields.img==""){
				$(".table tbody").append($("<tr></tr>").append("<td><img src=\"static/images/profile.png\" class=\"img-circle\" width=\"50px\" height=\"50px\"></td><td>"+ item.fields.nombres + "</td><td>" + item.fields.apellidos + "</td><td>" + item.fields.correo + "</td><td>" + item.fields. paralelo + "</td><td>" + item.fields.oficina + "</td>"));
			}else{
				$(".table tbody").append($("<tr></tr>").append("<td><img src="+ item.fields.img +" class=\"img-circle\" width=\"50px\" height=\"50px\"></td><td>"+ item.fields.nombres + "</td><td>" + item.fields.apellidos + "</td><td>" + item.fields.correo + "</td><td>" + item.fields. paralelo + "</td><td>" + item.fields.oficina + "</td>"));
			}
			$("td").css({"text-align":"center","verticall-align":"center"});
		})
	})	
}

$(document).ready(cargar)
