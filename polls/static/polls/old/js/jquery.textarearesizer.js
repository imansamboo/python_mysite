/* 
	jQuery TextAreaResizer plugin
	Created on 17th January 2008 by Ryan O'Dell 
	Version 1.0.4
	
	Converted from Drupal -> textarea.js
	Found source: http://plugins.jquery.com/misc/textarea.js
	$Id: textarea.js,v 1.11.2.1 2007/04/18 02:41:19 drumm Exp $

	1.0.1 Updates to missing global 'var', added extra global variables, fixed multiple instances, improved iFrame support
	1.0.2 Updates according to textarea.focus
	1.0.3 Further updates including removing the textarea.focus and moving private variables to top
	1.0.4 Re-instated the blur/focus events, according to information supplied by dec

	
*/
(function($) {
	/* private variable "oHover" used to determine if you're still hovering over the same element */
	var textarea, staticOffset;  // added the var declaration for 'staticOffset' thanks to issue logged by dec.
	var iLastMousePos = 0;
	var iMin = 32;
	var grip;
	/* TextAreaResizer plugin */
	$.fn.TextAreaResizer = function() {
		return this.each(function() {
		    textarea = $(this).addClass('processed'), staticOffset = null;

			// 18-01-08 jQuery bind to pass data element rather than direct mousedown - Ryan O'Dell
		    // When wrapping the text area, work around an IE margin bug.  See:
		    // http://jaspan.com/ie-inherited-margin-bug-form-elements-and-haslayout
		    
		    //$(this).wrap('<div class="resizable-textarea"><span></span></div>')
		     // .parent().append($('<div class="grippie"></div>').bind("mousedown",{el: this} , startDrag));
		     
		      $(this).wrap('<div class="resizable-textarea"><span></span></div>')
		      .parent().append($('<div class="grippie"></div>').bind("mousedown",{el: this} , startDrag)
		      
		      );
		      
		      
		       /*var grippie = $('div.grippie', $(this).parent())[0];
		    grippie.style.marginRight = (grippie.offsetWidth - $(this)[0].offsetWidth) +'px';*/
		    
		    
		    var grippie = $('div.grippie', $(this).parent())[0];
		    grippie.style.marginRight = (0) +'px';
		    
		    
		     var grippie = $('div.grippie', $(this).parent())[0];
		    grippie.style.marginLeft = (grippie.offsetWidth - $(this)[0].offsetWidth) +'px';
		    
		      
		      
		      $(this).wrap('<div class="resizable-textarea"><span></span></div>')
		      .parent().append($('<div class="grippie1" id="grippie1"></div>').bind("mousedown",{el: this} , hStartDrag)
		      
			  .css("top",$("#body").offset().top)
		      .css("height",$("#body").height())
		      .css("left",$("#body").offset().left-15)
		      );

		});
	};
	/* private functions */
	function hStartDrag(e) {
		textarea = $(e.data.el);
		textarea.blur();
		iLastMousePos = mousePosition(e).x;
		//staticOffset = textarea.width() - iLastMousePos;
		staticOffset = textarea.width() + iLastMousePos;
		textarea.css('opacity', 0.25);
		$(document).mousemove(hPerformDrag).mouseup(hEndDrag);
		return false;
	}
	
	function hPerformDrag(e) {
		var iThisMousePos = mousePosition(e).x;
		//var iMousePos = staticOffset + iThisMousePos;
		var iMousePos = staticOffset - iThisMousePos;
		//var iMousePos = iThisMousePos - staticOffset;
		if (iLastMousePos >= (iThisMousePos)) {
			iMousePos -= 5;
			//iMousePos += 5;
		}
		iLastMousePos = iThisMousePos;
		iMousePos = Math.max(iMin, iMousePos);
		textarea.width(iMousePos + 'px');
		$("#widthshow").val(textarea.width());
		//$("#grippie1").css("left",$("#body").offset().left+$("#body").width()+5);
		$("#grippie1").css("left",$("#body").offset().left-15);
		if (iMousePos < iMin) {
			hEndDrag(e);
		}
		return false;
	}
	
	function hEndDrag(e) {
		$(document).unbind('mousemove', hPerformDrag).unbind('mouseup', hEndDrag);
		textarea.css('opacity', 1);
		textarea.focus();
		textarea = null;
		staticOffset = null;
		iLastMousePos = 0;
	}
	
	
	function startDrag(e) {
		textarea = $(e.data.el);
		textarea.blur();
		iLastMousePos = mousePosition(e).y;
		staticOffset = textarea.height() - iLastMousePos;
		textarea.css('opacity', 0.25);
		$(document).mousemove(performDrag).mouseup(endDrag);
		return false;
	}

	function performDrag(e) {
		var iThisMousePos = mousePosition(e).y;
		var iMousePos = staticOffset + iThisMousePos;
		if (iLastMousePos >= (iThisMousePos)) {
			iMousePos -= 5;
		}
		iLastMousePos = iThisMousePos;
		iMousePos = Math.max(iMin, iMousePos);
		textarea.height(iMousePos + 'px');
		$("#lengthshow").val(textarea.height());
		$("#grippie1").css("height",textarea.height());
		if (iMousePos < iMin) {
			endDrag(e);
		}
		return false;
	}

	function endDrag(e) {
		$(document).unbind('mousemove', performDrag).unbind('mouseup', endDrag);
		textarea.css('opacity', 1);
		textarea.focus();
		textarea = null;
		staticOffset = null;
		iLastMousePos = 0;
	}

	function mousePosition(e) {
		return { x: e.clientX + document.documentElement.scrollLeft, y: e.clientY + document.documentElement.scrollTop };
		//return { x: e.clientX + document.documentElement.scrollRight, y: e.clientY + document.documentElement.scrollTop };
	};
})(jQuery);

