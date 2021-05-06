// homepage tips, script to hide and show tips when radio button clicked 
// Created by Viacheslav Rawles

$(document).ready(function() {
    $("input[name$='phishtips']").click(function() {
        var test = $(this).val();

        $("div.desc").hide();
        $("#Tip" + test).show();
    });
});