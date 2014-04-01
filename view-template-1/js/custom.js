jQuery(document).ready(function(){	
"use strict";
jQuery("<select />").appendTo(".jqueryslidemenu");
// Create default option "Go to..."
jQuery("<option />",{
	"selected": "selected",
	"value"   : "",
	"text"    : "Go to..."
	}).appendTo(".jqueryslidemenu select");


// Populate dropdowns with the first menu items
jQuery(".jqueryslidemenu ul li a").each(function(){
	var el = jQuery(this);
	if(jQuery(this).parents("ul.sub-menu").length > 0){
	jQuery("<option />",{
			"value"   : el.attr("href"),
			//"text"    : '\xa0'+ '\xa0'+ '\xa0'+ el.text()
			"text"    : " -- "+ el.text()
		}).appendTo(".jqueryslidemenu select");
	} else {
		jQuery("<option />",{
			"value"   : el.attr("href"),
			"text"    : el.text()
		}).appendTo(".jqueryslidemenu select");
		}
});


//make responsive dropdown menu actually work			
jQuery(".jqueryslidemenu select").change(function(){
window.location = jQuery(this).find("option:selected").val();
});
});
function portfoliohover(){
"use strict";
	jQuery(function() {
		// OPACITY OF BUTTON SET TO 0%
jQuery(".portfolio_item img").css("opacity","1");
			// ON MOUSE OVER
		jQuery(".portfolio_item  img").hover(function (){
			// SET OPACITY TO 70%
		jQuery(this).stop().animate({
		opacity:0.5
		}, "slow");
	},
	
// ON MOUSE OUT
	function (){
	// SET OPACITY BACK TO 50%
	jQuery(this).stop().animate({
	opacity: 1
	}, "slow");
	});
	});}
jQuery(document).ready(function(){
"use strict";	
portfoliohover();
});