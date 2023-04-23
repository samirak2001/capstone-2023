$(document).ready(function() {
    // Form validation
    $("#signupbutton").click(function() {
        $("input").removeClass("error"); //remove all existing error classes and recheck form fields
        if($("#first-name").val()=="") { //mark fields that have not been filled out
            $("#first-name").addClass("error");
        }
        if($("#last-name").val()=="") {
            $("#last-name").addClass("error");
        }
        if($("#email").val()=="") {
            $("#email").addClass("error");
        }
        if($("#first-name").val()=="" || $("#last-name").val()=="" || $("#email").val()=="") { //if a required field is missing, alert user
            alert("Please go back and fill out first name, last name, and email before signing up.");
        } else {
            $("input").removeClass("error");
            alert("Thank you! Please watch your email for our exciting newsletter and offers!"); //else, confirm form has been recieved
        }
    });
});