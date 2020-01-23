// JavaScript Document

$.fn.tabs = function() {
	var selector = this;
	
	this.each(function() {
		var obj = $(this); 
		
		$(obj.attr('href')).hide();
		
		$(obj).click(function() {
			$(selector).removeClass('selected');
			
			$(selector).each(function(i, element) {
				$($(element).attr('href')).hide();
			});
			
			$(this).addClass('selected');
			
			$($(this).attr('href')).fadeIn();
			
			return false;
		});
	});

	$(this).show();
	
	$(this).first().click();
};
/*
     FILE ARCHIVED ON 13:53:37 Jan 07, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:45:41 Dec 19, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  PetaboxLoader3.datanode: 45.35 (4)
  esindex: 0.029
  exclusion.robots.policy: 0.102
  RedisCDXSource: 129.083
  captures_list: 183.674
  CDXLines.iter: 12.679 (3)
  load_resource: 291.828
  PetaboxLoader3.resolve: 224.635
  exclusion.robots: 0.11
  LoadShardBlock: 39.178 (3)
*/