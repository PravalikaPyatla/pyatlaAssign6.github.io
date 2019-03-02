"use strict";

var $ = function(id) {
    return document.getElementById(id);
};

var joinList = function() {
    var emailAddress1 = $("email_address1").value;
    var emailAddress2 = $("email_address2").value;
    var firstName = $("first_name").value;
    var errorMessage = "";
	var flag = true;
	
    // validate the entries
    if (emailAddress1 == "") {
		flag = false;
		$("email_address1").nextElementSibling.firstChild.nodeValue = "First email address entry required";
    }  else {
		$("email_address1").nextElementSibling.firstChild.nodeValue = "*";
	}
	if (emailAddress2 == "") {
		flag = false;
    	$("email_address2").nextElementSibling.firstChild.nodeValue = "Second email address entry required";
    }  else {
		$("email_address2").nextElementSibling.firstChild.nodeValue = "*";
	}
	if (emailAddress2 != emailAddress1) {
		flag = false;
    	$("email_address2").nextElementSibling.firstChild.nodeValue = "Email address entries must match";
    }  else if(email_address2 == ""){
		$("email_address2").nextElementSibling.firstChild.nodeValue = "*";
	}
	if (firstName == "") {
		flag = false;
    	$("first_name").nextElementSibling.firstChild.nodeValue = "First name entry required";
    } else {
		$("first_name").nextElementSibling.firstChild.nodeValue = "*";
	}

    // submit the form if all entries are valid
    // otherwise, display an error message
    if (flag) {
        $("email_form").submit(); 
    } 
};

window.onload = function() {
    $("join_list").onclick = joinList;
    $("email_address1").focus();
};