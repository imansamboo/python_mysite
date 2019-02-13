$(document).ready(function()
{
    $('#todo_outbound').click(function()
    {

        $( "#todo_outbound_dialog" ).dialog({
            width : 450

        });
    })
    $('#done_outbound').click(function()
    {

        $( "#done_outbound_dialog" ).dialog({
            width : 450

         });
    })
    $('#progress_outbound').click(function()
    {

        $( "#progress_outbound_dialog" ).dialog({
            width : 450

         });
    })

    $('#start_service').click(function()
    {
       window.location=ROOT_PATH+'/broadcasts/startservice';
    })
})




