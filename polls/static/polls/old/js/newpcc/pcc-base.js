pcc = {debug:false}
pcc.none = function(){};
pcc.none = function(){};
pcc.clear = function() {return (!pcc.debug) ? pcc.none() : console.clear.apply(this, arguments);}
pcc.count = function() {return (!pcc.debug) ? pcc.none() : console.count.apply(this, arguments);}
pcc.debug = function() {return (!pcc.debug) ? pcc.none() : console.debug.apply(this, arguments);}
pcc.error = function() {return (!pcc.debug) ? pcc.none() : console.error.apply(this, arguments);}
pcc.group = function() {return (!pcc.debug) ? pcc.none() : console.group.apply(this, arguments);}
pcc.groupCollapsed = function() {return (!pcc.debug) ? pcc.none() : console.groupCollapsed.apply(this, arguments);}
pcc.groupEnd = function() {return (!pcc.debug) ? pcc.none() : console.groupEnd.apply(this, arguments);}
pcc.info = function() {return (!pcc.debug) ? pcc.none() : console.info.apply(this, arguments);}
pcc.log = function() {return (!pcc.debug) ? pcc.none() : console.log.apply(this, arguments);}
pcc.markTimeline = function() {return (!pcc.debug) ? pcc.none() : console.markTimeline.apply(this, arguments);}
pcc.profile = function() {return (!pcc.debug) ? pcc.none() : console.profile.apply(this, arguments);}
pcc.profileEnd = function() {return (!pcc.debug) ? pcc.none() : console.profileEnd.apply(this, arguments);}
pcc.table = function() {return (!pcc.debug) ? pcc.none() : console.table.apply(this, arguments);}
pcc.time = function() {return (!pcc.debug) ? pcc.none() : console.time.apply(this, arguments);}
pcc.timeEnd = function() {return (!pcc.debug) ? pcc.none() : console.timeEnd.apply(this, arguments);}
pcc.timeStamp = function() {return (!pcc.debug) ? pcc.none() : console.timeStamp.apply(this, arguments);}
pcc.timeline = function() {return (!pcc.debug) ? pcc.none() : console.timeline.apply(this, arguments);}
pcc.timelineEnd = function() {return (!pcc.debug) ? pcc.none() : console.timelineEnd.apply(this, arguments);}
pcc.trace = function() {return (!pcc.debug) ? pcc.none() : console.trace.apply(this, arguments);}
pcc.warn = function() {return (!pcc.debug) ? pcc.none() : console.warn.apply(this, arguments);}
pcc.test = function() {return (!pcc.debug) ? pcc.none() : console.log('this is a test');}


$.expr[":"].contains = $.expr.createPseudo(function(arg) {
    return function( elem ) {
        return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
    };
});

!function(){"use strict";function e(e){return r(n(e),arguments)}function t(t,r){return e.apply(null,[t].concat(r||[]))}function r(t,r){var n,i,a,o,p,c,u,f,l,d=1,g=t.length,b="";for(i=0;i<g;i++)if("string"==typeof t[i])b+=t[i];else if(Array.isArray(t[i])){if((o=t[i])[2])for(n=r[d],a=0;a<o[2].length;a++){if(!n.hasOwnProperty(o[2][a]))throw new Error(e('[sprintf] property "%s" does not exist',o[2][a]));n=n[o[2][a]]}else n=o[1]?r[o[1]]:r[d++];if(s.not_type.test(o[8])&&s.not_primitive.test(o[8])&&n instanceof Function&&(n=n()),s.numeric_arg.test(o[8])&&"number"!=typeof n&&isNaN(n))throw new TypeError(e("[sprintf] expecting number but found %T",n));switch(s.number.test(o[8])&&(f=n>=0),o[8]){case"b":n=parseInt(n,10).toString(2);break;case"c":n=String.fromCharCode(parseInt(n,10));break;case"d":case"i":n=parseInt(n,10);break;case"j":n=JSON.stringify(n,null,o[6]?parseInt(o[6]):0);break;case"e":n=o[7]?parseFloat(n).toExponential(o[7]):parseFloat(n).toExponential();break;case"f":n=o[7]?parseFloat(n).toFixed(o[7]):parseFloat(n);break;case"g":n=o[7]?String(Number(n.toPrecision(o[7]))):parseFloat(n);break;case"o":n=(parseInt(n,10)>>>0).toString(8);break;case"s":n=String(n),n=o[7]?n.substring(0,o[7]):n;break;case"t":n=String(!!n),n=o[7]?n.substring(0,o[7]):n;break;case"T":n=Object.prototype.toString.call(n).slice(8,-1).toLowerCase(),n=o[7]?n.substring(0,o[7]):n;break;case"u":n=parseInt(n,10)>>>0;break;case"v":n=n.valueOf(),n=o[7]?n.substring(0,o[7]):n;break;case"x":n=(parseInt(n,10)>>>0).toString(16);break;case"X":n=(parseInt(n,10)>>>0).toString(16).toUpperCase()}s.json.test(o[8])?b+=n:(!s.number.test(o[8])||f&&!o[3]?l="":(l=f?"+":"-",n=n.toString().replace(s.sign,"")),c=o[4]?"0"===o[4]?"0":o[4].charAt(1):" ",u=o[6]-(l+n).length,p=o[6]&&u>0?c.repeat(u):"",b+=o[5]?l+n+p:"0"===c?l+p+n:p+l+n)}return b}function n(e){if(i[e])return i[e];for(var t,r=e,n=[],a=0;r;){if(null!==(t=s.text.exec(r)))n.push(t[0]);else if(null!==(t=s.modulo.exec(r)))n.push("%");else{if(null===(t=s.placeholder.exec(r)))throw new SyntaxError("[sprintf] unexpected placeholder");if(t[2]){a|=1;var o=[],p=t[2],c=[];if(null===(c=s.key.exec(p)))throw new SyntaxError("[sprintf] failed to parse named argument key");for(o.push(c[1]);""!==(p=p.substring(c[0].length));)if(null!==(c=s.key_access.exec(p)))o.push(c[1]);else{if(null===(c=s.index_access.exec(p)))throw new SyntaxError("[sprintf] failed to parse named argument key");o.push(c[1])}t[2]=o}else a|=2;if(3===a)throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");n.push(t)}r=r.substring(t[0].length)}return i[e]=n}var s={not_string:/[^s]/,not_bool:/[^t]/,not_type:/[^T]/,not_primitive:/[^v]/,number:/[diefg]/,numeric_arg:/[bcdiefguxX]/,json:/[j]/,not_json:/[^j]/,text:/^[^\x25]+/,modulo:/^\x25{2}/,placeholder:/^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,key:/^([a-z_][a-z_\d]*)/i,key_access:/^\.([a-z_][a-z_\d]*)/i,index_access:/^\[(\d+)\]/,sign:/^[\+\-]/},i=Object.create(null);"undefined"!=typeof exports&&(exports.sprintf=e,exports.vsprintf=t),"undefined"!=typeof window&&(window.sprintf=e,window.vsprintf=t,"function"==typeof define&&define.amd&&define(function(){return{sprintf:e,vsprintf:t}}))}();

$.fn.findIn = function(selector, addBack)
{
	var inElement_x = $(this);
	if(typeof addBack!='undefined' && addBack)
	{
		return inElement_x.find(selector).addBack(selector);
	}
	return inElement_x.find(selector);
}
/************************
/*	PARSE SOURCE TAGS
/************************/
/*function loadAssetSources(lookInsideElement)
{
	inElement = (typeof lookInsideElement == 'object') ? lookInsideElement : $(lookInsideElement);
	inElement.find('source[link]').each(function(){
		var source = $(this);
		var link   = source.attr('link');
		var baseLink   = link.split(/[?#]/)[0];
		//
		switch(source.attr('format'))
		{
			default:
			case 'js':
				if(__loadedAssets.js.indexOf(baseLink)>=0)
					break;
				var placeholder = $('head>script[master]:first');
				placeholder = (placeholder.length>0) ? placeholder : $('head>*:last');
				var tag = $('<script>')
					//.attr('type','javascript')
					.attr('src',link);
				tag.insertBefore(placeholder);
				__loadedAssets.js.push(baseLink);
			break;
			case 'css':
				if(__loadedAssets.css.indexOf(baseLink)>=0)
					break;
				var placeholder = $('head>link[rel=stylesheet]:last');
				placeholder = (placeholder.length>0) ? placeholder : $('head>*:not(script):last');
				var tag = $('<link>').attr('rel','stylesheet').attr('href',link);
				tag.insertAfter(placeholder);
				__loadedAssets.css.push(baseLink);
			break;
		}
		source.remove();
	});
}*/

function loadAssetSources(lookInsideElement)
{
	var CssHtml = '';
	var JsHtml = '';
	var JsPlaceholder = $('head>script[master]:first');
	JsPlaceholder = (JsPlaceholder.length>0) ? JsPlaceholder : $('head>*:last');
	var CssPlaceholder = $('head>link[rel=stylesheet]:last');
	CssPlaceholder = (CssPlaceholder.length>0) ? CssPlaceholder : $('head>*:not(script):last');
	inElement = (typeof lookInsideElement == 'object') ? lookInsideElement : $(lookInsideElement);
	inElement.find('source[link]').each(function(){
		var source=$(this);
		var link  =source.attr('link');
		var baseLink=link.split(/[?#]/)[0];
		var tag='';
		//
		switch(source.attr('format'))
		{
			default:
			case 'js':
				if(__loadedAssets.js.indexOf(baseLink)>=0) break;
				JsHtml+='<script src="'+link+'"></script>';
				__loadedAssets.js.push(baseLink);
			break;
			case 'css':
				if(__loadedAssets.css.indexOf(baseLink)>=0) break;
				CssHtml+='<link rel="stylesheet" href="'+link+'" />';
				__loadedAssets.css.push(baseLink);
			break;
		}
	}).remove();
	$(CssHtml).insertAfter(CssPlaceholder);
	$(JsHtml).insertAfter(JsPlaceholder);
}

function applyDefaultActions(e, lookInsideElement, addBack)
{
	var addBack = (typeof addBack==='undefined') ? true : addBack;

	/*if(inElement.attr('data-xld-event'))
		return;
	else
		inElement.attr('data-xld-event',true);*/

	/************************
	/*	PARSE SOURCE TAGS
	/************************/
	loadAssetSources(lookInsideElement);

	/************************
	/*	LAYOUT
	/************************/

	/* set minimum height for content wrapper */
	//e('.content-wrapper').css('min-height', $('.wrapper').outerHeight(true) - $('.top-bar').outerHeight(true));


	/************************
	/*	MAIN NAVIGATION
	/************************/

	inElement.findIn('.main-menu .js-sub-menu-toggle', addBack).off('click').on('click',function(evt){

		evt.preventDefault();

		$li = e(this).parent('li');
		if( !$li.hasClass('active')){
			$li.find(' > a .toggle-icon').removeClass('fa-angle-left').addClass('fa-angle-down');
			$li.addClass('active');
		}
		else {
			$li.find(' > a .toggle-icon').removeClass('fa-angle-down').addClass('fa-angle-left');
			$li.removeClass('active');
		}

		$li.find(' > .sub-menu').slideToggle(300);
	});

	window.inElement = inElement;
	inElement.findIn('.btn-toggle-sidebar', addBack).each(function(){
		e(this).clickToggle(collapseSideBar,expandSideBar,
			function(){
				if(window.localStorage.getItem('sidebar-minified'))
				{
					e('.btn-toggle-sidebar').data('clicked', true);
					collapseSideBar();
				}else{
					e('.btn-toggle-sidebar').data('clicked', false);
					expandSideBar();
				}
			}
		);
	});

	// main responsive nav toggle
	inElement.findIn('.main-nav-toggle', addBack).clickToggle(
		function() {
			inElement.findIn('.left-sidebar', addBack).slideDown(300)
		},
		function() {
			inElement.findIn('.left-sidebar', addBack).slideUp(300);
		}
	);

	inElement.findIn('.sidebar-controls li', addBack).off('click').on('click',function(evt){
		evt.preventDefault();
		var tabId = e(this).data('tab-id') || false;
		if(!tabId) return;
		e('.main-nav .nav-col#nav-tab-'+tabId).css('display','block');
		setTimeout( function(){
			e('.main-nav .nav-col.active').css('right','-100%').removeClass('active');
			e('.main-nav .nav-col#nav-tab-'+tabId).css('right','0').addClass('active');
			e('.main-nav .nav-col:not(.active)').css('display','none').css('right','100%');
		}, 200);
		e('.sidebar-controls li.active').removeClass('active');
		e(this).addClass('active');
	}).first().click();

	/************************
	/*	BOOTSTRAP ALERT
	/************************/
	inElement.findIn('.alert .close', addBack).off('click').on('click',function(evt){
		evt.preventDefault();
		e(this).parents('.alert').fadeOut(300);
	});

	/************************
	/*	BOOTSTRAP POPOVER
	/************************/
	if(typeof e.fn.popover!='undefined')
	{
		inElement.findIn('.btn-help').popover({
			container: 'body',
			placement: 'top',
			html: true,
			trigger: 'hover',
			title: '<i class="fa fa-book"></i> Quick Help',
			content: "Help summary goes here. Options can be passed via data attributes <code>data-</code> or JavaScript. You can change the popover trigger to 'click' instead of 'hover'."
		});
	}

	//*******************************************
	/*	Widget Actions
	/********************************************/
	// widget remove
	inElement.findIn('.widget', addBack).find('.btn-remove').off('click').on('click',function(evt){

		evt.preventDefault();
		e(this).parents('.widget').fadeOut(300, function(){
			e(this).remove();
		});
	});

	// widget ajax reload
	inElement.findIn('.widget', addBack).find('.btn-ajax-reload').off('click').on('click',function(evt){
		//
	});

	// widget toggle expand
	inElement.findIn('.widget', addBack).find('.btn-toggle-expand').clickToggle(
		function(evt) {
			evt.preventDefault();
			e(this).parents('.widget').find('.widget-content').slideUp(300);
			e(this).find('i.fa-chevron-up').toggleClass('fa-chevron-down');
		},
		function(evt) {
			evt.preventDefault();
			e(this).parents('.widget').find('.widget-content').slideDown(300);
			e(this).find('i.fa-chevron-up').toggleClass('fa-chevron-down');
		}
	);

	// widget focus
	inElement.findIn('.widget', addBack).find('.btn-focus').clickToggle(
		function(evt) {
			evt.preventDefault();
			e(this).find('i.fa-eye').toggleClass('fa-eye-slash');
			e(this).parents('.widget').find('.btn-remove').addClass('link-disabled');
			e(this).parents('.widget').addClass('widget-focus-enabled');
			e('<div id="focus-overlay"></div>').hide().appendTo('body').fadeIn(300);

		},
		function(evt) {
			evt.preventDefault();
			$theWidget = e(this).parents('.widget');

			e(this).find('i.fa-eye').toggleClass('fa-eye-slash');
			$theWidget.find('.btn-remove').removeClass('link-disabled');
			e('body').find('#focus-overlay').fadeOut(function(){
				e(this).remove();
				$theWidget.removeClass('widget-focus-enabled');
			});
		}
	);

	inElement.findIn('.widget', addBack).find('.btn-fullscreen').off('click').on('click',function(evt){
		evt.preventDefault();
		e(this).parents('.widget').widgetFullScreen();
	});

	/*****************************
	/*	WIDGET WITH AJAX ENABLE
	/*****************************/
	inElement.findIn('.widget-header-toolbar .btn-ajax', addBack).off('click').on('click',function(evt){
		evt.preventDefault();
		$theButton = $(this);

		e.ajax({
			url: 'php/widget-ajax.php',
			type: 'POST',
			dataType: 'json',
			cache: false,
			beforeSend: function(){
				$theButton.prop('disabled', true);
				$theButton.find('i').removeClass().addClass('fa fa-spinner fa-spin');
				$theButton.find('span').text('Loading...');
			},
			success: function( data, textStatus, XMLHttpRequest ) {

				setTimeout( function() {
					getResponseAction($theButton, data['msg'])
				}, 1000 );
				/* setTimeout is used for demo purpose only */

			},
			error: function( XMLHttpRequest, textStatus, errorThrown ) {
				console.log("AJAX ERROR: \n" + errorThrown);
			}
		});
	});

	function getResponseAction(theButton, msg){

		inElement.findIn('.widget-ajax .alert', addBack).removeClass('alert-info').addClass('alert-success')
		.find('span').text( msg );

		inElement.findIn('.widget-ajax .alert', addBack).find('i').removeClass().addClass('fa fa-check-circle');

		theButton.prop('disabled', false);
		theButton.find('i').removeClass().addClass('fa fa-floppy-o');
		theButton.find('span').text('Update');
	}

	//*******************************************
	/*	WIDGET QUICK NOTE
	/********************************************/

	if(inElement.findIn('.quick-note-create', addBack).length > 0) {
		inElement.findIn('.quick-note-create', addBack).focusin( function() {
			e(this).find('textarea').attr('rows', 7);
			e(this).find('.title').show();
			e(this).find('.widget-footer').show();
		}).focusout( function() {
			e(this).find('textarea').attr('rows', 1);
			e(this).find('.title').hide();
			e(this).find('.widget-footer').hide();
		});
	}

	if(inElement.findIn('.quick-note-saved', addBack).length > 0) {
		inElement.findIn('.quick-note-saved', addBack).off('click').on('click',function() {
			inElement.findIn('#quick-note-modal', addBack).modal();
		});
	}

	if(inElement.findIn('.quick-note-edit', addBack).length > 0) {
		inElement.findIn('.quick-note-edit .btn-save', addBack).off('click').on('click',function() {
			inElement.findIn('#quick-note-modal', addBack).modal('hide');
		});
	}
	//*******************************************
	/*	WIDGET SLIM SCROLL
	/********************************************/
	if( inElement.findIn('.widget-scrolling', addBack).length > 0) {
		inElement.findIn('.widget-scrolling .widget-content', addBack).slimScroll({
			height: '300px',
			wheelStep: 5,
		});
	}
	if( inElement.findIn('.widget-scrolling2', addBack).length > 0) {
		inElement.findIn('.widget-scrolling2 .widget-content', addBack).css("overflow-x","auto");
	}

	//*******************************************
	/*	WIDGET WITH AJAX STATE
	/********************************************/
	inElement.find("input[data-control=touchspin]").each(function(){
		var opts = {};
		var defaults = {
			min: 0,
			max: 100,
			initval: '',
			step: 1,
			decimals: 0,
			stepinterval: 100,
			forcestepdivisibility: 'round', // none | floor | round | ceil
			stepintervaldelay: 500,
			verticalbuttons: false,
			verticalupclass: 'glyphicon glyphicon-chevron-up',
			verticaldownclass: 'glyphicon glyphicon-chevron-down',
			prefix: '',
			postfix: '',
			prefix_extraclass: '',
			postfix_extraclass: '',
			booster: true,
			boostat: 10,
			maxboostedstep: false,
			mousewheel: true,
			buttondown_class: 'btn btn-spin',
			buttonup_class: 'btn btn-spin',
			buttondown_txt: '-',
			buttonup_txt: '+'
		};

		var opts = $.extend({}, defaults, $(this).data());
		$(this).TouchSpin(opts);
	});

	//*******************************************
	/*	WIDGET WITH AJAX STATE
	/********************************************/

	if(inElement.findIn('#btn-ajax-state', addBack).length > 0) {
		inElement.findIn('#btn-ajax-state', addBack).off('click').on('click',function() {
			$statusPlaceholder = e(this).parents('.widget').find('.process-status');
			ajaxCallToDo($statusPlaceholder);
		});
	}
	/**************************************
	/*	MULTISELECT/SINGLESELECT DROPDOWN
	/**************************************/
	if( e.fn.multiselect && inElement.findIn('.widget-header .multiselect', addBack).length > 0 ) {
		inElement.findIn('.widget-header .multiselect', addBack).multiselect({
			dropRight: true,
			buttonClass: 'btn btn-info btn-sm'
		});
	}

	//*******************************************
	/*	SWITCH INIT
	/********************************************/
	if( inElement.findIn('.bs-switch', addBack).length > 0 ) {
		inElement.findIn('.bs-switch', addBack).bootstrapSwitch();
	}

	var tmp = inElement.find('.widget.field-container.checkbox-container .col-main .items')
	if(tmp.length>0)
	{
		tmp.overlayScrollbars({ });
	}
	if(inElement.find('[data-action=invert-selection]').length > 0) {}
	{
		inElement.find('[data-action=invert-selection]').on('click', function(){
			//console.log('dd');
			$(this).parent().siblings('.col-main').find('input[type=checkbox]').each(function(){
				$(this).prop('checked', !$(this).is(':checked'));
			});
			$(this).siblings('[data-action=mark-all]').trigger('checkAllMarked');
		});
	}

	if(inElement.find('[data-action=mark-all]').length > 0)
	{
		inElement.find('[data-action=mark-all]').on('click', function(){
			var marker = $(this);
			$(this).parent().siblings('.col-main').find('label:visible input[type=checkbox]').each(function(){
				$(this).prop('checked', !marker.data('marked'));
			});
			marker.trigger('checkAllMarked');
		})
		.on('checkAllMarked', function(){
			var checkBoxes = $(this).parent().siblings('.col-main').find('label:visible input[type=checkbox]');
			var checkBoxesChecked = checkBoxes.filter('label:visible :checked');
			if(checkBoxes.length==checkBoxesChecked.length)
				$(this).data('marked', true).html('<i class="fa fa-check"></i>');
			else
				$(this).data('marked', false).html('<i class="fa fa-square-o"></i>');

			$(this).siblings('.markednum').text(checkBoxesChecked.length);
		})
		.trigger('checkAllMarked')
		.parent().siblings('.col-main').find('input[type=checkbox]').on('change', function(){
			$(this).parents('.col-main').siblings('.col-side').find('[data-action=mark-all]').trigger('checkAllMarked');
		});
	}

	if(inElement.find('[data-action=search-items]').length > 0) {
		inElement.find('[data-action=search-items]').on('click', function(event) {
			event.preventDefault();
			var searchbar = $(this).parent().siblings('.col-main').find('.checkbox-searchbar');
			if(searchbar.is(':hidden')) {
				searchbar.slideDown().find('input').focus();
			}else{
				searchbar.find('[data-action=search-checkboxes]').val('');
				searchbar.slideUp().siblings('.items').find('label').addClass('control-inline').show();
			}
		});
	}

	inElement.find('[data-action=search-checkboxes]').on('keyup focus',function(evt){
		if(evt.type=='keyup' && evt.which==27)
		{
			$(this).val('').parent().slideUp().siblings('.items').find('label').addClass('control-inline').show();
			return;
		}
		//
		var q = $(this).val();
		if(q.trim()=='')
		{
			$(this).parent().siblings('.items').find('label').addClass('control-inline').show();
		}else{
			$(this).parent().siblings('.items').find('label').removeClass('control-inline').hide().filter(':contains("'+q.toLowerCase()+'")').addClass('control-inline').show();
		}
	});




	//
	inElement.tooltip({selector: "[data-toggle=tooltip]",container: "body"});

	/*inElement.findIn('form.nemidonam').each(function (){
		
	});*/


	// ajaxify forms
	inElement.findIn('form.xld', addBack).each(function (){
		$currentForm = e(this);
		$load_target = '.container .row .content';
		e('body>.tooltip.in').remove();
		if($currentForm.attr('enctype')=='multipart/form-data')
		{
			$currentForm.ajaxForm({
				beforeSubmit: function(a,f,o) {
					e($load_target).html('لطفا منتظر بمانید ...');
				},
				success: function(data) {
					e($load_target).html('');
					if (typeof data == 'object' && data.nodeType)
						data = elementToString(data.documentElement, true);
					else if (typeof data == 'object')
						data = objToString(data);
					e($load_target).html(data);
					applyDefaultActions(e,$load_target);
					e(document).ready(function(){
						if(window.moduleReady) moduleReady();
						window.moduleReady = null;
					});
					$.fn.WS.run("WebSocketClient.SetClientWidgets","")
				}
			});
		}else{
			$currentForm.ajaxify({
				event:'submit',
				forms:$currentForm,
				method:'post',
				target:$load_target,
				params:'ajax=true&data[name]=ali',
				title:document.title,
				nprogress:{showSpinner:true,parent:'.bottom .container'},
				loading_type:'nprogress',
				onStart:function(op){
					e(op.target).parent().block({message:'Please wait ... ',overlayCSS:{backgroundColor:'#f5f5f5'}});
				},
				onError:function(op,msg){
					e(op.target).parent().unblock();
					//applyDefaultActions(e,op.target);
					window.moduleReady = null;
					$.gritter.add({title: 'خطا در انجام درخواست',text: msg.responseText});
				},
				onSuccess:function(op){
					e(op.target).parent().unblock();
					applyDefaultActions(e,op.target);
					e(document).ready(function(){
						if(window.moduleReady) moduleReady();
						window.moduleReady = null;
					});
					$.fn.WS.run("WebSocketClient.SetClientWidgets","")
				}
			});
		}
	});
	inElement.findIn('.disabled a,a.disabled,[disabled] a,a[disabled]', addBack).each(function (){
		e(this).off('click').on('click',function(evt){evt.preventDefault();});
	});
	// ajaxify links
	inElement.findIn('a.xld,.xld:not(a,form,button,[disabled],.disabled) a:not(.normal),.main-menu a:not(.normal)', addBack).each(function (){
		if(e(this).is('[disabled]'))
		{
			e(this).off('click').on('click',function(evt){
				evt.preventDefault();
				return false;
			});
			return;
		}

		if(e(this).hasClass('frame'))
		{
			e(this).off('click').on('click',function(evt){
				evt.preventDefault();
				var url = e(this).attr('href');
				var host = '';
				var cw = e('.container .row .content-wrapper');
				cw.block({message:'Please Wait...'});
				var frame = e('<iframe src="about:blank" width="100%" id="pcciframe"></iframe>');
				(e('.left-sidebar.minified').length>0) ? frame.addClass('minified-sidebar') : frame.removeClass('minified-sidebar');
				frame.attr('src', url);
				e('body>.tooltip.in').remove();
				cw.find('.content').html(frame);
				cw.addClass('hasFrameBrowser');
				fixWrapperIfram();
				evt.preventDefault();
			});
			return;
		}

		e(this).off('click').ajaxify({
			event:'click',
			method:'get',
			target:'.container .row .content',
			params:'ajax=true',
			title:document.title,
			nprogress:{showSpinner:true,parent:'.bottom .container'},
			loading_type:'nprogress',
			//loadHash: (e(this).is('[hash]')) ? 'attr:rel':false,
			onStart:function(op){
				e('body>.tooltip.in').remove();
				if(e( "#pcciframe" ))
					e( "#pcciframe" ).off('load').remove();
				e('.container .row .content-wrapper').removeClass('hasFrameBrowser');
				window.scrollTo(0,0);
				e(op.target).parent().block({message:'Please wait ... ',overlayCSS:{backgroundColor:'#f5f5f5'}});
			},
			onError:function(op,msg){
				e(op.target).parent().unblock();
				//applyDefaultActions(e,op.target);
				window.moduleReady = null;
				$.gritter.add({title: 'خطا در انجام درخواست',text: msg.responseText});
			},
			onComplete:function(op){
				return;
				//history.pushState({link:op.link,target:op.target,dataType:op.dataType,params:op.paramres},op.title,op.link);
				//
				//applyDefaultActions(e,op.target);
				//e(op.target).parent().unblock();
				/*if(window.moduleReady)
				{
					moduleReady();
					window.moduleReady = null;
				}*/
			},
			onSuccess:function(op){
				var cw = $('.container .row .content-wrapper');
				//var cw = e(op.target);
				if( typeof OverlayScrollbars(cw)=='undefined'){
					cw.overlayScrollbars({ });
				}
				e('.xmodal').modal('hide');
				e('.xmodal .modal-title').html('');
				if(op.object.data('menu-collapsed')==true)
				{
					collapseSideBar(true,true);
				}else if(!window.localStorage.getItem('sidebar-minified')){
					expandSideBar(true,true);
				}
				e(document).ready(function(){
					if(window.moduleReady) moduleReady();
					window.moduleReady = null;
				});

				history.pushState({link:op.link,target:op.target,dataType:op.dataType,params:op.paramres},op.title,op.link);
				//
				applyDefaultActions(e,op.target);
				//if(window.moduleReady) moduleReady();
				//window.moduleReady = null;
				e(op.target).parent().unblock();
				e.fn.WS.run("WebSocketClient.SetClientWidgets","");
			}
		});
	});

	inElement.findIn('[data-toggle=xmodal]', addBack).off('click').on('click',function(event){
		event.preventDefault();
		invoker = $(this);
		//openXmodal(false,title,invoker);
		invoker.openXmodal(false,invoker.text());
	});


	inElement.findIn('.slideInSidePanelToggle', addBack).clickToggle(
		function(){
			var prop = ($('body').css('direction')=='rtl') ? {left: '+=300'} : {right: '+=300'};
			inElement.findIn('.slideInSidePanel', addBack).animate(prop, 300).addClass('in');
			localStorage.setItem('pcc.slideInSidePanelOpened',true);
		}, 
		function(){
			var prop = ($('body').css('direction')=='rtl') ? {left: '-=300'} : {right: '-=300'};
			inElement.findIn('.slideInSidePanel', addBack).animate(prop, 300).removeClass('in');
			localStorage.setItem('pcc.slideInSidePanelOpened',false);
		},
		function(){
			if(localStorage.getItem('pcc.slideInSidePanelOpened')=="true")
			{
				var prop = ($('body').css('direction')=='rtl') ? {left: '0'} : {right: '0'};
				inElement.findIn('.slideInSidePanel', addBack).css(prop).addClass('in');
				return true;
			}
			return false;
		}
	);
	inElement.findIn('[data-toggle=xld-modal]', addBack).off('click').on('click',function(event){
		event.preventDefault();
		$invoker = $(this);
		e(document).ajaxify({
			event:false,
			link:$invoker.attr('href'),
			method:'get',
			target: e('.modal-body'),
			params:'ajax=true',
			title:document.title,
			nprogress:{showSpinner:true,parent:'.bottom .container'},
			loading_type:'nprogress',
			onStart:function(op){
				e(op.target).block({message:'Please wait ... ',overlayCSS:{backgroundColor:'#f5f5f5'}})
				window.scrollTo(0,0);
			},
			onError:function(op){
				e(op.target).unblock();
				window.moduleReady = null;
			},
			onSuccess:function(op,data){
				applyDefaultActions(e,op.target);
				if(window.xldModalReady) xldModalReady(op,data,$invoker);
				e('.xld-modal').modal({keyboard: false,backdrop:'static'});
				e('.xld-modal .modal-title').html($invoker.html())
				e(op.target).unblock();
			}
		});
	});
	$('#ws-indicator+ul.dropdown-menu').on('click', function(event){
		event.stopPropagation();
	});
	setTimeout(function(){
		inElement.findIn('[data-widgetsHolder]', addBack).AutoLoadWidgets();
	});
}
//
function goTo(linkUrl,options)
{
	console.log(options);
	console.log("teeeeeeeeeest options");
	var defaults = {dataType:'html',params:"ajax=true",pushState:true,method:'get'}
	options = jQuery.extend(defaults, options);
	if(typeof options.target=="undefined" || $(options.target).length==0)
		options.target='.container .row .content';
	$('body>.tooltip.in').remove();

	//
	$(document).ajaxify({
		event:false,
		link:linkUrl,
		method:options.method,
		target: options.target,
		params:options.params,
		title:document.title,
		nprogress:{showSpinner:true,parent:'.bottom .container'},
		loading_type:'nprogress',
		onStart:function(op){
			$(op.target).block({message:'Please wait ... ',overlayCSS:{backgroundColor:'#f5f5f5'}})
			window.scrollTo(0,0);
			if(typeof options.onStart === 'function')
				options.onStart.apply(this);
		},
		onError:function(op){
			$(op.target).unblock();
			window.moduleReady = null;
			if(typeof options.onError === 'function')
				options.onError.apply(this);
		},
		onComplete:function(op){
			if(options.pushState===true)
				history.pushState({link:op.link,target:op.target.selector,dataType:op.dataType,params:op.paramres},op.title,op.link);

			applyDefaultActions($,op.target);
			if(typeof options.onComplete === 'function')
				options.onComplete.apply(this,op);
			$(op.target).unblock();
		},
		onSuccess:function(op){
			if(typeof options.onSuccess === 'function')
				options.onSuccess.apply(this,op);
		}
	});
	return;
}
//
function goToSub(url,title)
{
	if(!module || module.find('.subview-holder').length == 0)
		return;
	$('body>.tooltip.in').remove();
	$(document).ajaxify({
		event:false,
		link:url,
		method:'get',
		target:module.find('.subview-holder'),
		params:'ajax=true',
		title:(typeof title === 'undefined') ? document.title : title,
		nprogress:{showSpinner:true,parent:'.bottom .container'},
		loading_type:'nprogress',
		//loadHash: ($(this).is('[hash]')) ? 'attr:rel':false,
		onStart:function(op){
			window.scrollTo(0,0);
			$(op.target).block({message:'Please wait ... ',overlayCSS:{backgroundColor:'#f5f5f5'}});
		},
		onError:function(op){
			$(op.target).unblock();
			applyDefaultActions($,op.target);
		},
		onComplete:function(op){
			newLink = window.location.origin + window.location.pathname + '#!' + op.link.replace(ROOT_PATH,'');
			history.pushState({link:op.link,target:op.target.selector,dataType:op.dataType,params:op.paramres},op.title,newLink);
			applyDefaultActions($,op.target);
			$(op.target).unblock();
		}
	});
}
//
function collapseSideBar(transition,dontSaveState) {
	if(typeof transition!='undefined' && transition==false)
		$('.left-sidebar').addClass('no-transition');
	var scrollInstance = OverlayScrollbars($('.left-sidebar'));
	if(typeof $.fn.overlayScrollbars=='function' && typeof scrollInstance!='undefined' && scrollInstance.options("className")!=null)
	{
		var scrollInstance = OverlayScrollbars($('.left-sidebar'));
		scrollInstance.options({ className : null });
	}

	$('.left-sidebar').addClass('minified');
	$('.content-wrapper').addClass('expanded');
	$('.left-sidebar .sub-menu').css('display', 'none').css('overflow', 'hidden');
	//$('.main-menu > li > a > .text').animate({opacity:0}, 200);
	$('.sidebar-minified>i').removeClass('fa-angle-right').addClass('fa-angle-left');
	$('.left-sidebar').removeClass('no-transition');
	if($('#pcciframe').length>0)
	{
		$('#pcciframe').addClass('minified-sidebar');
	}
	dontSaveState || window.localStorage.setItem('sidebar-minified','true');
}
function expandSideBar(noTransition,dontSaveState) {
	if(typeof transition!='undefined' && transition==false)
		$('.left-sidebar').addClass('no-transition');
	if(typeof $.fn.overlayScrollbars=='function' && typeof OverlayScrollbars($('.left-sidebar'))=='undefined')
	{
		var scrollInstance = OverlayScrollbars($('.left-sidebar'));
		scrollInstance.options({ className : 'os-theme-dark' });
	}


	$('.left-sidebar').removeClass('minified');
	$('.content-wrapper').removeClass('expanded');
	//$('.main-menu > li > a > .text').animate({opacity:1}, 600);
	$('.sidebar-minified>i').removeClass('fa-angle-left').addClass('fa-angle-right');
	$('.left-sidebar').removeClass('no-transition');
	if($('#pcciframe').length>0)
	{
		$('#pcciframe').removeClass('minified-sidebar');
	}
	dontSaveState || window.localStorage.removeItem('sidebar-minified');
}
//
__loadedAssets = {'css':[],'js':[]};
$(document).ready(function(){
	/************************
	/*	PARSE SOURCE TAGS
	/************************/
	//$(document).block({message:'Please wait ... '});
	/*$.blockUI({
		baseZ:1090,
		overlayCSS:  {
			backgroundColor:	'#fff',
			opacity:			1,
			cursor:				'wait'
		},
	});*/
	//return;
	//console.log('starrrrt');
	loadAssetSources($(document));// must run first
	window.setTimeout(function(){
		/************************
		/*	Default Acctions for elements
		/************************/
		applyDefaultActions($,$(document));
		$.unblockUI({fadeOut:1000});//hide preloading
	},1200);
	//
	$.ajax({
		url: ROOT_PATH+'/admin/widget/getList/'+Math.random()+'r',
		type: 'POST',
		dataType: 'json',
		cache: false,
		success: function( data, textStatus, XMLHttpRequest ) {$.fn.pccWidgets=data;},
		error: function( XMLHttpRequest, textStatus, errorThrown ) {
			console.error('Widgets: GetList Failed');
			$.fn.pccWidgets = [];
		}
	});
	//ringInit();

	/**/
	window.fixWrapperIfram = function()
	{
		var cw = $('.container .row .content-wrapper');
		var cwiframe = cw.find('iframe');
		var scrollInstance = OverlayScrollbars(cw);
		if(typeof scrollInstance=='undefined') return;
		if(cwiframe.length>0 && scrollInstance.options("className")!=null)
		{
			scrollInstance.options({ className : null });
		}
		cwiframe.on('load',function(){
			//var h = $(this).contents().height();
			//$(this).height(h);
			/*$.getScript( "/pcc/plugins/custom-scrollbar/jquery.mCustomScrollbar.concat.min.js", function(){
				var iframe = cwiframe.contents();
				$('<link/>', {
					rel: 'stylesheet',
					type: 'text/css',
					href: '/pcc/plugins/custom-scrollbar/jquery.mCustomScrollbar.min.css'
				}).appendTo(iframe.find('head'));
				//
				if(typeof $.fn.mCustomScrollbar=='function')
				{
					iframe.find('body').mCustomScrollbar({theme:"minimal-dark", scrollInertia:300});
				}
			});*/
			cw.unblock();
		});
		return;

		cw.on("mouseenter",function(){ //cross-domain iframe mousewheel hack
			$(this).find("iframe").css("pointer-events","none");
		}).on("mouseup",function(){
			if(!$(this).find(".mCSB_scrollTools_onDrag").length) return;
			setTimeout(function(){ cw.trigger("mouseenter"); },1);
		});
		$(window).on("blur",function(){
			cw.find('iframe').css("pointer-events","auto");
		}).on("focus",function(){
			cw.trigger("mouseenter");
		});
	}
	/**/
	$.blockUI.customize = {
			overlayCSS:{
				backgroundColor:'#f5f5f5'
			},
			css:{
				color: '#31708f',
				backgroundColor: '#d9edf7',
				border: '#bce8f1 1px solid',
				padding: '10px'
			}
		};

	$.blockUI.defaults.css = $.extend({}, $.blockUI.defaults.css, $.blockUI.customize.css);
	$.blockUI.defaults.overlayCSS = $.extend({}, $.blockUI.defaults.overlayCSS, $.blockUI.customize.overlayCSS);
	/**/
	$('.xmodal').on('hide.bs.modal',function(event){
		$(this).find('.modal-body').html('');
	});

	if(window.location.hash.substr(0,9)=='#!xmodal:')
	{
		openXmodal(window.location.hash.substr(9));
	}

	$(window).on('hashchange', function() {
		if(window.location.hash.substr(0,2)=='#!')
			goToSub(window.location.hash.substr(2));
	});

	$('.xld-modal').on('hide.bs.modal',function(event){
		$(this).find('.modal-body').html('');
	});
	$('#quick-search input:first')
		.on('close-search',function(){
				$(this).data('blockable',null)
				$('html').css('overflow','auto')
				$('.top-bar .dropdown-toggle').removeClass('disabled');
				$(this).siblings().find('button').removeClass('.close-quick-search').attr('disabled','disabled').find('i').removeClass('fa-times').addClass('fa-search');
				$.unblockUI();
				$(this).blur();
				return true;			
		})
		.on('focus',function(){
			if($('.blockUI').length>0)
				return true;
			$(this).data('blockable',0)
			$('html').css('overflow','hidden');
			$('.top-bar .dropdown-toggle').addClass('disabled');
			$(this).siblings().find('button').addClass('.close-quick-search').removeAttr('disabled').find('i').removeClass('fa-search').addClass('fa-times');
			$.blockUI({message:'<h3 class="quick-search-panel-header">'+_('Type something to search for it.')+'</h3>',
				ignoreIfBlocked:true,
				blockMsgClass: 'blockMsg quick-search-panel',
				css:{},
				overlayCSS:{backgroundColor:'#ccc',opacity:.95,borderTop:'2px solid #717171'},
			});
		})
		.on('keyup focus closesearch',function(evt){
			if(evt.type=='keyup' && evt.which==27)
			{
				$(this).trigger('close-search');
			}
			//
			var q = $(this).val();
			if(q.trim()=='')
			{
				$('.blockUI.blockMsg.blockPage').html('<h3 class="quick-search-panel-header">'+_('Type something to search for it.')+'</h3>');
				return;
			}
			$('.blockUI.blockMsg.blockPage').html('<h3 class="quick-search-panel-header">'+_('Searching for: ')+q+'</h3><div class="quick-search-results xld"></div>');
			//var r = $('.main-nav ul li a:contains("'+q+'")');
			var r = $('.main-nav ul li a:contains("'+q.toUpperCase()+'"), .main-nav ul li a:contains("'+q.toLowerCase()+'")');
			r.each(function() {
				var el=$(this)
				var link = el.clone().appendTo('.blockUI.blockMsg.blockPage .quick-search-results');
				if(link.find('i:first-child').length==0)
					$('<i class="fa fa-square-o"></i>').prependTo(link);
				link.on('click',function(evt) {
					evt.preventDefault();;
					if($(this).not('.js-sub-menu-toggle'))
					{
						$('#quick-search input:first').trigger('close-search');
						el.trigger('click');
					}
				});
			});
			//applyDefaultActions($,$('.blockUI.blockMsg.blockPage .quick-search-results'));
		})
		.siblings().find('button').on('click',function(){
			if($(this).hasClass('.close-quick-search'))
			{
				$('#quick-search input:first').trigger('close-search');
			}
		});
	$('#quick-search button:first').click(function(evt){
		/*evt.preventDefault();
		$('#quick-search input:first').focus();
		return false;*/
	});
	//
	$('#ccpbx-reload-indicator').on('click', function(e){
		e.preventDefault();
		$('.wrapper .bottom').addClass('stop-scrolling');
		var msg = $('#ccpbx-reload-popup-template').html()
		$.blockUI({message:msg,draggable:true,blockMsgClass:'blockMsg ccpbx-reload-popup',overlayCSS:{backgroundColor:'rgba(109, 109, 109, 0.7)',zIndex:'1050'},css:{zIndex:1051,color:'#fff',backgroundColor:'#343434',borderColor:'#ccc',borderWidth:'2px',top:'20%',borderRadius:'6px',cursor:'default',boxShadow:'rgba(50, 68, 76, .5) 0px 2px 10px 1.74px'},
			onBlock:function(){
				applyDefaultActions($,$('.blockUI.blockMsg'));
				$('.blockUI.blockMsg #reloading-confirm .btn-confirm').focus();
				$('.blockUI.blockMsg #reloading-confirm .btn-confirm, .blockUI.blockMsg #reloading-response .btn-retry').on('click', function(e){
					e.preventDefault();
					setTimeout(function(){
						$.ajax({
							type: 'POST',
							url: '/admin/config.php',
							data: 'handler=reload',
							dataType: 'json',
							beforeSend: function(){
								// display wait message
								$('.blockUI.blockMsg #reloading-confirm, .blockUI.blockMsg #reloading-response').slideUp(0, function() {
									$('.blockUI.blockMsg #reloading-response .alert *').remove();
									$('.blockUI.blockMsg #reloading-wait').slideDown(100);
								});
							},
							success: function(data) {
								if (data.status) {
									// successful reload
									$.unblockUI();
									$.gritter.add({title: $('#ccpbx-reload-popup-template #locale-reload-success').html(), text: $('#ccpbx-reload-popup-template #locale-reload-success-desc').html(), class_name:'gritter-success'});
								} else {
									// there was a problem
									var responsetext = '<h4>' + data.message + '</h4>' + '<div class="moreinfo">';
									responsetext += '<p><pre>' + data.retrieve_conf + "</pre></p>";
									if (data.num_errors) {
										responsetext += '<p>' + data.num_errors + $('#ccpbx-reload-popup-template #locale-errors-occured').html() + "</p>";
									}
									responsetext += '</div>';
									$('.blockUI.blockMsg #reloading-response .alert').prepend($(responsetext));
									$('.blockUI.blockMsg #reloading-wait').slideUp(150, function() {
										$('.blockUI.blockMsg #reloading-response').slideDown(150);
										$('.blockUI.blockMsg #reloading-response .btn-close')[0].focus();
									});
								}
							},
							error: function(reqObj, status) {
								$('.blockUI.blockMsg #reloading-response .alert').prepend(
									$('<p>' + $('#ccpbx-reload-popup-template #locale-invalid-response').html() + '</p>')
								);
								$('.blockUI.blockMsg #reloading-wait').slideUp(150, function() {
									$('.blockUI.blockMsg #reloading-response').slideDown(150);
									$('.blockUI.blockMsg #reloading-response .btn-close')[0].focus();
								});
							}
						});
					},10);
				});
				$('.blockUI.blockMsg #reloading-confirm .btn-cancel,.blockUI.blockMsg #reloading-response .btn-close').on('click', function(e) {
					e.preventDefault();
					$('.blockUI.blockMsg #reloading-response .alert *').remove();
					$.unblockUI();
				});
			}
		})
	})

	if(typeof $.fn.overlayScrollbars=='function')
	{
		if(typeof OverlayScrollbars($('.left-sidebar')) == 'undefined')
		{
			$('.left-sidebar').overlayScrollbars({ });
		}
		/**/
		if($('.container .row .content-wrapper iframe.pcciframe').length==0)
		{
			$('.container .row .content-wrapper').overlayScrollbars({ });
		}
		//fixWrapperIfram();
	}

	/************************
	/*	WINDOW POPSTATE -- handle window history with ajaxify
	/************************/
	window.onpopstate = function(evt) {
		evt.preventDefault();
		if(typeof evt.state != 'object' || evt.state===null)
		{
			return;
		}
		if(typeof evt.state.target=="string")
		{
			var params_=evt.state.params;
			target_ = evt.state.target;
			goTo(evt.state.link,{dataType:evt.state.dataType,params:params_,target:target_,pushState:false});
		}else{
			console.log('something is wronge with pop-state');
			return false;
		}
	};
	//
	history.replaceState({link:window.location.pathname,target:'.container .row #content'},document.title,window.location.href);

	/************************
	/*	WINDOW RESIZE
	/************************/
	$(window).bind("resize", resizeResponse);

	function resizeResponse() {

		if( $(window).width() < (992-15)) {
			if( $('.left-sidebar').hasClass('minified') ) {
				$('.left-sidebar').removeClass('minified');
				$('.left-sidebar').addClass('init-minified');
			}

		}else {
			if( $('.left-sidebar').hasClass('init-minified') ) {
				$('.left-sidebar')
				.removeClass('init-minified')
				.addClass('minified');
			}
		}
		//
		//
		if($('body.widget-fullscreen-active') || $('body.widget-fullscreen-active').length)
		{
			$('.widget.widget-fullscreen').each(function(){
				contentH = $(this).height() - $(this).children('.widget-header').find('.widget-header-toolbar').height() - 40;
				$(this).children('.widget-content').css('overflow-y','auto').height(contentH);
			});
		}

	}

	/************************
	/*	TOP BAR
	/************************/

	if( $('.top-general-alert').length > 0 ) {

		if(localStorage.getItem('general-alert') == null) {
			$('.top-general-alert').delay(800).slideDown('medium');
			$('.top-general-alert .close').off('click').on('click',function() {
				$(this).parent().slideUp('fast');
				localStorage.setItem('general-alert', 'closed');
			});
		}
	}

	$btnGlobalvol = $('.btn-global-volume');
	$theIcon = $btnGlobalvol.find('i');

	// check global volume setting for each loaded page
	checkGlobalVolume($theIcon, localStorage.getItem('global-volume'));

	$btnGlobalvol.off('click').on('click',function() {
			var currentVolSetting = localStorage.getItem('global-volume');
			// default volume: 1 (on)
			if(currentVolSetting == null || currentVolSetting == "1") {
				localStorage.setItem('global-volume', 0);
			} else {
				localStorage.setItem('global-volume', 1);
			}

			checkGlobalVolume($theIcon, localStorage.getItem('global-volume'));
		}
	);

	function checkGlobalVolume(iconElement, vSetting) {
		if(vSetting == null || vSetting == "1") {
			iconElement.removeClass('fa-volume-off').addClass('fa-volume-up');
		} else {
			iconElement.removeClass('fa-volume-up').addClass('fa-volume-off');
		}
	}
	/*moduleReady*/
	if(window.moduleReady) moduleReady();
	window.moduleReady = null;

	/*ws*/
	var wsCloseBtn = $('#ws-indicator+ul.dropdown-menu [data-action=ws-close]');
	wsCloseBtn.on('click', function(event) {
		event.preventDefault();
		if(pccws.readyState)
			pccws.close();
	});
	if($('body').data('ws-enabled')==true)
		ws_connect();

});
// toggle function
$.fn.clickToggle = function( f1, f2, initialFn ) {
	if($(this).length<1) return false;
	return $(this).each( function() {
		//var clicked = false;
		var clicked = ($(this).data('clicked')==true) ? true : false;
		if(typeof initialFn=='function')
		{
			$(this).data('clicked', initialFn.apply(this, arguments));
		}
		$(this).off('click').on('click', function() {

			if($(this).data('clicked')) {
				$(this).data('clicked', false);
				return f2.apply(this, arguments);
			}
			$(this).data('clicked', true);
			return f1.apply(this, arguments);
		});
	});

}
$.fn.widgetFullScreen = function()
{
	$theWidget = $(this);
	if(!$('body.widget-fullscreen-active') || $('body.widget-fullscreen-active').length==0)
	{
		$theWidget.children('.widget-header').find('i.fa-expand').toggleClass('fa-compress').parents('a').attr('title','Exit Full Screen');
		// if not active add fullscreen classes and disable panel sorting
		$('body').addClass('widget-fullscreen-active');
		$theWidget.addClass('widget-fullscreen');

		contentH = $theWidget.height() - $theWidget.children('.widget-header').find('.widget-header-toolbar').height() - 40;
		$theWidget.children('.widget-content').css('overflow-y','auto').height(contentH);

		$('<div id="focus-overlay"></div>').hide().appendTo('body').fadeIn(300);
		// Trigger a global window resize to resize any plugins
		// the fullscreened content might contain.
		setTimeout(function() {$(window).trigger('resize');}, 800);
	}else{
		$theWidget.children('.widget-header').find('i.fa-expand').toggleClass('fa-compress').parents('a').attr('title','Full Screen');
		// If fullscreen mode is active, remove class and enable panel sorting
		$('body').removeClass('widget-fullscreen-active');
		$theWidget.removeClass('widget-fullscreen');
		$theWidget.children('.widget-content').css('overflow-y','').height('');
		$('body').find('#focus-overlay').fadeOut(function(){
			$(this).remove();
			$theWidget.removeClass('widget-focus-enabled');
		});
		// Trigger a global window resize to resize any plugins
		// the fullscreened content might contain.
		setTimeout(function() {$(window).trigger('resize');}, 100);
	}
}

$.fn.AutoLoadWidgets = function(params,dataType)
{
	wuid = 0;
	$(this).each(function(){
		var placeholder = $(this);
		var cat = placeholder.data('cat') || false;
		var type = placeholder.data('type') || false;
		if(!cat || !type || typeof $.fn.pccWidgets=='undefined') return false;
		var useCats = cat.split(',');
		var useTypes = type.split(',');

		placeholder.html('');
		$.each($.fn.pccWidgets, function(cat, catWidgetTypes){
			if($.inArray(cat, useCats)==-1) return;
			$.each(catWidgetTypes, function(widgetType, widgetList){
				if($.inArray(widgetType, useTypes)==-1) return;
				$.each(widgetList, function(index, widget){
					placeholder.loadWidget(cat, widgetType, widget.plugin, widget.widget, widget.params,widget.dataType, wuid);						
					wuid ++;
				});
			});
		});
	});
}

$.fn.loadWidget = function(cat, type, plugin, widget, params,dataType, wuid)
{
	var placeholder = $(this);
	var cat = placeholder.data('cat');
	var type = placeholder.data('type');
	var content = '';
	var dataType = (typeof dataType=='undefined') ? 'html' : dataType;
	var wuid = (typeof wuid=='undefined') ? 9999 : wuid;
	setTimeout(function(){
		var ddd = Date.now()
		$.ajax({
			url: ROOT_PATH+'/admin/widget/getContent/'+Math.random()+'r',
			type: 'POST',
			data:{'cat':cat, 'type':type, 'plugin':plugin, 'widget':widget, 'params':params},
			dataType: 'json',
			cache: false,
			beforeSend: function(){
				$('<div class="tmp-widget-'+wuid+' pull-left"></div>').html('loading').appendTo(placeholder);return true;
			},
			success: function( data, textStatus, XMLHttpRequest ) {
				setTimeout(function(){
					_content = $(data.content);
					applyDefaultActions($,_content.parent());
					placeholder.find('div.tmp-widget-'+wuid).replaceWith(_content);

					var deferredObjects = [];

					if(typeof data.scripts=='object')
					{
						$(data.scripts).each(function(i,jsLibPath) {
							deferredObjects.push($.getScript(jsLibPath));
						});
					}else{
						deferredObjects.push($.Deferred(function( deferred ){
							$( deferred.resolve );
						}));
					}
					var promise = $.when.apply(this,deferredObjects);
					promise.done(function(){
						if(typeof data.callback=='string')
						{
							$.Deferred(function( deferred ){
								data.callbackFn = eval("("+data.callback+")");
								data.callbackFn();
							});
						}
						$.fn.WS.run("WebSocketClient.SetClientWidgets","");
					});
					promise.fail(function(){
						pcc.log('widget/getContent failed');
					});
				});
			},
			error: function( XMLHttpRequest, textStatus, errorThrown ) {
				placeholder.find('div.tmp-widget-'+wuid).html('Error!');
				console.error("Widgets: GetContent Failed!\n"+this.data);
			}
		});
	},1);
	return true;
}

$.fn.addWidgetBox = function(icon, title, content, attrs, ws, toolbarIcons, toolbarProgress)
{
	if($(this).length<1) return false;
	//
	var icon = (typeof attrs==='undefined') ? '' : icon;
	var title = (title==false || $.isArray(title)) ? title : [title];
	var attrs = (typeof attrs==='undefined') ? {} : attrs;
	attrs.class = (typeof attrs.class==='undefined') ? 'widget' : 'widget '+attrs.class;
	attrs.content = (typeof attrs.content==='undefined') ? {} : attrs.content;
	attrs.content.class = (typeof attrs.content.class==='undefined') ? 'widget-content' : 'widget-content '+attrs.content.class;
	var ws = (typeof ws==='undefined') ? '' : ws;
	var toolbarIcons = (typeof toolbarIcons==='undefined') ? false : toolbarIcons;
	var toolbarProgress = (typeof toolbarProgress==='undefined') ? false : toolbarProgress;
	//
	var attrString = "";
	//
	var widget = '<div>';
	widget += '<div class="widget-header"><h3>';
	if(icon!='')
		widget += '<i class="'+icon+'"></i> ';
	widget += title[0]+'</h3> ';
	if(title.length>1 && title[1]!='')
		widget += ' <em>- '+title[1]+'</em>';
	if(title.length>2 && title[2]!='')
		widget += title[2];
	if(toolbarIcons!==false && $.isArray(toolbarIcons))
	{
		widget += '<div class="btn-group widget-header-toolbar">';
		if($.inArray('focus',toolbarIcons)>-1)  widget += '<a href="#" title="Focus" class="btn-borderless btn-focus"><i class="fa fa-eye"></i></a>';
		if($.inArray('toggle',toolbarIcons)>-1) widget += '<a href="#" title="Expand/Collapse" class="btn-borderless btn-toggle-expand"><i class="fa fa-chevron-up"></i></a>';
		if($.inArray('remove',toolbarIcons)>-1) widget += '<a href="#" title="Remove" class="btn-borderless btn-remove"><i class="fa fa-times"></i></a>';
		if($.inArray('fullscreen',toolbarIcons)>-1) widget += '<a href="#" title="Full Screen" class="btn-borderless btn-fullscreen"><i class="fa fa-expand"></i></a>';
		toolbarIcons = toolbarIcons.filter(function(icon){
			var toRemove=['focus','toggle','remove','fullscreen'];
			return !toRemove.includes(icon);
		});
		widget += toolbarIcons.join('');
		widget += '</div>';
	}
	widget += '</div>';
	widget += '<div class="'+attrs.content.class+'">'+content+'</div>';
	widget += '</div>';
	widget = $(widget);
	if(widget.length==0) return false;
	for (attr in attrs){
		if(attr=='content') continue;
		widget.attr(attr, attrs[attr]);
		if(attr.substr(0,5)=='data-')
			widget.data(attr.substr(0,5), attrs[attr]);
	}
	applyDefaultActions($, widget, true);
	$(this).each( function() {
		$(this).append(widget)
	});
}

$.fn.addMiniCell = function(sideContent, mainHeader, mainContent, attrs, ws)
{
	if($(this).length<1) return false;
	//
	var icon = (typeof attrs==='undefined') ? '' : icon;
	var mainHeader = (mainHeader==false || $.isArray(mainHeader)) ? mainHeader : [mainHeader];
	var attrs = (typeof attrs==='undefined') ? {} : attrs;
	attrs.class = (typeof attrs.class==='undefined') ? 'panel minicell' : 'panel minicell '+attrs.class;
	var ws = (typeof ws==='undefined') ? '' : ws;
	var toolbarIcons = (typeof toolbarIcons==='undefined') ? false : toolbarIcons;
	var toolbarProgress = (typeof toolbarProgress==='undefined') ? false : toolbarProgress;
	//
	var attrString = "";
	//
	var widget = '';
	widget += '<div class="panel minicell">';
	widget += '<div class="row row-table">';
	widget += '<div class="col col-side text-center pv-lg">'+sideContent+'</div>';
	widget += '<div class="col col-main pv-lg">';
	widget += '<div class="h5 no-margin">'+mainHeader+'</div>';
	widget += mainContent;
	widget += '</div>';
	widget += '</div>';
	widget += '</div>';
	//
	widget = $(widget);
	if(widget.length==0) return false;
	for (attr in attrs){
		widget.attr(attr, attrs[attr]);
		if(attr.substr(0,5)=='data-')
			widget.data(attr.substr(0,5), attrs[attr]);
	}
	applyDefaultActions($, widget, true);
	$(this).each( function() {
		$(this).append(widget)
	});
}

MiniCell = function(){
	this.html = '';
	this.add = function(sideContent, mainHeader, mainContent, attrs, ws){
		var icon = (typeof attrs==='undefined') ? '' : icon;
		var mainHeader = (mainHeader==false || $.isArray(mainHeader)) ? mainHeader : [mainHeader];
		var attrs = (typeof attrs==='undefined') ? {} : attrs;
		attrs.class = (typeof attrs.class==='undefined') ? 'panel minicell' : 'panel minicell '+attrs.class;
		var ws = (typeof ws==='undefined') ? '' : ws;
		var toolbarIcons = (typeof toolbarIcons==='undefined') ? false : toolbarIcons;
		var toolbarProgress = (typeof toolbarProgress==='undefined') ? false : toolbarProgress;
		var attrString = attrs;
		Object.keys(attrString).map(function(attrKey,attrValue){attrString[attrKey]=attrKey+'='+'"'+attrString[attrKey]+'"'});
		attrString = Object.keys(attrString).map(function(attrKey){return attrString[attrKey]}).join(" ");
		//
		var widget = '';
		widget += '<div '+attrString+'>';
		widget += '<div class="row row-table">';
		widget += '<div class="col col-side text-center pv-lg">'+sideContent+'</div>';
		widget += '<div class="col col-main pv-lg">';
		widget += '<div class="h5 no-margin">'+mainHeader+'</div>';
		widget += mainContent;
		widget += '</div>';
		widget += '</div>';
		widget += '</div>';
		this.html += widget;
	};
	this.generateInto = function(container){
		if(typeof container=='object' && container.length==0) return false;
		var content = $(this.html)
		applyDefaultActions($, content, true);
		content.appendTo(container);
		this.clear();
		return true;
	};
	this.clear = function(){this.html='';}
};

$.fn.openXmodal = function(_url,title)//
{
	$invoker = $(this);
	e = $;
	e(document).ajaxify({
		event:false,
		link:($invoker!=document && _url!=false) ? _url : $invoker.attr('href'),
		method:'get',
		target: e('.modal-body'),
		params:'ajax=true',
		title:document.title,
		nprogress:{showSpinner:true,parent:'.bottom .container'},
		loading_type:'nprogress',
		onStart:function(op){
			e(op.target).block({message:'Please wait ... ',overlayCSS:{backgroundColor:'#f5f5f5'}})
			window.scrollTo(0,0);
		},
		onError:function(op){
			e(op.target).unblock();
			window.moduleReady = null;
		},
		onSuccess:function(op,data){
			applyDefaultActions(e,op.target);
			if(window.xldModalReady) xldModalReady(op,data,$invoker);
			e('.xmodal').modal({keyboard: false,backdrop:'static'});
			if($invoker!=document){
				e('.xmodal .modal-title').html($invoker.data('title')?$invoker.data('title'):$invoker.html())
			}else{
				e('.xmodal .modal-title').html();
			}
			xmodalurl = window.location.origin+window.location.pathname;
			xmodalurl += (window.location.search) ? window.location.search+"&" : "?";
			xmodalurl += "xmodal="+op.link+window.location.hash;
			history.pushState({link:xmodalurl,target:'.container .row .content',dataType:op.dataType,params:op.paramres},op.title,xmodalurl);
			e(op.target).unblock();
		}
	});
}

jQuery.extend({
	getPccScript:function(_url)
	{
		if(typeof window.moduleReady=='function')
			window.moduleReady=null;
		$.getScript(_url, function(){
			if(typeof window.moduleReady=='function')
				moduleReady();
		})
		.fail(function( jqxhr, settings, exception ) {
			console.log("getPccScript error: \n"+_url);
		});	
	}
});


function openXmodal(_url,title,invoker)
{
	//$.fn.openXmodal(url,title);
	invoker.openXmodal(_url,title);
}

function ringInit()
{
	ringSound = new Audio();
	if ( navigator.userAgent.match("Firefox/") )
		ringSound.src = ROOT_PATH+"/audio/bell-ringing.ogg";
	else
		ringSound.src = ROOT_PATH+"/audio/bell-ringing.mp3";
}

function ring()
{
	// sound setting saved on localStorage as 0 or 1, by default sound on (null value on localStorage)
	$globalVolume = localStorage.getItem('global-volume');
	if( ($globalVolume != null && $globalVolume != '1' ) )
		return;
	if(ringSound.duration>0)
		ringSound.currentTime=0;
	$('#ringing-indicator').addClass('ringing');
	ringSound.play();
}

/* WebSocket */
function ws_connect()
{
	if(typeof $.fn.WS.server!='string')
	{
		console.error('WS Server is not defined');
		return false;
	}
	//
	$('.content-wrapper .wsnotify').delay(800).slideUp('medium').remove();
	//
	pccws = new WebSocket($.fn.WS.server, 'Client');
	pccws.onopen = function(e) {
		if($('.top-bar').length>0)
		{
			$('#ws-indicator+ul.dropdown-menu [data-action=ws-close]').fadeIn();
			$('.top-bar .notifications .wsconnection ul.dropdown-menu li:has(.wsnotify)').remove();
			var wsnotify = $('<li style="display:none;"><div class="alert alert-success wsnotify"><i class="fa fa-check"></i> '+_('WebSocket connection successful')+'</div></li>').delay(1200).slideDown('medium');
			wsnotify.insertAfter('.top-bar .notifications .wsconnection ul.dropdown-menu .notification-header');
			$('#ws-indicator').dropdown('toggle').find('.warn').fadeOut();
		}
	};
	pccws.onmessage = function(e) {
		var wsp = new WSProtocol;
		messageList = wsp.parser(e.data);
		//console.log(messageList);
		if(typeof messageList !='object')
			return;
		messageList.forEach(function(msg){
			if(typeof msg.destHandler=='undefined' || !msg.destHandler)
				return;
			$.fn.WS.onMessage(msg.destHandler, msg.data);
		});
	};

	pccws.onerror = function(e) {
		$('#log_error .log').append(_('WebSocket Connection Error<hr>'));
		console.log(e);
		$('#ws-connect').removeAttr('disabled').html('Connect...');
		$('#ws-disconnect').attr('disabled','disabled');
		$('#ws-indicator .warn').fadeIn();
		return;
	};

	pccws.onclose = function(e) {
		if($('.content-wrapper').length>0)
		{
			var wsnotify = $('<li style="display:none;"><div class="alert alert-danger wsnotify">'+_('WebSocket connection in not available!')+' <span class="btn btn-xs btn-warning wsretry">'+_('Reconnect')+'</span></div></li>');
			wsnotify.find('.btn.wsretry').click(function() {
				$('.top-bar .notifications .wsconnection ul.dropdown-menu li:has(.wsnotify)').remove();
				var wsnotify = $('<li><div class="alert alert-info wsnotify"><i class="fa fa-spinner"></i> '+_('Connecting WS Server...')+'</div></li>');
				wsnotify.insertAfter('.top-bar .notifications .wsconnection ul.dropdown-menu .notification-header').delay(200).slideDown('medium', function(){
					ws_connect();
				});
			});
			$('#ws-indicator+ul.dropdown-menu [data-action=ws-close]').fadeOut();
			$('#ws-indicator .warn').fadeIn();
			if(!$('#ws-indicator').parent().hasClass('open'))
				$('#ws-indicator').dropdown('toggle');
			$('.top-bar .notifications .wsconnection ul.dropdown-menu li:has(.wsnotify)').remove();
			wsnotify.insertAfter('.top-bar .notifications .wsconnection ul.dropdown-menu .notification-header').delay(200).slideDown('medium');
		}
		return;
	};
}

function ws_disconnect()
{
	if(typeof window.pccws=="undefined")
		return;
	pccws.close();
	$('#ws-disconnect').attr('disabled','disabled');
	$('#ws-connect').removeAttr('disabled').html('Connect...');
	console.log("Connection closed by you!");
}

function toggleReloadRequired(hide)
{
	indicator = $('#ccpbx-reload-indicator')
	if(hide)
		indicator.removeClass('visible')
	else
		indicator.addClass('visible');
}

_ = function(){
	if(typeof AppLocales=='undefined')
		return arguments[0];
	switch(arguments.length)
	{
		case 1:
			var _keyword = arguments[0];
			var _domain = '';
			for(_domain in AppLocales)
			{
				if(typeof AppLocales[_domain].LC_MESSAGES[_keyword]!='undefined')
				{
					return AppLocales[_domain].LC_MESSAGES[_keyword];
				}
			}
			return _keyword;
		case 2:
			var _domain = arguments[0];
			var _keyword = arguments[1];
			return (typeof AppLocales[_domain].LC_MESSAGES[_keyword]!='undefined') ? AppLocales[_domain].LC_MESSAGES[_keyword] : _keyword;
		case 3:
			var _domain = arguments[0];
			var _keyword = arguments[1];
			var _params = arguments[2];
			return (_domain!=false) ? vsprintf(_(_domain, _keyword), _params) : vsprintf(_(_keyword), _params);
	}
}

preloading = function(){
	$.blockUI({
			message:'<div class="preloader"><div class="kk-main-loader"><div class="kk-rotate"><div class="sk-folding-cube"><div class="sk-cube1 sk-cube"></div><div class="sk-cube2 sk-cube"></div><div class="sk-cube4 sk-cube"></div><div class="sk-cube3 sk-cube"></div></div></div></div><div class="kk-loader-tail">Parspooyesh</div></div>',
			overlayCSS:{zIndex:1090,border:'none',margin:'0px',padding:'0px',width:'100%',height:'100%',top:'0px',left:'0px',backgroundColor:'#f2f2f2',opacity:1,cursor:'wait',position:'fixed'},
			css:{zIndex:1101,border:'none',padding:'0px', margin:'0px',width:'30%',top:'40%',left:'35%',textAlign:'center',color:'rgb(0, 0, 0)',cursor:'wait',position:'fixed'}
		});
}
loadTheme = function(theme){
	$('link[data-theme]').remove();
	var theme = ROOT_PATH + '/css/newpcc/'+theme+'.css'
	$('head').append('<link rel="stylesheet" href="' + theme + '" data-theme type="text/css" />');
}
//---EOF
