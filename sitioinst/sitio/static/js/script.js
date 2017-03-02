/*
$(document).ready(function(){
    // $("#myBtn").click(function(){
    //     $("#myModalLogin").modal();
    // });
});
*/

$("#myModalLogin button").click(
	function(){
		inicio();
	}
);


function inicio(){
	if ( $("#usrname").val() === "" || $("#psw").val() === "") {
		console.log("campos vacios");
		$("#errorMsj").attr("class","alert alert-danger").text("No se han ingresado datos.");
		return;		
	} 
	else if ( $("#usrname").val() === "profesor" && $("#psw").val() === "profesor") {	
		$("#icon").attr('class','glyphicon glyphicon-user');
		$("#texto").text("Profesor");
		$("#sandbox").attr('href','sandbox_prof.html');
		setLocalStorage();
		limpiarCampos();
		$("#myModalLogin").modal('toggle');
		$("#perfil").append(
            $('<a>').attr('href','perfil.html').text("Perfil")
        );
        $(".login").attr('data-target','');
	} 
	else if ( $("#usrname").val() === "estudiante" && $("#psw").val() === "estudiante") {
		$("#icon").attr('class','glyphicon glyphicon-user');		
		$("#texto").text("Estudiante");
		$("#sandbox").attr('href','sb_estd.html');		
		setLocalStorage();
		limpiarCampos();
		$("#myModalLogin").modal('toggle');		
		$("#perfil").append(
            $('<a>').attr('href','perfil.html').text("Perfil")
        );
        $(".login").attr('data-target','');
	} 
	else {
		console.log("login incorrecto");
		limpiarCampos();
		$("#errorMsj").attr("class","alert alert-danger").text("Datos incorrectos!!  Vuelva a intentarlo.");
	}	
	location.reload()
}

function limpiarCampos(){
	$("#usrname").val("");
	$("#psw").val("");
}

function setLocalStorage(){	      
    // Captura de datos escrito en los inputs        
    console.log( $("#usrname").val() );
    console.log( $("#psw").val() );
    // Guardando los datos en el LocalStorage
    localStorage.setItem("LogUser", $("#usrname").val() );
    localStorage.setItem("LogPass", $("#psw").val() );
    // Limpiando los campos o inputs
    /*
    $("#usrname").text("");
    $("#psw").text("");	
    */
    localStorage.setItem("SignUp", 1 );
}



	/*
	$('#lista_Gener ul').append(
	    $('<li>').attr('class','list-group-item list-group-item-info').append(
	        $("#titulo").val()
	    )
	)	
	
	$('#lista_Prof ul').append(
	    $('<li>').attr('class','list-group-item list-group-item-info').append(	        
	        $("<a>").attr('href','#').append(
	        	$('<span>').attr('class', 'label label-warning').append("Edit")
	        ),$("<a>").attr('href','#').append(
	        	$('<span>').attr('class', 'label label-danger').append("Delete")
	        ), $("#titulo").val()
	    )
	)

	$("#descrip").val("");
	$("#titulo").val("");
	$("#autor").val("");
	$("#etiq").val("");

	/*$("#info_ejerc").hide();*/
	/*
	console.log("Se agrego elemento");
	*/