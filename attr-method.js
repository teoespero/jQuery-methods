// Teo Espero
// BS Cloud and Systems Administration
// Western Governors University

// #Web-Dev-Bootcamp-Udemy


function showAttr(){
	// make sure jQuery is connect
	if (jQuery){
		
		// get the old attributes

		// ALT
		var myOldAlt = $("#manilaPic").attr("alt");
		$("#oldAlt").text("The old ALT content \"" + myOldAlt + "\"");

		// TITLE
		$("#oldTitle").text("The old TITLE content \"" + myOldTitle + "\"");
		var myOldTitle = $("#manilaPic").attr("title");

		// set the new attributes

		// image size
		$("#manilaPic").attr("width", "30%");
		
		// ALT
		$("#manilaPic").attr("alt", "Street scene in Manila");
		var myNewAlt = $("#manilaPic").attr("alt");
		$("#newAlt").text("The new ALT content \"" + myNewAlt + "\"");
		
		// TITLE
		$("#manilaPic").attr("title", "Picture from unsplash.com about Manila");
		var myNewTitle = $("#manilaPic").attr("title");
		$("#newTitle").text("The new TITLE content \"" + myNewTitle + "\"");
	}
	else {
		alert("jQuery is not defined");	
	}
}


function showAttr02(){
	// make sure jQuery is connect
	if (jQuery){
		
		// get the old attributes

		// ALT
		var myOldAlt = $("#manilaPic").attr("alt");
		$("#oldAlt").text("The old ALT content \"" + myOldAlt + "\"");

		// TITLE
		$("#oldTitle").text("The old TITLE content \"" + myOldTitle + "\"");
		var myOldTitle = $("#manilaPic").attr("title");

		// set the new attributes
		$("#manilaPic").attr({
			width: "30%", // image size
			alt: "Street scene in Manila", // ALT
			title: "Picture from unsplash.com about Manila" // TITLE
		});
		
		var myNewAlt = $("#manilaPic").attr("alt");
		$("#newAlt").text("The new ALT content \"" + myNewAlt + "\"");
		
		var myNewTitle = $("#manilaPic").attr("title");
		$("#newTitle").text("The new TITLE content \"" + myNewTitle + "\"");
	}
	else {
		alert("jQuery is not defined");	
	}
}
