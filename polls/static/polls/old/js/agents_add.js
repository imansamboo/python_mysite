$(document).ready(function() {

    //proccess checkbox state and set our div display to block if its checked
    //this is because when you soft refresh browser checkbox remains checked but div dislay is none amir
    if($('#has_ticketing_account').is(":checked"))
        {
             $('#HasTciketingAccountContent').css('display','block');
        }

    $('#has_ticketing_account').change(function()
    {
        $('#HasTciketingAccountContent').toggle();
        if($('#err_2').length )
                {
                    $('#AgentNameInTicketing').attr('value','')
                    $('#err_2').remove();
                }
        if(!$('#has_ticketing_account').is(":checked"))
        {
             $('input[type=submit]').attr('disabled', false);
        }
    })

    $('#AgentAgentNumber').keyup(function()
    {
        if( $('#AgentAgentId').length)
        {
            var id= $('#AgentAgentId').attr('value');
        }
        var value= $(this).attr('value');
        var element = $(this);
        value = value.trim();
        if(value.length < $(this).data('min') || value.length > $(this).data('max'))
            {
                $(this).nextAll('p').remove();
                element.parent().append('<p>Must be between '+$(this).data('min')+' AND '+$(this).data('max')+ ' Characters </p>');
                return false;
            }


        $.ajax({
            type:"POST",
            url:ROOT_PATH+'/admin/agents/ajaxCheckAgentNumber',
            data:"value="+value+"&id="+id,
            dataType: "json",
            success:function(response){
                    element.nextAll('p').remove();
                    if(response.result == true)
                    {
                        $('input[type=submit]').attr('disabled', true);
                        element.parent().append('<p>'+response.msg+'</p>');
                    }
                    else
                    {
                        $('input[type=submit]').attr('disabled', false);
                        element.parent().append('<p>'+response.msg+'</p>');
                    }

                }
            });
    })
    $('#AgentNameInTicketing').keyup(function()
    {
        if($('#force_insert').is(":checked"))
            {
                return false;
            }
        if( $('#AgentTicketingId').length)
        {
            var id= $('#AgentTicketingId').attr('value');
        }

        var value= $(this).attr('value');
        var element = $(this);
        $.ajax({
            type:"POST",
            url:ROOT_PATH+'/admin/agents/ajaxCheckStaffInTicketing',
            data:"value="+value+"&id="+id,
            dataType: "json",
            success:function(response){
                    element.nextAll('p').remove();
                    if(response.result == true)
                    {
                        $('input[type=submit]').attr('disabled', true);
                        element.parent().append('<p id="err_2">'+response.msg+'</p>');
                    }
                    else
                    {
                        $('input[type=submit]').attr('disabled', false);
                        element.parent().append('<p>'+response.msg+'</p>');
                    }

                }
            });
    })

    $('#force_insert').change(function()
            {
                //var Current_state= $('input[type=submit]').attr('disabled');
               if($('#force_insert').is(":checked"))
                {
                    $('input[type=submit]').attr('disabled', false);
                }
                else if($('#err_2').length )
                {
                    $('input[type=submit]').attr('disabled', true);

                }
            });

/*$( "#disable_this" ).dialog({
      resizable: false,
      height:140,
      modal: true,
      buttons: {
        "Delete all items": function() {
          $( this ).dialog( "close" );
        },
        Cancel: function() {
          $( this ).dialog( "close" );
        }
      }
    });*/
});



