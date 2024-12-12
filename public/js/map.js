
  // Initialize the map
  const map = L.map('map').setView([40, -74.5], 9); // Coordinates [latitude, longitude]

  // Add OpenStreetMap tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // Add a marker
  L.marker([28.7041, 77.1025]).addTo(map)
    .bindPopup('Listing Location')
    .openPopup();
 
 
 