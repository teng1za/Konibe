	function f(){
	var name= document.getElementById('input_name').value;
	var mail= document.getElementById('input_mail').value;
	var mess= document.getElementById('textarea_masage').value;
	
	if((name.length < 3) && (mail.length < 3) && (mess.length < 3)) 
	{
		document.getElementById('submit').disabled=true;
	} else 
		document.getElementById('submit').disabled=false;
	}
	
	
	function checkFields(form){ 
		var name=form.elements['name'].value;
		if(name==''){ 
			form.elements['name'].style.background = ("#f00");
			form.elements['name'].focus();
			return false;
		}
		var mail=form.elements['mail'].value;
		if(mail==''){ 
			form.elements['mail'].style.background = ("#f00");
			form.elements['mail'].focus();
			return false;
		}
		var mess=form.elements['mess'].value;
		if(mess==''){ 
			form.elements['mess'].style.background = ("#f00");
			form.elements['mess'].focus();
			return false;
		}
		return true;
	}
/*
     FILE ARCHIVED ON 10:52:54 Jan 07, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:45:43 Dec 19, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  RedisCDXSource: 0.769
  LoadShardBlock: 115.662 (3)
  captures_list: 139.311
  PetaboxLoader3.datanode: 83.323 (4)
  CDXLines.iter: 19.143 (3)
  PetaboxLoader3.resolve: 190.137 (2)
  exclusion.robots: 0.193
  load_resource: 204.753
  exclusion.robots.policy: 0.18
  esindex: 0.013
*/