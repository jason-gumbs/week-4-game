$(".selectdefender").hide();
$(".selectdefender1").hide();
$(".selectdefender2").hide();
$(".selectdefender3").hide();
$(".defender").hide();
$(".defender1").hide();
$(".defender2").hide();
$(".defender3").hide();
$(".alert").hide();
$(".list-group").hide();

//
healthPoints: 0;
attackPower: 0;
 counterAttackPower: 0;
 ehealthPoints: 0;
var dinochar = false;
var lukechar = false;
var machinechar = false;
var monkeychar = false;
var dinoenemy = false;
var lukeenemy = false;
var machineenemy = false;
var monkeyenemy = false;

attackPower = Math.floor(Math.random() * (13 - 1) + 1);
counterAttackPower = Math.floor(Math.random() * (13 - 1) + 1);




///your character click functions

$(".characters").click(function(){
  $(".characters1").hide();
  $(".characters2").hide();
  $(".characters3").hide();
   $(".selectdefender").remove();
  $(".selectdefender1").show();
$(".selectdefender2").show();
$(".selectdefender3").show();
  $(".select").hide();
  healthPoints = Math.floor(Math.random() * 250) + 100;
   $(".health").text(healthPoints);
  dinochar = true;

});

$(".characters1").click(function(){
  $(".characters").hide();
  $(".characters2").hide();
  $(".characters3").hide();
  $(".selectdefender").show();
$(".selectdefender2").show();
$(".selectdefender3").show();
  $(".select").hide();
  healthPoints = Math.floor(Math.random() * 250) + 100;
    
     $(".health").text(healthPoints);
  lukechar = true;

});
$(".characters2").click(function(){
  $(".characters1").hide();
  $(".characters").hide();
  $(".characters3").hide();
  $(".selectdefender1").show();
$(".selectdefender").show();
$(".selectdefender3").show();
  $(".select").hide();
  healthPoints = Math.floor(Math.random() * 250) + 100;
     
     $(".health").text(healthPoints);
  monkeychar = true;

});
$(".characters3").click(function(){
  $(".characters1").hide();
  $(".characters2").hide();
  $(".characters").hide();
  $(".selectdefender1").show();
$(".selectdefender2").show();
$(".selectdefender").show();
  $(".select").hide();
  healthPoints = Math.floor(Math.random() *  250) + 100;
  
     $(".health").text(healthPoints);
  machinechar = true;

});

///select your enemy click fuctions Below
$(".selectdefender").click(function(){
  $(".selectdefender1").hide();
  $(".selectdefender3").hide();
  $(".selectdefender2").hide();
    $(".selectdefender").hide();
  $(".defender").show();
  $(".alert").show();
  
   ehealthPoints = Math.floor(Math.random() * 250) + 100;
   $(".ehealth").text(ehealthPoints);
  dinoenemy = true;

 });
$(".selectdefender2").click(function(){
  $(".selectdefender1").hide();
  $(".selectdefender3").hide();
  $(".selectdefender2").hide();
    $(".selectdefender").hide();
  $(".defender2").show();

   ehealthPoints = Math.floor(Math.random() * 250) + 100;
   $(".ehealth").text(ehealthPoints);
  monkeyenemy = true;
});
$(".selectdefender3").click(function(){
  $(".selectdefender1").hide();
  $(".selectdefender3").hide();
  $(".selectdefender2").hide();
    $(".selectdefender").hide();
  $(".defender3").show();
  $(".alert").show();
  
    ehealthPoints = Math.floor(Math.random() * 250) + 100;
   $(".ehealth").text(ehealthPoints);
   machineenemy = true;
});
$(".selectdefender1").click(function(){
  $(".selectdefender1").hide();
  $(".selectdefender3").hide();
  $(".selectdefender2").hide();
    $(".selectdefender").hide();
  $(".defender1").show();
  $(".alert").show();

   ehealthPoints = Math.floor(Math.random() * 250) + 100;
   $(".ehealth").text(ehealthPoints);
   lukeenemy = true;
});


 
  function dinosaurAttacker() {
   attackPower = Math.floor(Math.random() * (13 - 1) + 1);
   counterAttackPower = Math.floor(Math.random() * (13 - 1) + 1);
  }


//Attack fuction

$(".attack").on("click",function() {
	if(lukeenemy == dinochar ){
		$(".list-group").show();
		dinosaurAttacker();
		healthPoints = healthPoints - attackPower;
		$(".strike").text("yout strike power is " + attackPower);
		$(".health").text(healthPoints);
		ehealthPoints = ehealthPoints - counterAttackPower;
		$(".counter").text("the enemy counter stike " + counterAttackPower);
		$(".ehealth").text(ehealthPoints);

		
	}
	else if (healthPoints == 0){
      $(".health").text("You got your ass whooped");}
    
});


    
     if (healthPoints = 0){
      $(".health").text("You got your ass whooped");
}
else if (ehealthPoints = 0){
	$(".ehealth").text("You Lost");
}
else{}
