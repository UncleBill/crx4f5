var $submit  = $("#btn");
var $port    = $("#port");
var $treeCon = $("#tree_con");

var changeSrc = function(){
    var newsrc = 'http://localhost:' + ($port[0].value?$port[0].value:3000);
    console.log(newsrc);
    $treeCon.attr('src',newsrc);
};

$submit.bind('submit click',changeSrc);

$("#setting").bind("click",function(){
    $("#portSetting").toggle();
});
