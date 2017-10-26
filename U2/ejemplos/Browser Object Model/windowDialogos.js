'use strict';

function showAlert() {
    alert("Hello!, I'm an alert message.");
    console.log("Alert was closed");
}

function showConfirm() {
    var response = confirm("Do you want more money?");
    if(response) {
        console.log("Get a better job");
    } else {
        console.log("Are you sure? OK...");
    }
}

function showPrompt() {
    var response = prompt("What's your name", "Elvis");
    
    if(response) {
        console.log("Your name is " + response);
    } else {
        console.log("Tell me your name!!");
    }
}
