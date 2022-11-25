//change slide by button
document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}

document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}
//Autoplay slide
var autoplayInterval = setInterval(function() {

    // Get element via id and click next
    document.getElementById("next").click();
    
   
  }, 5000); // Do this every 5 second, increase this!

// Stop function added to button
function stopAutoplay() {

  // Stop the autoplay
  clearInterval(autoplayInterval);

}

//maps
function initMap() {
  var myOptions = {
      zoom: 500,
      center: new google.maps.LatLng(21.0477359,105.7495967),
      mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById('map'), myOptions);
  marker = new google.maps.Marker({
      map: map,
      position: new google.maps.LatLng(21.0477359,105.7495967)
  });
  infowindow = new google.maps.InfoWindow({
      content: '<img src="<?php echo get_template_directory_uri() ?>/images/logo-vn4u.png" alt="" style="width:90px; "><div>Công ty Vn4U</div>'
  });
  google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map, marker);
  });
  infowindow.open(map, marker);
}