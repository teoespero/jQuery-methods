// Teo Espero
// BS Cloud and Systems Administration
// Western Governors University

// #Web-Dev-Bootcamp-Udemy




$("#enterusername").change(function(){
	var emailAddress = $("#enterusername").val();
	if (!validateEmail(emailAddress)){
		$("#messageEmail").html("The email you have entered is not valid.");
		$("#messageEmail").attr("class", "text-danger");
	}
	else {
		$("#messageEmail").html("");	
	}
});

$("#confEmailAddress").change(function(){
	var confirmedEmailAddress = $("#confEmailAddress").val();
	if (!validateEmail(confirmedEmailAddress)){
		$("#messageConf").html("The email you have entered is not valid.");
		$("#messageConf").attr("class", "text-danger");
	}
	else {
		$("#messageConf").html("");	
	}
});


$("button").click(function(){
	var confirmedEmailAddress = $("#confEmailAddress").val();
	var emailAddress = $("#enterusername").val();

	if (emailAddress != confirmedEmailAddress){
		$("#messageConf").html("The emails you have entered do not match.");
		$("#messageConf").attr("class", "text-danger");
	}
	else {
		$("#messageConf").html("");
	}
});


function validateEmail(Email) {
    var pattern = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

    return $.trim(Email).match(pattern) ? true : false;
}
