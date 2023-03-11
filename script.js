$(document).ready(function() {
    $(".hamburger").click(function() {
      $(this).toggleClass("clicked");
      $(".center").slideToggle();
    });
  });
  
