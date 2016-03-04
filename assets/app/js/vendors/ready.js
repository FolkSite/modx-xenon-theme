//ready statements only
$("document").ready( function(){
	console.log("MODX SITH Workflow v4");

	//init keyboard nav
	var menu1 = new menubar('nav', false);

	//slidemenu - activate
	$("#mobile-menu").click( function(e){
		e.preventDefault;
		$("#mobile-nav").addClass('active');
	});
	$("#close-mobile-menu").click( function(e){
		e.preventDefault;
		$("#mobile-nav").removeClass('active');
	});



});
