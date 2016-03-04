$("document").ready(function(){
//placeholder fix
	$('input[type="text"]').each(function(){$(this).attr("value", $(this).attr("placeholder")).removeAttr("placeholder");}); 
	$('textarea').each(function(){$(this).html($(this).attr("placeholder")).removeAttr("placeholder");}); 
	$('input[type="date"]').each(function(){$(this).attr("value", "Date: MM/DD/YYYY").removeAttr("placeholder");});
	$('input[type="email"]').each(function(){$(this).attr("value", "Email").removeAttr("placeholder");});
	$('input[type="password"]').each(function(){$(this).attr("value", "Password").removeAttr("placeholder");});
	$('input#search').each(function(){$(this).attr("value", "Search");});
	
	//clear input on click
	$('form').find('input[type!="submit"]').focus(function() { if(this.value == this.defaultValue){ this.value = '';}if(this.value != this.defaultValue){ this.select();}});
    $('form').find('input[type!="submit"]').blur(function() {if (jQuery.trim(this.value) == ''){this.value = (this.defaultValue ? this.defaultValue : '');}});
    
    
}); 