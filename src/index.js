const $ = require('jquery');
$(document).ready(function () {


let helloWorld = () => {console.log("Hello World!")};
helloWorld();
$('body').css('background-color', 'dodgerblue').html("Hello?");
});