$(function() {
  // Bind Click event to the drop down navigation button
  $(".nav-button").click(function() {
    /*  Toggle the CSS closed class which reduces the height of the UL thus 
        hiding all LI apart from the first */
    $(this).parent().parent().toggleClass("closed");
    $("#whiteout").toggleClass("showverlay");
  });

  $("#whiteout").click(function() {
    /*  Toggle the CSS closed class which reduces the height of the UL thus 
        hiding all LI apart from the first */
    $(".drop-down").toggleClass("closed");
    $("#whiteout").toggleClass("showverlay");
    $(".navTrigger").toggleClass('active');
  });

  $(".dditem").click(function() {
    /*  Toggle the CSS closed class which reduces the height of the UL thus 
        hiding all LI apart from the first */
    $(".drop-down").toggleClass("closed");
    $("#whiteout").toggleClass("showverlay");
    $(".navTrigger").toggleClass('active');
  });
    
});
