

require([
  "esri/config",
  "esri/Map",
  "esri/views/MapView",
  "esri/Graphic",
  "esri/layers/GraphicsLayer",
  "esri/widgets/BasemapToggle",
  "esri/widgets/BasemapGallery",
  "esri/layers/FeatureLayer"
], (esriConfig, Map, MapView, Graphic, GraphicsLayer, BasemapToggle, BasemapGallery, FeatureLayer) => {
  // Create a 2D map instead of a 3D scene
  const map = new Map({
    basemap: "streets"
  });

  const view = new MapView({
    container: "viewDiv",
    map: map,
    center: [-118.80500, 34.02700],
    zoom: 13,
    constraints: {
      snapToZoom: false
    }
  });

  const layer = new FeatureLayer({
    url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/Census/MapServer/3"
  });

  // Add the layer to the map
  map.add(layer);

  // Function to toggle the layer visibility
  function toggleLayerVisibility() {
    layer.visible = !layer.visible;
  }

  // Event listener to toggle the layer visibility when the button is clicked
  const toggleButton = document.getElementById("toggleButton");
  toggleButton.addEventListener("click", toggleLayerVisibility);

  const basemapToggle = new BasemapToggle({
    view: view,
    nextBasemap: "arcgis-imagery"
  });
  view.ui.add(basemapToggle, "bottom-right");

  const basemapGallery = new BasemapGallery({
    view: view,
    source: {
      query: {
        title: '"World Basemaps for Developers" AND owner:esri'
      }
    }
  });
  view.ui.add(basemapGallery, "top-right"); // Add to the view
});



  


window.addEventListener('DOMContentLoaded', (event) => {
  var watchVideoBtn = document.getElementById("watch");

  // Add click event listener to the button
  watchVideoBtn.addEventListener("click", function() {
    // Set the YouTube video link (replace "YOUR_VIDEO_LINK" with your actual video link)
    var videoLink = "https://www.youtube.com/watch?v=X_t56Qqv-EU";

    // Open the video in a new tab
    window.open(videoLink, "_blank");
  });
});