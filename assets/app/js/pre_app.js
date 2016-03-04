//touch/mobile detection
if (
	navigator.userAgent.match(/Phone/i) ||
	navigator.userAgent.match(/DROID/i) ||
	navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/) || 
    navigator.userAgent.match(/Windows Phone/i) || 
    navigator.userAgent.match(/ZuneWP7/i) || 
    navigator.userAgent.match(/IEMobile/i)
){ var mobile_device = true; var touch_device = true; }

//touch/tablet detection
if (
	navigator.userAgent.match(/Tablet/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/Kindle/i) ||
    navigator.userAgent.match(/Playbook/i) ||
    navigator.userAgent.match(/Nexus/i) ||
    navigator.userAgent.match(/Xoom/i) ||
    navigator.userAgent.match(/SM-N900T/i) || //Samsung Note 3
    navigator.userAgent.match(/GT-N7100/i) || //Samsung Note 2
    navigator.userAgent.match(/SAMSUNG-SGH-I717/i) || //Samsung Note
    navigator.userAgent.match(/SM-T330NU/i) //Samsung Tab 4

){ var tablet_device = true; var touch_device = true; }//Sith-Workflow Pre-Process JS Functions
console.log("Sith-Workflow Pre-Process JS");

//device detection

//get ready
$("document").ready( function(){

if(mobile_device){	
	$("#device_icon").addClass("icon-mobile-portrait");
	$("#user_agent").html(navigator.userAgent);
}

if(tablet_device){	
	$("#device_icon").addClass("icon-tablet-landscape");
	$("#user_agent").html(navigator.userAgent);
}

if(!mobile_device && !tablet_device){
	$("#device_icon").addClass("icon-monitor");
	$("#user_agent").html(navigator.userAgent);
}

}); //eof ready