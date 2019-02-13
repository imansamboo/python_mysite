function creatTemplate(name) {
    var templateString = $("#export-pdf").html();                                 
    var template = kendo.template(templateString);                      
    $("#export").html(template({ func_name: name }));   
}
