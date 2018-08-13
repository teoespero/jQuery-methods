// Teo Espero
// BS Cloud and Systems Administration
// Western Governors University

// #Web-Dev-Bootcamp-Udemy


function updateText(){
	if (jQuery){
		$("h1").text("My favorite Candy");
		$("li").text("M and Ms");
	}
	else {
		alert("jQuery is not defined");	
	}
}
