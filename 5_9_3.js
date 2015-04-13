jQuery(document).ready(function() { 
    var map = L.map('map');
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    map.locate({setView: true, maxZoom: 18});
    
    map.on('locationfound', function(e) {
        var radius = e.accuracy / 2;
        L.marker(e.latlng).addTo(map)
        .bindPopup("Localización precisa a " + radius + " metros desde este punto").openPopup();
        L.circle([e.latlng.lat, e.latlng.lng], radius).addTo(map);
    });
    var marker = L.marker([40.2838, -3.8215]).addTo(map);
    marker.bindPopup("ETSIT URJC<br>Aulario III").openPopup();

    
});
