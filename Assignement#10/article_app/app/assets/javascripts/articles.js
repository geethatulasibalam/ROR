$(document).ready(function(){
  $(".post-img").click(function(){
    $("#myModal").show();
    $("#img1").attr("src",this.src);
  });
  $(".img-close").click(function(){
    $("#myModal").hide();
  });
});



