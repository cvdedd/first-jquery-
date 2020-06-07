$(document).ready( function(){
    
    $(".headers").append('<span class="close"> X </span>');
    
       $(".close").click(function(){
            $(this).parents(".headers").fadeOut(1000);
            
        });
    
 $(".info-things").hide();
    
    $(".faq-el h3").click(function(){
          $(this).next(".info-things").slideToggle();
    });

    
    $("#learn").click(function(){
               $(".linkzy").load("learn-more.html");
    });
    
         
});