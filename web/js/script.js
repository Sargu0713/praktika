$("body").on('click', '[href*="#"]', function(e){

  $('html,body').stop().delay(500).animate({ scrollTop: $(this.hash).offset().top-100  }, 700);
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - 120 }, 200);



  e.preventDefault();
});

    var kn = $("#don")
    var zone=$("#zone");
$('#don').click(function() {
   
     kn.animate({opacity:0},500); 
    
     zone.delay(700).animate({left:0},700);

  });


$('#cd').click(function(){
  zone.animate({left:-510},700);
   kn.delay(700).animate({opacity:1},300); 
})



$(document).ready(function () {
    let 
        sv = $("#sv"), 
        f = function () {
            sv.css('opacity', 0.6);
            sv.animate({opacity:0.1});
            sv.animate({opacity:0.3},400);
            sv.animate({opacity:0.2},1200);
            sv.animate({opacity:0.4},700);
            sv.animate({opacity:0.6},{duration:1200, done: f});
        };
    
    f();
});


$(document).ready(function () {
    let 
        bl = $("#bl"), 
        f = function () {
            bl.css('opacity', 0.3);
            bl.animate({opacity:0.2},1500);
            bl.animate({opacity:0.8},300);
            bl.animate({opacity:0.6},500);
            bl.animate({opacity:0.8},300);
            bl.animate({opacity:0.3},{duration:2000, done: f});
        };
    
    f();
});

