var map = L.map("map").setView([41.299496, 69.240074], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "© OpenStreetMap",
}).addTo(map);

var geoJSON = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {},
      geometry: {
        coordinates: [
          [69.22307414372563, 41.29183041037828],
          [69.23977793565251, 41.31003923740735],
          [69.2404113753733, 41.311662204780134],
          [69.23946177235962, 41.311838060163325],
          [69.22233873278512, 41.321969231631186],
          [69.20971819465385, 41.322187807227635],
          [69.21012164658407, 41.31666600194737],
        ],
        type: "LineString",
      },
    },
  ],
};

var marker = L.marker([41.31666600194737, 69.21012164658407]).addTo(map);
marker.bindPopup("<b>Hi there my dear!</b><br>Here is my Home.").openPopup();

L.geoJSON(geoJSON).addTo(map);
