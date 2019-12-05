function test(a)
{
  var modal = document.getElementById('myModal');
  var img = document.getElementById('myImg');
  console.log(img);
  var modalImg = document.getElementById("img1");
  var captionText = document.getElementById("caption");
  var close = document.getElementById("close");
  modal.style.display = "block";
  modalImg.src = a;
  close.onclick = function() { 
  modal.style.display = "none";
  }
}