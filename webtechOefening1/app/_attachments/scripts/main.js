function bestel(var hoeveelheid, var tafelnummer, var opmerkingen, var datum) {
	var o = {hoeveelheid:tafelnummer:opmerkingen:datum};
  $.ajax({
   type: "POST",
   url: "/http://localhost:5984/_utils/restaurant/",
   contentType: "application/json",
   data: JSON.stringify(o),
   dataType: "json",
   success: function(data) {
     alert(data.id + " created !");
   }
  });
}

function toon() {
	$.ajax({
		type : 'GET',
		url: "/http://localhost:5984/_utils/restaurant/",
		contentType : 'application/json',
		
		});
}