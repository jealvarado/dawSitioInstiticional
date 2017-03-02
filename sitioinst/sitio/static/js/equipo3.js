var r
function cargar(){
	$(".table tbody").empty()
	var url = "info/ayudantes"
	var i = 0
	$.getJSON(url,function(resul){
		r=resul
		resul.forEach(function(item){
			i++
			$(".table tbody").append($("<tr></tr>").append("<td>"+ i +"</td><td>"+ item.fields.nombres + "</td><td>" + item.fields.apellidos + "</td><td>" + item.fields.correo + "</td><td>" + item.fields. paralelo + "</td><td>" + item.fields.aula + "</td><td>"+ item.fields.horario + "</td>"))
		})
		
	})
	
}

$(document).ready(cargar)
