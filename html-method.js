// Teo Espero
// BS Cloud and Systems Administration
// Western Governors University

// #Web-Dev-Bootcamp-Udemy


function updateText(){
	if (jQuery){
		
		var liList = $("ul").html();
		$("#ulContents").html("Previous contents: " + liList);

		$("h1").html("<h1>this site has been hacked</h1>");
		$("ul").html("<li><a href='http://google.com'>Google</a></li>");
	}
	else {
		alert("jQuery is not defined");	
	}
}
