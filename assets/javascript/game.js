$(".selectdefender").hide();
$(".selectdefender1").hide();
$(".selectdefender2").hide();
$(".selectdefender3").hide();
$(".defender").hide();
$(".defender1").hide();
$(".defender2").hide();
$(".defender3").hide();

 


///your character click functions

$(".characters").click(function(){
  $(".characters1").hide();
  $(".characters2").hide();
  $(".characters3").hide();
  $(".selectdefender1").show();
$(".selectdefender2").show();
$(".selectdefender3").show();
  $(".select").hide();

});

$(".characters1").click(function(){
  $(".characters").hide();
  $(".characters2").hide();
  $(".characters3").hide();
  $(".selectdefender").show();
$(".selectdefender2").show();
$(".selectdefender3").show();
  $(".select").hide();

});
$(".characters2").click(function(){
  $(".characters1").hide();
  $(".characters").hide();
  $(".characters3").hide();
  $(".selectdefender1").show();
$(".selectdefender").show();
$(".selectdefender3").show();
  $(".select").hide();

});
$(".characters3").click(function(){
  $(".characters1").hide();
  $(".characters2").hide();
  $(".characters").hide();
  $(".selectdefender1").show();
$(".selectdefender2").show();
$(".selectdefender").show();
  $(".select").hide();

});

///select your enemy click fuctions Below
$(".selectdefender").click(function(){
  $(".selectdefender1").hide();
  $(".selectdefender3").hide();
  $(".selectdefender2").hide();
    $(".selectdefender").hide();
  $(".defender").show();

 

});
$(".selectdefender2").click(function(){
  $(".selectdefender1").hide();
  $(".selectdefender3").hide();
  $(".selectdefender2").hide();
    $(".selectdefender").hide();
  $(".defender2").show();
});
$(".selectdefender3").click(function(){
  $(".selectdefender1").hide();
  $(".selectdefender3").hide();
  $(".selectdefender2").hide();
    $(".selectdefender").hide();
  $(".defender3").show();
});
$(".selectdefender1").click(function(){
  $(".selectdefender1").hide();
  $(".selectdefender3").hide();
  $(".selectdefender2").hide();
    $(".selectdefender").hide();
  $(".defender1").show();
});
