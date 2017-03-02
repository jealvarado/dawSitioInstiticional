var ayud;

function showMap(url) {
	$("#mapFrame").attr("src", url);
	console.log(url);
}

$(document).ready(function () {
	url="info/ayudantias"
	$.getJSON(url, function (resp) {
		ayud=resp;
		ayud.forEach(function (item, index) {
			$("#tableAyudantias tbody").append($("<tr>")
				.append($("<td>").text(item.fields.dia))
				.append($("<td>").text(item.fields.horaInicio))
				.append($("<td>").text(item.fields.horaFin))
				.append($("<td>").text(item.fields.ayudante))
				.append($("<td>").text(item.fields.aula))
				.append($("<td>").text(item.fields.edificio))
				.append($("<td>").append($("<button>",{"type":"button", "class":"btn btn-primary", "data-toggle":"modal", "data-target":"#myModal"})
					.text("Mapa")
					.click(function () {
						showMap(item.fields.mapa);
					}))));
		});
	});
})

 