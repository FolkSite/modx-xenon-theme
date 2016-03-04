//Sith-Workflow Pre-Process JS Functions
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

//IE11= User Agent: Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET4.0C; .NET4.0E; rv:11.0) like Gecko
//IE10= User Agent: Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; WOW64; Trident/6.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET4.0C; .NET4.0E)
//IE9=  User Agent: Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.0; Trident/5.0; SLCC1; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729) 

if(navigator.userAgent.match(/Trident\/7.0/i)) {}
if(navigator.userAgent.match(/MSIE/i)){}


}); //eof ready