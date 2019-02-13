$(document).ready(function () {
    var btn = $.fn.button.noConflict() // reverts $.fn.button to jqueryui btn
    $.fn.btn = btn // assigns bootstrap button functionality
   // $('#BackupRemotetype').prop('selectedIndex',0); // reset on page refresh
    //$(':checkbox:checked').prop('checked',false);
    
    $("#BackupRemotetype").change(function (e)
    {
        value = this.value
        if (value == 'FTP')
        {
            $('#HasRSYNCAccountContent').hide(1000)
            $('#HasFTPAccountContent').show(1500)
        }
        else if (value == 'RSYNC')
        {
            $('#HasFTPAccountContent').hide(1000)
            $('#HasRSYNCAccountContent').show(1500)
        }
        else if(value=='NONE')
        {
            $('#Addnewbackup').attr('disabled', false);
            $('#HasRSYNCAccountContent').hide(1000);
            $('#HasFTPAccountContent').hide(1000);
        }
    });

    $('#has_ftp_account').change(function ()
    {
        $('#HasFTPAccountContent').toggle();
        if ($('#err_2').length)
        {
            $('#AgentNameInTicketing').attr('value', '');
            $('#err_2').remove();
        }
        if (!$('#HasFTPAccountContent').is(":checked"))
        {
            $('#Addnewbackup').attr('disabled', false);
        }
    });
//for local selection
    if ($('#has_local_paths_info').is(":checked"))
    {
        $('#has_local_paths_info_content').css('display', 'block');
    }

    $('#has_local_paths_info').change(function ()
    {
        $('#has_local_paths_info_content').toggle();
        if ($('#err_2').length)
        {
            $('#AgentNameInTicketing').attr('value', '');
            $('#err_2').remove();
        }
        if (!$('#has_local_paths_info_content').is(":checked"))
        {
            $('input[type=submit]').attr('disabled', false);
        }
    });

    $("#Addnewbackup").click(function (event)
    {
        
        if ($('#BackupRemotetype').val())
        {
            //$(".error").remove();
            value= $('#BackupRemotetype').val();
            if(value=='NONE')
            {
                return true;
            }
            if(value=='FTP')
            {
                if ($('#ftp_hostname').val() == "")
                {
                    $("#ftp_hostname").parent().append('<span class="error">مشخصات هاست را وارد کنید </span>');
                    var flag = true;
                }
                if ($('#ftp_username').val() == "")
                {
                    $("#ftp_username").parent().append('<span class="error">نام کاربری را وارد کنید</span>');
                    var flag = true;
                }
                if ($('#ftp_password').val() == "")
                {
                    $("#ftp_password").parent().append('<span class="error">کلمه عبور را وارد کنید</span>');
                    var flag = true;
                }
            }
            if(value=='RSYNC')
            {
                if ($('#rsync_hostname').val() == "")
                {
                    $("#rsync_hostname").parent().append('<span class="error">مشخصات هاست را وارد کنید </span>');
                    var flag = true;
                }
                if ($('#rsync_port').val() == "")
                {
                    $("#rsync_port").parent().append('<span class="error">پورت را وارد کنید </span>');
                    var flag = true;
                }
                if ($('#rsync_username').val() == "")
                {
                    $("#rsync_username").parent().append('<span class="error">نام کاربری را وارد کنید</span>');
                    var flag = true;
                }
                if ($('#rsync_password').val() == "")
                {
                    $("#rsync_password").parent().append('<span class="error">کلمه عبور را وارد کنید</span>');
                    var flag = true;
                }
                if ($('#rsync_dir').val() == "")
                {
                    $("#rsync_dir").parent().append('<span class="error">مسیر را وارد کنید</span>');
                    var flag = true;
                }
            }
            if (flag)
            {
                return false;
            }
        }
        if ($("#has_local_paths_info").is(":checked"))
        {
            if ($('#has_local_paths_detail').val() == "")
            {
                $("#has_local_paths_detail").after('<span id="space">مسیر را وارد کنید </span>');
                var flag = true;
            }
            if (flag)
            {
                return false;
            }
        }
    });

    $('#check_ftp').click(function ()
    {

        var element = $(this);
        var hostname = $('#ftp_hostname').val();
        var username = $('#ftp_username').val();
        var password = $('#ftp_password').val();
        var ftp_dir = $('#ftp_dir').val();
        $('#check_ftp').attr('disabled', true);
        $('<img id="ajax_spinner" src="' + ROOT_PATH + '/app/webroot/img/ajax_spinner.gif"/>').insertAfter('#check_ftp');
        $('#ftp_error').remove();
        $.ajax({
            type: "POST",
            url: ROOT_PATH + '/admin/Backup/ftpCheck',
            data: "hostname=" + hostname + "&username=" + username + "&password=" + password + "&ftp_dir=" + ftp_dir,
            dataType: "json",
            success: function (response) {
                if (response.result == true)
                {
                    $('#Addnewbackup').attr('disabled', false);
                    element.parent().append('<span class="label label-success" id="ftp_error">' + response.msg + '</span>');
                }
                else
                {
                    $('#Addnewbackup').attr('disabled', true);
                    element.parent().append('<span  class="label label-warning" id="ftp_error">' + response.msg + '</span>');
                }
                $('#ajax_spinner').remove();
                $('#check_ftp').attr('disabled', false);
            }
        });
    });
    
    
    $('#check_rsync').click(function (){
        var element = $(this);
        var hostname = $('#rsync_hostname').val();
        var port = $('#rsync_port').val();
        var username = $('#rsync_username').val();
        var password = $('#rsync_password').val();
        var rsync_dir = $('#rsync_dir').val();
        $('#check_rsync').attr('disabled', true);
        $('#Addnewbackup').attr('disabled', true);
        $('<img id="ajax_spinner" src="' + ROOT_PATH + '/app/webroot/img/ajax_spinner.gif"/>').insertAfter('#check_rsync');
        $('#rsync_error').remove();
        $('#rsync_log').remove();
        $.ajax({
        type: "POST",
        url: ROOT_PATH + '/admin/Backup/RsyncCheck',
        data: "hostname=" + hostname + "&port=" + port + "&username=" + username + "&password=" + password + "&rsync_dir=" + rsync_dir,
        dataType: "json",
        success: function (response) {
            if (response.result == true)
            {
                $('#Addnewbackup').attr('disabled', false);
                element.parent().append('<span class="label label-success" id="rsync_error">' + response.msg + '</span>');
                element.parent().append('<div style="width:500px"  class="alert alert-success" id="rsync_log">' + response.log + '</div>');
            }
            else
            {
                $('#Addnewbackup').attr('disabled', true);
                element.parent().append('<span  class="label label-warning" id="rsync_error">' + response.msg + '</span>');
                element.parent().append('<div style="width:500px"  class="alert alert-danger" id="rsync_log">' + response.log + '</div>');
            }
            $('#ajax_spinner').remove();
            $('#check_rsync').attr('disabled', false);
        }
    });
        
    });

    $('#BackupRecords').click(function() {
       $('#OnetimesyncBlock').toggle('100',ChangedataonToggle());
    });
    
    function ChangedataonToggle()
    {
        if ($("#OnetimesyncBlock").is(":visible")) {
            $('#BackupOnetimesync').attr('checked', false);
        } else {
          return
      }
    }
    
});
