var map = L.map("map").setView([41.299496, 69.240074], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "© OpenStreetMap",
}).addTo(map);

var evosIcon = L.icon({
  iconUrl: "./Images/EVOS.png",
  iconSize: [95, 95],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
});


L.marker([41.269717, 69.262884], { icon: evosIcon }).addTo(map);
L.marker([41.326516, 69.326602], { icon: evosIcon }).addTo(map);
L.marker([41.311948, 69.332611], { icon: evosIcon }).addTo(map);
L.marker([41.284107, 69.348707], { icon: evosIcon }).addTo(map);