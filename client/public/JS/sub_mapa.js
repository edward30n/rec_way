$(function(){
    var lat_original = 4.733583043013866;
    var lng_original = -74.08521072405183;
    var zoom = 20;
    var map = L.map('sub_map').setView([lat_original,lng_original], zoom);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    var marker = L.marker([lat_original,lng_original]).addTo(map);
    //map.scrollWheelZoom.disable(); // Deshabilita el zoom con la rueda del ratón
    //map.doubleClickZoom.disable();  // Deshabilita el zoom al hacer doble clic
    //map.dragging.disable();        // Deshabilita el arrastre del mapa
    var circle = L.circle([lat_original,lng_original], {
    color: 'red',        // Color del borde del círculo
    fillColor: 'brown',    // Color de relleno del círculo
    fillOpacity: 0.5,    // Opacidad del relleno
    radius: 10           // Radio en metros
    }).addTo(map);
});