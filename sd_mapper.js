"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: Jacob Gordon
   Date:   02/12/19

*/
//  Sets the current date and time
var thisTime = new Date();
// Sets a variable
var timeStr = thisTime.toLocaleString();
//  Using the element id timeStamp, the value of timeStr is put into the HTML replacing the value of timeStamp to whats been put into the JavaScript
document.getElementById("timeStamp").innerHTML = timeStr;
// Creates 2 variables using thisTime and the methods to use it
var thisHour = thisTime.getHours();
var thisMonth = thisTime.getMonth();
// The formula to calculate mapNum
var mapNum = (2 * thisMonth + thisHour) % 24;
// Using the calculation from mapNum, the two text strings get added together with mapNum inbetween, which will have a number. This will call in the corresponding image
var imgStr = "<img src = 'sd_sky" + mapNum + ".png' />";

// This calls upon the planisphere id and makes it so that the image is applied using the imgStr variable
document.getElementById("planisphere").insertAdjacentHTML("afterbegin", imgStr);