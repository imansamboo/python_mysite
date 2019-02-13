/*
 * Ajaxify - jQuery Plugin
 * version: 2.00 (11/12/2008)
 * Created by: MaX
 * Examples and documentation at: http://max.jsrhost.com/ajaxify/
 * licensed under and GPL licenses:
 * http://www.gnu.org/licenses/gpl.html
 */

(function($){


jQuery.AjaxifyDefaults = {
		event:'click', /*specify the event*/
		use:'href', /* specify the link, priority is for the href attr.*/
		link:false, /* specify the link, priority is for the href attr.*/
		target:'#container', /*the data loaded via ajax will be placed here*/
		animateOut:false,
		animateIn:false,
		animateOutSpeed:'normal',
		animateInSpeed:'normal',
		method: 'GET', /* the request method GET or POST*/
		tagToload:false, /* inserts just the tag from the data loaded, it can be specified as t a second argument in the 'target' attr(#box,#result)*/
		loading_type:'ajaxify',/*values: none, ajaxify, nprogress*/
		loading_txt:'',
		loading_img:"images/loading.gif",
		loading_target: false,
		loading_fn:function(options){
			jQuery.ajaxifyLoading(options);
		},
		nprogress:{showSpinner:true,parent:'#container'},
		loadHash:false,	/* for use this to resolve bookmarking issues, see example for more details*/
		title:false, /* change page title along with the request. */
		forms:false, /* send form data along with th request (forms, input , radio ... etc jquery selector) */
		params:'ajax=true',/*extend parameters for the webpage. it can be set to function since v2*/
		timeout:false, /*in ms.  there is a problem in this option on linux servers*/
		contentType:"application/x-www-form-urlencoded",
		dataType:'html',
		cache:false, /* force the browser not to cache*/
		username:false, /*username HTTP access authentication*/
		password:false, /*password HTTP access authentication*/
		onStart:function(op){}, /* a callback function before start requesting.*/
		onError:function(op){
			jQuery.ajaxifyManip(op,"<font style='color: #CC0000'>Error: </font> Couldn't open the page.");
		}, /* a callback function if error happened while requesting*/
		onSuccess:function(op){},/* a callback function if the request finished successfuly*/
		onComplete:function(op){}//*a callback function when the request finished weather it was a successful one or not.*/
};
jQuery.AjaxifyFirstLoad = true;
jQuery.AjaxifyhistorySet = new Object();
jQuery.AjaxifyPageTitle = document.title;
jQuery.AjaxifyDebug = false;

jQuery.fn.ajaxify = function(options) {
	if(!jQuery(this).size()){
		jQuery.ajaxifylog('Error: No matched element/s for your ajaxify selector " '+jQuery(this).selector+' ".');
		return false;
	}
	/*var ver = jQuery.fn.jquery.split('.');
	if(ver[0] < 1 || ver[1] < 2 || ver[2] < 6){
		jQuery.ajaxifylog('Error: Your jQuery version is old. Version 1.2.6 or newer is required.');
		return false;
	}*/
	return this.each(function() {
	var current = jQuery.extend({},jQuery.AjaxifyDefaults, options);

	if(jQuery.metadata){
	current = jQuery.extend(current,jQuery(this).metadata());
	}

	if(jQuery(this).attr('event')!=null && jQuery(this).attr('event')!='')
	{
		current.event = jQuery(this).attr('event');
	}
	//alert(current.event);
	if(current.event){
		jQuery(this).bind(current.event,function(){
			if(!jQuery(this).ajaxifyAnalyse(current)) return false;
			if(!current.hash)
				jQuery.ajaxifyLoad(current);
			else{
				jQuery.ajaxifyHash(current);
			}
			 //stop browser
			if(jQuery(this).is('a') || jQuery(this).is('form')) return false;
		});
	}else{
		if(!jQuery(this).ajaxifyAnalyse(current)) return false;
		jQuery.ajaxifyLoad(current);
	}
		//for bookmarking
		if(current.loadHash  && jQuery.AjaxifyFirstLoad){
			if(!jQuery(this).ajaxifyAnalyse(current)) return false;
			if(document.location.hash.replace(/^#/, '') == current.hash	&& current.hash){
				jQuery.ajaxifyHash(current);
				jQuery.AjaxifyFirstLoad = false;
			}
		}

  }); // end each fn
}; // end ajaxify fn

jQuery.fn.ajaxifyAnalyse = function(current){
	current.object = this;
	if(jQuery(this).attr('onsuccess')!=null && jQuery(this).attr('onsuccess')!='')
	{
		var fn_success = jQuery(this).attr('onsuccess');
		current.onSuccess = function(ap){if(window[fn_success]) window[fn_success]();};
	}

	if(jQuery(this).attr('oncomplete')!=null && jQuery(this).attr('oncomplete')!='')
	{
		var fn_complete = jQuery(this).attr('oncomplete');
		current.onComplete = function(ap){if(window[fn_complete]) window[fn_complete]();};
	}

	if(jQuery(this).not('a') && jQuery(this).attr('target')!=null && jQuery(this).attr('target')!='')
	{
		current.target = jQuery(this).attr('target').replace(/^#/, "");
	}

	if(jQuery(this).not('a') && jQuery(this).attr('enctype')!=null && jQuery(this).attr('enctype')!='')
		current.contentType = jQuery(this).attr('enctype');
	if(jQuery(this).is('a') && current.use!==false){
		if(jQuery(this).attr(current.use)){
			//if(jQuery.browser.msie)
				//var link = jQuery(this).attr('href').replace(/^#/, "");
			//else
				var link = jQuery(this).attr(current.use).replace(/^#/, "");
				//alert(link);
			current.link = link || current.link;
		}else
			current.link;
		//
		var p = jQuery(this).attr('params') || jQuery(this).data('params');
		if(typeof p!='undefined')
			current.params = p;
		//
		if(typeof current.tagToload != 'object')
			if(jQuery(this).attr('target'))
				current.target = jQuery(this).attr('target');
			else
				current.target;
		else
			current.target = current.loading_target || '#AjaxifyTemp';
	}

	if(!current.loading_target)
	   current.loading_target = current.target;


	if(jQuery(this).is('form'))
	{
		tmp_mthd = jQuery(this).attr('method');
		if(tmp_mthd!=null && tmp_mthd!='' && (tmp_mthd=='get' || tmp_mthd=='post'))
		{
			current.method = tmp_mthd;
		}
		tmp_mthd = null;

		if(jQuery(this).attr('enctype')!=null && jQuery(this).attr('enctype')!='');
			//current.contentType = jQuery(this).attr('enctype');

		if(jQuery(this).attr('action')!=null && jQuery(this).attr('action')!='')
			current.link = jQuery(this).attr('action');

		if(jQuery(this).attr('forms')!=null && jQuery(this).attr('forms')!=''){
			if(jQuery(this).attr('forms')=='this')
			{
				current.forms=null;
				current.paramres = text = jQuery(this).serialize();
			}else
			current.forms = jQuery(this).attr('forms');
		}
	}else{
		tmp_mthd = jQuery(this).data('method');
		if(tmp_mthd!=null && tmp_mthd!='' && (tmp_mthd=='get' || tmp_mthd=='post'))
		{
			current.method = tmp_mthd;
		}
		tmp_mthd = null;
	}
	if(current.forms){
		var text = jQuery(current.forms).serialize();
		current.paramres = text;
	}

	var params = (typeof current.params == 'function') ? current.params(current) : current.params;

	if(typeof params == 'object'){
		params = jQuery.param(params);
	}

	if(current.dataType=='json')
	{
		if(current.params=='')
			current.params += '&';
		current.params += 'json=true';
	}


	if(typeof params == 'string'){
		if(text)
			current.paramres +='&'+params;
		else
			current.paramres = params;
	}

	if(typeof current.target!='object')
	{
		var len = current.target.length-1;
		if(typeof current.tagToload !='object')
		{
			if(current.target.charAt(len) == '+' || current.target.charAt(len)=='-'){
				current.manip = current.target.charAt(len);
				current.target = current.target.substr(0,len);
			}
		}
	}

   	if(current.loadHash){
		if(!jQuery.historyInit){
			jQuery.ajaxifylog('Error: loadHash is enabled but history plugin couldn\'t be found.');
		return false;
		}

		if(current.loadHash === true){
			jQuery.ajaxifylog('Info: It seemes you are upgrading from v1.0. Please see the new documentation about loadHash. "attr:href" will be used instead of "true".');
			current.loadHash = "attr:href";
		}
		if(current.loadHash.toLowerCase() == 'attr:href' ||
			current.loadHash.toLowerCase() == 'attr:rel' ||
			current.loadHash.toLowerCase() == 'attr:title'){

			current.loadHash = current.loadHash.toLowerCase();
			current.hash = jQuery(this).attr(current.loadHash.replace('attr:',''));
			if(jQuery.browser.opera){
				current.hash = current.hash.replace('?','%3F');
				current.hash = current.hash.replace('&','%26');
				current.hash = current.hash.replace('=','%3D');
			}
		}else
			current.hash = current.loadHash;

		if(!current.hash)
			jQuery.ajaxifylog('Warning: You have specified loadHash, but its empty or attribute couldn\'t be found.');
	}
	if(!jQuery(current.target).size() && typeof current.tagToload !='object')
		jQuery.ajaxifylog('Warning: Target " '+current.target+' " couldn\'t be found.');
	//
	if(typeof current.target!='object')
	{
		if(current.target.match(/^\+/))
		{
			//open ajaxify result in new popup window
			jQuery.ajaxifyPopup(current);
			return false;
		}
		if(current.target.match(/^\-/))
		{
			return false;
		}
	}
	//
 	return true;
};


jQuery.ajaxifyPopup = function(current)
{
	if(!jQuery.fn.popupWindowOpen)
	{
		alert('popupWindowOpen not defined!');
		return false;
	}
	if(typeof current.target=="object")
	{
		alert('when using popupWindowOpen, target must be a `selector` string!');
		return false;
	}
	jQuery.fn.popupWindowOpen({windowName:current.target,windowURL:'blank.html',width:200,height:200,centerScreen:1,scrollbars:1,menubar:1});
	//split params into form inputs
	var inputs = '';
	jQuery.each(current.paramres.split('&'), function(){
		var pair = this.split('=');
		inputs+='<input type="text" name="'+ pair[0] +'" value="'+ pair[1] +'" />';
	});
	//send request
	jQuery('<form action="'+ current.link +'" target="'+ current.target +'" method="'+ (current.method||'post') +'">'+inputs+'</form>')
	.appendTo('body').submit().remove();
};

jQuery.ajaxifyLoading = function(options){
	if(options.loading_type=='ajaxify')
	{
		var html = "<div id='AjaxifyLoading'><img src='"+options.loading_img+"' alt='Loading...' title='Loading...' >"+options.loading_txt+"</div>";
		if(options.loading_target)
			jQuery.ajaxifyManip(options.loading_target,html);
		else
			jQuery.ajaxifyManip(options,html);
	}
}

jQuery.ajaxifyHash = function(current){
	var ob = new Object();
	jQuery.each(current, function(key, value) {
		ob[key] = value;
	});
	jQuery.AjaxifyhistorySet[ob.hash] = ob;
	location.hash = ob.hash;
	//if(jQuery.AjaxifyFirstLoad.history){
	//alert(ob.hash);
		jQuery.historyInit(jQuery.ajaxifyHistory);
		jQuery.AjaxifyFirstLoad.history = false;
	//}
};





jQuery.ajaxifyLoad = function(current) {
	// turn off globals
	if($(current.object).is('[disabled]'))
		return false;
	jQuery.ajaxSetup({global:false});
	//start calling  jQuery.ajax function. thank you jquery for making this easy
	var currentSetting = {
		type: current.method,
		url: current.link,
		dataType: current.dataType,
		data: current.paramres,
		contentType:current.contentType,
		processData:true,
		timeout:current.timeout,
		cache:current.cache,
		username:current.username,
		password:current.password,
		complete: function(){
			current.onComplete(current)
		},
		beforeSend: function(){
			current.onStart(current);

			if(current.loading_type=='nprogress')
			{
				NProgress.configure(current.nprogress);
				NProgress.inc();
			}

			if(current.animateOut){
				if(current.loading_target != current.target);//diff target? fire before start anim
					current.loading_fn(current);
				jQuery(current.target).animate(current.animateOut,current.animateOutSpeed,function(){
					//alert('hr');
					if(!current.loading_target)//already fired
					current.loading_fn(current);
				});
			}else
				current.loading_fn(current);
			},
		success: function(response, status, xhr){
			jQuery(current.target).stop();
			if(current.loading_type=='ajaxify') jQuery('#AjaxifyLoading').remove();
			if(current.loading_type=='nprogress') NProgress.done();

			if(current.title)
				document.title = current.title;
			else if(document.title != jQuery.AjaxifyPageTitle)
				document.title = jQuery.AjaxifyPageTitle;

			if(current.tagToload){
				response = '<div>'+response+'</div>'; //wrap response so we can find tags within it.
				if(typeof current.tagToload == 'string'){
					jQuery.ajaxifyManip(current,jQuery(response).find(current.tagToload));
				}else if(typeof current.tagToload == 'object') {
					jQuery.each(current.tagToload, function(tag, target) {
						if(jQuery(response).find(tag).size())
							jQuery.ajaxifyManip(target,jQuery(response).find(tag));
						else
							jQuery.ajaxifylog('Warning: Tag "'+tag+'" couldn\'t be found.');

					});
				}
			}else{
				//
				jQuery.ajaxifyManip(current,response);
			}
			current.onSuccess(current, response, status, xhr);
			if(current.animateIn)
				jQuery(current.target).animate(current.animateIn,current.animateInSpeed);
		},
		error:function(msg){
			jQuery(current.target).stop();
			current.onError(current,msg);
			if(current.animateIn)
				jQuery(current.target).animate(current.animateIn,current.animateInSpeed);

			if(current.loading_type=='nprogress')
			{
				NProgress.done();
			}
		}
	}
	if(!currentSetting.username) delete currentSetting.username;
	if(!currentSetting.password) delete currentSetting.password;
	jQuery.ajax(currentSetting);
};

jQuery.ajaxifylog = function(message) {
	if(jQuery.AjaxifyDebug)
		if(window.console) {
			console.debug(message);
		} else {
			alert(message);
		}
};

jQuery.ajaxifyHistory = function(hash){
	if(hash){
		if(jQuery.browser.safari){
			var options = jQuery.AjaxifyhistorySet[location.hash.replace(/^#/,'')]; //fix bug in history.js
		}else
			var options = jQuery.AjaxifyhistorySet[hash];

		if(options)
			jQuery.ajaxifyLoad(options);
		else
			jQuery.ajaxifylog('History Fired. But I couldn\'t find hash. Most propabley, the hash is empty. If so, its normal.');
	}
};

jQuery.ajaxifyManip = function(current,data){
	if(typeof current != 'object'){
		var target = current;
		var current = new Object;
		var len = target.length-1;
		if(target.charAt(len) == '+' || target.charAt(len)=='-'){
			current.manip = target.charAt(len);
			current.target = target.substr(0,len);
		}
		else{
			current.manip = '';
			current.target = target;
		}
		if(!jQuery(current.target).size())
			jQuery.ajaxifylog('Warning: Target "'+current.target+'" couldn\'t be found.');
	}

	if(current.manip == '+')
		jQuery(current.target).append(data);
	else if(current.manip == '-')
		jQuery(current.target).prepend(data);
	else
		jQuery(current.target).html(data);
};


})(jQuery);