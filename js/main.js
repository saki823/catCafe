$(function(){
    $(".nav_btn").on("click",function(){
      $('.nav_btn').toggleClass('open');
          $('#headerinner').toggleClass('open');
      
    });

  });


function slideSwitch() {
   var $active = $('#mainvisual img.active');

   if ( $active.length == 0 ) $active = $('#mainvisual img:last');

   var $next =  $active.next().length ? $active.next()
      : $('#mainvisual img:first');

   $active.addClass('last-active');

   $next.css({opacity: 0.0})
      .addClass('active')
      .animate({opacity: 1.0}, 1000, function() {
           $active.removeClass('active last-active');
      });
}

$(function() {
   setInterval( "slideSwitch()", 3000 );
});