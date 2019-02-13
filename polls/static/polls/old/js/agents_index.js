function moduleReady(){
    module= $('.container .row .content');
	module.find('input:checkbox').removeAttr('checked');
	module.find('.disable_this').hide().click(function(e)
	{
		e.preventDefault();
		var path= $(this).attr('href');
		path = path.substring(path.indexOf("/") + 1);
		path = path.substring(path.indexOf("/") );

		module.find( "#dialog_disable" ).dialog({
			resizable: false,
			height:170,
			modal: true,
			autoOpen: false,
			buttons: {
				'لغو': function() {
					$( this ).dialog( "close" );
				},
				"تایید": function(){
					document.location.href=ROOT_PATH+path;
				}
			}
		});
		module.find('#dialog_disable').dialog('open');
	});

	module.find('.enable_this').click(function(e)
	{
		e.preventDefault();
		var path= $(this).attr('href');
		path = path.substring(path.indexOf("/") + 1);
		path = path.substring(path.indexOf("/") );

		module.find('#dialog_enable').dialog({
			resizable: false,
			height:170,
			modal: true,
			autoOpen: false,
			buttons: {
				'لغو': function() {
					$( this ).dialog( "close" );
				},
				"تایید": function(){
					document.location.href=ROOT_PATH+path;
				}

			}
		});
		module.find('#dialog_enable').dialog('open');

	});
	
	module.find('#filter_agent_type').change (function(){
		module.find('#page').val('1');
		var agent_type = $(this).val();
		if(agent_type!='') {
			goTo(ROOT_PATH+'/admin/agents/',{
				pushState:false,
				method:'post',
				params:'ajax=true&agent_type='+agent_type,
				onSuccess:function(el,op)
				{
					$(document).ready(function(){
						if(window.moduleReady) moduleReady();
						window.moduleReady = null;
					});
					applyDefaultActions($,module);
				}
			});
		}
	});

	module.find('#countPerPage').change(function()
	{
		if($(this).val()=='none') return false;
		goTo(ROOT_PATH+"/admin/agents/changeResultPerPage/"+$(this).val(), {
			pushState:false,
			onSuccess:function(el,op)
			{
				$(document).ready(function(){
					if(window.moduleReady) moduleReady();
					window.moduleReady = null;
				});
				applyDefaultActions($,module);
			}
		});
	});
	
	module.find('#search_agent').on('keyup',function(evt){
		if(evt.which==13)
		{
			module.find('#do_search_agent').trigger('click');
		}
	});
	module.find('#do_search_agent').on('click',function(evt){
		goTo(ROOT_PATH+"/admin/agents/", {
			method:'post',
			params:'ajax=true&search='+$(this).siblings('#search_agent').val(),
			onSuccess:function(el,op)
			{
				$(document).ready(function(){
					if(window.moduleReady) moduleReady();
					window.moduleReady = null;
				});
				applyDefaultActions($,module);
			}
		});			
	});
	
	module.find('.bulkcheckboxes').change(function() {
		showMassAction = (module.find('.bulkcheckboxes:checked').length!=0)
		showMassAction ? MassActionPanel(true) : MassActionPanel(false);
	});
	module.find("#allbulkcheckboxes").on('change',function() {
		module.find('.bulkcheckboxes').prop("checked" , this.checked);
		showMassAction = (module.find('.bulkcheckboxes:checked').length!=0)
		showMassAction ? MassActionPanel(true) : MassActionPanel(false);
	});
	//
    module.find('.agent-activation-confirm').on('show.bs.modal', function (e) {
        var $invoker = $(e.relatedTarget);
        $(this).find('.modal-title').text($invoker.text());
        $(this).find('button.act')
        .data('action',$invoker.data('action'))
        .data('agent-id',$invoker.data('agent-id'))
        .hide().filter('.'+$invoker.data('action')).show();
    });
    //
    module.find('.agent-activation-confirm button.act').each(function(){
        $(this).click(function(){
            url = (($(this).data('action')=='enableAgent')?'/pcc/admin/agents/enable/':'/pcc/admin/agents/disable/')+$(this).data('agent-id');
            $.ajax({
                url: url,
                dataType:'json',
                data:{ajax:true},
                error: function(){console.log('there is an error...');},
                success: function(result){
                    module.find('.agent-activation-confirm').modal('hide');
                    $('body').removeClass('modal-open');
                    $('body').css('padding-right','');
                    goTo(window.location.pathname,{pushState:false,
                    		onSuccess:function(el,op)
							{
								$(document).ready(function(){
									if(window.moduleReady) moduleReady();
									window.moduleReady = null;
								});
								applyDefaultActions($,module);
							}
                    });
                    $('.modal-backdrop').remove();
                }
            });
        });
    });
    //
};

function MassActionPanel(generate)
{
    module= $('.container .row .content');
	module.find('.top-menu-actions li:has([data-mass-action])').remove();

	generate = (typeof generate!='undefined' && generate==true);
	if(generate)
	{
		selectValues={'1':'فعال سازی','2':'غیر فعال'};
		$.each(selectValues, function(key, title) {   
			$('<li><button data-toggle="modal" data-action="disableAgent" data-target=".agent-activation-confirm" data-backdrop="static" data-keyboard="false" type="button" class="btn" data-mass-action="'+key+'"><i class="fa fa-trash-o"></i> '+title+'</li>\n').data('mass-action',key).appendTo(module.find('.top-menu-actions'))
			/*.on('click', function(event) {
				event.preventDefault();
				module.find('#dialog_enable').dialog({
					resizable: false,
					height:170,
					modal: true,
					autoOpen: false,
					buttons: {
						'لغو': function() {
							$( this ).dialog( "close" );
						},
						"تایید": function(){
							document.location.href=ROOT_PATH+path;
						}

					}
				});
				module.find('#dialog_enable').dialog('open');
				return;

				allvals=[];
				module.find('.bulkcheckboxes').each(function(e) {
					if ($(this).is(":checked")) {
						allvals.push($(this).val());
					}
				});
				if(allvals.length <= 0)
					return false;

				goTo(ROOT_PATH+'/admin/agents/zzbulk',{
					pushState:false,
					method:'post',
					params:{ajax:true,bulkValues:allvals,bulkActionId:$(this).data('mass-action')},
					onSuccess:function(el,op)
					{
						$(document).ready(function(){
							if(window.moduleReady) moduleReady();
							window.moduleReady = null;
						});
						applyDefaultActions($,module);
					}
				});
			});*/
		});
	}
	return;

	

	$('#tbl-list-agents').before('<form class="form-horizontal" action="'+ROOT_PATH+'/admin/agents/bulk" method="post" id="massActionForm" ></form>')
	//
	$('<input type="hidden" id="bulkValues" name="bulkValues">').appendTo('#massActionForm');
	$('<select id="bulkactionselect" name="bulkactionselect" class="form-control" style="float:left;">').appendTo('#massActionForm');
	$('<input>').attr({type: 'submit',id: 'dobulksubmit',name: 'dobulksubmit',class:'btn btn-success',style:'float:left',value:'انجام عملیات'}).appendTo('#massActionForm')
	.on('click',function(){
		allvals=[];
		$('.bulkcheckboxes').each(function(e) {
			if ($(this).is(":checked")) {
				allvals.push($(this).val());
			}
		});
		if(allvals.length <= 0)
			return false;
		$('#bulkValues').val(allvals);
	});
}