$(function(){
   var header = $('.header');
   var stickyHeaderTop = header.offset().top;
          
   $(window).scroll(function(){
      if ($(window).scrollTop() > stickyHeaderTop) {
        header.css({position: 'fixed', top: '0px'});
      } else {
        header.css({position: 'relative', top: '0px'});
      }
   });
});
