/*global $*/
var masterHeight = $("#firstImage").height();
var iframeHeight = masterHeight - 45;
function sizeImages() {
      masterHeight = $("#firstImage").height();
      iframeHeight = masterHeight - 45;
      $('#secondImage').css('min-height', masterHeight+'px');
      $('.3image').css('min-height', (iframeHeight)+'px');
      $('.4image').css('min-height', iframeHeight+'px');
      $('.5image').css('min-height', iframeHeight+'px');
      $('.6image').css('min-height', iframeHeight+'px');
   }
   
window.onresize = sizeImages;
$(document).ready(function() {
   sizeImages();

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
   $("#skillsLink").click(function() {
      scrollToAnchor('skills');
   });
   $("#aboutLink").click(function() {
      scrollToAnchor('about');
   });
   $("#contactLink").click(function() {
      scrollToAnchor('contact');
   });
   
});