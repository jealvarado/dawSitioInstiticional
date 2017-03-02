function cargar(){
	$(".col-sm-9 hr").empty()
	var url = "info/profesores"
	$.getJSON(url,function(resul){
		resul.forEach(function(item){
			if(item.fields.coordinador){
				if(item.fields.img==""){
					$(".col-sm-9 hr").append("<div class=\"panel panel-default\"  style=\"margin-top:20px;\"><div class=\"panel-body\"><img src=\"static/images\\profile.png\" class=\"img-rounded\" style=\"width:25%;float:left;margin-right:2%;\"><strong>"+ item.fields.nombres + "</strong><br><strong>" + item.fields.apellidos + "</strong><br>" + item.fields.correo +"</div></div>")
				}else{
					$(".col-sm-9 hr").append("<div class=\"panel panel-default\"  style=\"margin-top:20px;\"><div class=\"panel-body\"><img src="+ item.fields.img +" class=\"img-rounded\" style=\"width:25%;float:left;margin-right:2%;\"><strong>"+ item.fields.nombres + "</strong><br><strong>" + item.fields.apellidos + "</strong><br>" + item.fields.correo +"</div></div>")
				}
			}
		})
	})
}
$(document).ready(cargar)
