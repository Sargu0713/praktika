$('#spl1').click(function(){
  $("#zz").animate({right:-510},700).queue(function(){
  $("#zz").replaceWith("<img src='images/skill1.png' class='imgg' style='right:-510px' id='zz'>").queue(function(){
  $('#zz').animate({right:20},700);
 $('#ops').replaceWith("<p class='po2' id='ops'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur massa elit, convallis ac ante vitae, venenatis fringilla ipsum. Praesent volutpat, tortor sed ullamcorper euismod, ex quam pulvinar arcu, at semper tortor augue eu felis. </p>")
  $('#op').animate();
  });

$(this).dequeue()

})

})

$('#spl2').click(function(){
  $("#zz").animate({right:-510},700).queue(function(){
  $("#zz").replaceWith("<img src='images/skill2.png' class='imgg' style='right:-510px' id='zz'>").queue(function(){
  $('#zz').animate({right:20},700);
  $('#ops').replaceWith("<p class='po2' id='ops'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur massa elit, convallis ac ante vitae, venenatis fringilla ipsum. Praesent volutpat, tortor sed ullamcorper euismod, ex quam pulvinar arcu, at semper tortor augue eu felis. </p>")
  });

$(this).dequeue()

})

})

$('#spl3').click(function(){
  $("#zz").animate({right:-510},700).queue(function(){
  $("#zz").replaceWith("<img src='images/skill3.png' class='imgg' style='right:-510px' id='zz'>").queue(function(){
  $('#ops').replaceWith("<p class='po2' id='ops'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur massa elit, convallis ac ante vitae, venenatis fringilla ipsum. Praesent volutpat, tortor sed ullamcorper euismod, ex quam pulvinar arcu, at semper tortor augue eu felis. </p>")
  $('#zz').animate({right:20},700);
  });

$(this).dequeue()

})

})
$('#spl4').click(function(){
  $("#zz").animate({right:-510},700).queue(function(){
  $("#zz").replaceWith("<img src='images/skill4.png' class='imgg' style='right:-510px' id='zz'>").queue(function(){
 $('#ops').replaceWith("<p class='po2' id='ops'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur massa elit, convallis ac ante vitae, venenatis fringilla ipsum. Praesent volutpat, tortor sed ullamcorper euismod, ex quam pulvinar arcu, at semper tortor augue eu felis. </p>")
  $('#zz').animate({right:20},700);
  });

$(this).dequeue()

})

})