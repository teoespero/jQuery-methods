// Teo Espero
// BS Cloud and Systems Administration
// Western Governors University

// #Web-Dev-Bootcamp-Udemy


function updateText(){
	if (jQuery){
		
		var liList = $("ul").text();
		$("#ulContents").text("Previous contents: " + liList);

		$("h1").text("My favorite Candy");
		$("li").text("M and Ms");
	}
	else {
		alert("jQuery is not defined");	
	}
}
