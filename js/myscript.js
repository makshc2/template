function init_map() {
    var myOptions = {
        zoom: 16,
        center: new google.maps.LatLng(50.0260326, 36.21685100000002),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
    marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(50.0260326, 36.21685100000002)
    });
    infowindow = new google.maps.InfoWindow({
        content: '<strong>IT Cloud</strong><br>Харьков, ул.Отакара Яроша, 18а<br>'
    });
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
    });
    infowindow.open(map, marker);
}
google.maps.event.addDomListener(window, 'load', init_map);