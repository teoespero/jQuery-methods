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
	$("button").html("Register")
	var confirmedEmailAddress = $("#confEmailAddress").val();
	if (!validateEmail(confirmedEmailAddress)){
		$("#messageConf").html("The email you have entered is not valid.");
		$("#messageConf").attr("class", "text-danger");
	}
	else {
		$("#messageConf").html("");	
	}
});

$("#enterpassword").change(function(){
	var userPassword = $("#enterpassword").val();
	if (!CheckPassword(userPassword)){
		$("#messagePW").html("Password is invalid. Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters");
		$("#messageConf").attr("class", "text-danger");
	}
	else {
		$("#messagePW").html("");
	}
});


$("button").click(function(){
	var confirmedEmailAddress = $("#confEmailAddress").val();
	var emailAddress = $("#enterusername").val();
	var userPassword = $("#enterpassword").val();

	if (CheckPassword(userPassword)){
		if (emailAddress != confirmedEmailAddress){
			$("#messageConf").html("The emails you have entered do not match.");
			$("#messageConf").attr("class", "text-danger");
			$("button").html("Validate again")
		}
		else {
			$("#messageConf").html("");
			$("#registered").html("You are now registered.");
			$("#registered").attr("class", "text-success");
			$("#messagePW").html("");
		}
	}
	else {
		$("#messagePW").html("Password is invalid. Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters");
		$("#messageConf").attr("class", "text-danger");
	}
});


function validateEmail(Email) {
    var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return $.trim(Email).match(pattern) ? true : false;
}

function CheckPassword(inputtxt) 
{ 
	// at least one number, one lowercase and one uppercase letter
    // at least six characters
	var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    return re.test(inputtxt);
}
