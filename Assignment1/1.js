var date = new Date(); 
var day = date.getDay(); 
var daylist = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
document.write("Today is : " + daylist[day]+".");         
document.write("<br>"); 
var hrs = date.getHours(); 
var ampm = hrs >= 12 ? 'PM' : 'AM'; 
hrs= hrs % 12; 
hrs = hrs ? hrs : 12; 
var min= date.getMinutes(); 
min = min < 10 ? '0' + min : min;  
document.write("\tCurrent time is : " + hrs + " " + ampm + " : " + min + " : " + date.getMilliseconds()); 
