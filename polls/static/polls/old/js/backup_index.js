$(document).ready(function()
{
    module= $('.container .row .content');
    module.find('#log').on('click', function() {
        var url = ROOT_PATH+'/admin/Backup/log/';
        var dialog = module.find("#dialog");
        if (module.find("#dialog").length == 0)
        {
            dialog = $('<div id="dialog" style="display:hidden"></div>').appendTo('body');
        }
        // load remote content
        dialog.load(url, {}, function(responseText, textStatus, XMLHttpRequest) {
            dialog.dialog({width:800,height:400});
        });
        //prevent the browser to follow the link
        return false;
    });

    //var btn = $.fn.button.noConflict() // reverts $.fn.button to jqueryui btn
    //$.fn.btn = btn // assigns bootstrap button functionality
    module.find('.disable_this').click(function(e)
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

        module.find( "#dialog_enable" ).dialog({
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

    module.find('.delete_this').click(function(e)
    {
        e.preventDefault();
        var path= $(this).attr('href');
        path = path.substring(path.indexOf("/") + 1);
        path = path.substring(path.indexOf("/") );

        module.find( "#dialog_delete" ).dialog({
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
        module.find('#dialog_delete').dialog('open');

    });


    //
    module.find('.backup-actions-confirm').on('show.bs.modal', function (e) {
        var $invoker = $(e.relatedTarget);
        $(this).find('.modal-title').text($invoker.text());
        $(this).find('button.act')
        .data('action',$invoker.data('action'))
        .data('backup-id',$invoker.data('backup-id'))
        //.hide().filter('.'+$invoker.data('action')).show();
    });
    //
    module.find('.backup-actions-confirm button.act').each(function(){
        $(this).click(function(){
            url = '/pcc-ng/admin/Backup/';
            action = $(this).data('action');
            if(action=='enable') url += 'enable/';
            if(action=='disable') url += 'disable/';
            if(action=='delete') url += 'delete/';
            url += $(this).data('backup-id');
            module.find('.backup-actions-confirm').modal('hide');
            module.find('.modal-backdrop.fade.in').remove();
            goTo(url,{pushState:false});
            return;
        });
    });
    //


    module.find("#update_cron").click(function(){

        var minutes =module.find("#minutes").val();
        var hours = module.find("#hours").val();
        var  monthday = module.find("#monthday").val();
        var month = module.find("#month").val();
        var weekday =module.find("#weekday").val();
        allVal="&minutes="+minutes+"&hours="+hours+"&monthday="+monthday+"&month="+month+"&weekday="+weekday
        var id = module.find('#update_cron').data('id');
        if(!id){return false};
        module.find('#inform').show(1000).html('<img id="ajax_spinner" src="'+ROOT_PATH+'/app/webroot/img/ajax_spinner.gif"/>');
        module.find('#update_cron').attr('disabled',true);
        $.ajax({
            type:"POST",
            url:ROOT_PATH+'/admin/Backup/cron/'+id,
            data:allVal,
            dataType: "json",
            success:function(response){
                if(response.result == true)
                {
                    //module.find('#Addnewbackup').attr('disabled', false);
                    module.find('#inform').html(response.msg)
                    module.find('#inform').show(1000)
                    setTimeout(function() { module.find("#inform").fadeOut(1500); }, 5000)
                }
                else
                {
                    //$('#Addnewbackup').attr('disabled', true);
                    module.find('#inform').html(response.msg)
                    module.find('#inform').show(1000)
                    setTimeout(function() { module.find("#inform").fadeOut(1500); }, 5000)
                }
                module.find('#ajax_spinner').remove();
                module.find('#update_cron').attr('disabled',false);
                //$('#check_ftp').attr('disabled',false);
            }
        });
    })

    module.find("#sysInfoEmail").click(function(){
        sysInfoEmail = $(this);
        module.find("#emailresponsemsg,#ajax_spinner_email").remove();
        sysInfoEmail.after('<span id="ajax_spinner_email" class="input-group-addon"><i class="fa fa-spinner fa-spin"></i></span>');
        sysInfoemailValue = $("#sysInfoemailValue").val();
        data='&debug=2&email='+sysInfoemailValue;
        sysInfoEmail.attr('disabled', true);
        $.ajax({
            type: "POST",
            url: ROOT_PATH + '/admin/Backup/sysInfoHandler/',
            data: data,
            dataType: "json",
            success: function (response) {
                module.find("#ajax_spinner_email").remove();
                if (response.result == true)
                {
                    sysInfoEmail.after(response.msg)
                    setTimeout(function () {
                        window.el=module.find("#emailresponsemsg")
                        window.el.fadeOut(1500, function(){window.el.remove();});
                    }, 5000)
                }else{
                    sysInfoEmail.after(response.msg)
                    setTimeout(function () {
                        window.el=module.find("#emailresponsemsg")
                        window.el.fadeOut(1500, function(){window.el.remove();});
                    }, 5000)
                }
                
            }
        });
        sysInfoEmail.removeAttr('disabled');
    })


});

function getAllValues(expression) {

    var allVal = '';
    module.find(expression).each(function() {
        var type = $(this).attr("type");
        if (type == "button" || type == "submit") {
            return false;
        }
        else
        {
            allVal += '&' + $(this).attr('name') + '=' + $(this).val();
        }
    });
    return(allVal);
}

