$(document).ready(function()
{
    // javascript for selecting source and related drop downs
    $("#source_type").val($("#source_type option:first").val());

    $('#source_type').change(function()
    {

        var val= $(this).val();
        $('#dynamicselect').show('slow');
        if($('#returncontent').length)
            {
                $('#returncontent').remove();
            }


        if(val=='')
            {
                return false;
            }

        $('#dynamicselect').html("<select id='returncontent' name='source_id'> <option value=\"\">انتخاب کنید</option> </select>");
        if(val=='ivr')
            {
                //$("#dynamicselect").children().remove().end().append("<option value=\"\">Select a type</option>");
                override_Ajax_Calls(val)
            }
        else if(val=='announcement')
            {
                override_Ajax_Calls(val)
            }
    });

//end of source selecion action

//start of receiptent actions
        $("#destination_type").val($("#destination_type option:first").val());
        $('#destination_type').change(function()
        {

            $('#customList').remove();
            $('#listupload').remove();
            val = $(this).val();
            if(val=='')
            {
                return false;
            }
            $('#dynamicselectdest').show('slow');
            if(val=='list')
                {

                    $('#dynamicselectdest').html('<textarea name="data[customList]" id="customList" ></textarea> لیست خود را با ویرگول وارد نمایید ');
                }
            else if(val=='file')
                {

                    $('#dynamicselectdest').html('<input type="file" id="listupload" name="data[uploadcontent]" >فایل خود را بارگذاری نمایید');
                }
        })
//end of receiptent actions

});

function override_Ajax_Calls(data)
{
    $.ajax({
            type:"POST",
            url:ROOT_PATH+'/broadcasts/fetchContent',
            data:"called="+data,
            dataType: "json",
            success:function(response){

                    if(response.result == true)
                    {
                        var newoptions = "";
                        var re = response.fetch_result;
                        $.each(re, function(k, v) {
                                newoptions += "<option value=\"" + k + "\">" + v+ "</option>";
                        });
                        $("#returncontent").children().end().append(newoptions);

                    }
                    else
                    {
                        $('#dynamicselect').html('Error');
                    }

                }
            });
}




