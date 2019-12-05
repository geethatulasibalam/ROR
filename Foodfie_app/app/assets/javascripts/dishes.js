$(document).ready(function(){
	var counter = 1;
  $(".see-more-btn").click(function(){
		counter ++;
		$.ajax({
		 	url: '/',
		 	type: 'GET',
			dataType: 'script',
			data: {"page": counter}
		}).then(function(){
			if(counter == 3){
				$(".see-more-btn").hide();
			}
		}); 
	});
  $("#filter").change(function(){
  $.ajax({
 		  url: '/dishes/sort',
 		  type:'GET',
 		  dataType: "script",
 		  data:{filter: this.value},
 		  success: function(response){	
 		  },
 	  });
  });
  $("#ratings").change(function(){
  	$.ajax({
 		  url: '/dishes/sort',
 		  type:'GET',
 		  dataType: "script",
 		  data:{ratings: this.value},
 		  success: function(response){	
 		  },
 	  });
  });
  $(".e-checkbox").click(function(){
    var checkedBoxes = document.querySelectorAll('input[class=e-checkbox]:checked');
    var ids = []
    for (var i = 0; i < checkedBoxes.length; i++) {
      ids.push(checkedBoxes[i].value)
    }
    $.ajax({
 		  url: '/dishes/sort',
 		  type:'GET',
 		  dataType: "script",
 		  data:{categoryfilter: ids},
 		  success: function(response){	
 		  },
 	  });
  });
  $( "#range-slider").slider({
    step: 1,
    range: true,
    min: 0,
    max: 1000,
    values: [ 0, 1000 ],
    slide: function( event, ui ){
      var minprice = ui.values[0];
      var maxprice = ui.values[1];
      console.log(minprice,maxprice);
      $("#min-amount").text(ui.values[0]);
      $("#max-amount").text(ui.values[1]);
      $.ajax({
        url: '/dishes/sort',
        type:'GET',
        dataType: "script",
        data:{min_rangefilter: minprice,max_rangefilter: maxprice},
        success: function(response){  
        },
      });
    }
  });
});
function initMap(lat, lng) {
  var myCoords = new google.maps.LatLng(lat, lng);
  var mapOptions = {
  center: myCoords,
  zoom: 14
  };
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);
  var marker = new google.maps.Marker({
    position: myCoords,
    map: map
  });
}