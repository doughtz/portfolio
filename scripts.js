/*global $*/
$(document).ready(function() {
   $("#twitter").click(function() {
       alert("new ");
   });
   function scrollToAnchor(aid){
      var aTag = $("a[name='"+ aid +"']");
      $('html,body').animate({scrollTop: aTag.offset().top},'slow');
   }

   $("#portfolioLink").click(function() {
      scrollToAnchor('portfolio');
   });
   $("#topPage").click(function() {
      scrollToAnchor('topPage');
   });
   $("#aboutLink").click(function() {
      scrollToAnchor('about');
   });
   $("#contactLink").click(function() {
      scrollToAnchor('contact');
   });
});