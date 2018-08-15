// Teo Espero
// BS Cloud and Systems Administration
// Western Governors University

// #Web-Dev-Bootcamp-Udemy

$("#cars").change(function(){
	var str = "";
	$( "select option:selected" ).each(function() {
      str += $(this).text() + " ";
    });
    $("#userChoice").text(str);
});

$("button").click(function (){
	location.reload();
});