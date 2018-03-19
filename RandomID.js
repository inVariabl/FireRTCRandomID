/** FireRTC Auto CallerID Reset **/
// Created by Daniel Crooks

/* 
1. Go To: https://phone.firertc.com/settings
2. Open Up Console
3. Paste Code whenver you need a new number
*/

// Web Address - https://phone.firertc.com/settings
// CallerID - #address_ua_config_display_name
// Save Btn - button.btn.btn-default

function random_id(nonrand) {

// Generate Random Phone Number
var a = Math.floor((Math.random() * 10));
var b = Math.floor((Math.random() * 10));
var c = Math.floor((Math.random() * 10));
var d = Math.floor((Math.random() * 10));
var e = Math.floor((Math.random() * 10));
var f = Math.floor((Math.random() * 10));
var g = Math.floor((Math.random() * 10));
var h = Math.floor((Math.random() * 10));
var i = Math.floor((Math.random() * 10));
var j = Math.floor((Math.random() * 10));

var caller_id = ("1"+ a + b + c + d + e + f + g + h + i + j);
  
// If custom #, use it
if (nonrand.length() >= 0) {
  var caller_id = nonrand;
}
else {
  console.log("Using randomly generated number...");
};
  
// Change Text-Box of CallerID to generated number
var phone_input = document.getElementById("address_ua_config_display_name");
  phone_input.value = caller_id;

// Click Save
$("button.btn.btn-default").click();
};

// Run It!
random_id();
