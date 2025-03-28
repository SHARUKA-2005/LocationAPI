// Initialize the map
var map = L.map('map').setView([8.7642, 78.1348], 13); // Center at Tuticorin

// Load OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Load crime data from backend
fetch("/crime-data")
    .then(response => response.json())
    .then(data => {
        var heatArray = [];

        data.forEach(crime => {
            // Add red markers for crime locations
            L.marker([crime.lat, crime.lng], {
                icon: L.icon({
                    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/RedDot.svg',
                    iconSize: [12, 12]
                })
            })
            .addTo(map)
            .bindPopup(crime.description);

            // Store data for heatmap
            heatArray.push([crime.lat, crime.lng, 0.5]); // 0.5 = intensity
        });

        // Add heatmap overlay
        L.heatLayer(heatArray, { radius: 25, blur: 15, maxZoom: 13 }).addTo(map);
    });

// Track user's live location
function showLocation(position) {
    var userLat = position.coords.latitude;
    var userLng = position.coords.longitude;

    // Blue marker for user's current position
    var userMarker = L.circleMarker([userLat, userLng], {
        color: 'blue',
        radius: 7
    }).addTo(map)
    .bindPopup("You are here").openPopup();

    checkCrimeZone(userLat, userLng);
}

// Check if user is in a crime zone
function checkCrimeZone(userLat, userLng) {
    fetch("/crime-data")
        .then(response => response.json())
        .then(data => {
            data.forEach(crime => {
                var distance = getDistance(userLat, userLng, crime.lat, crime.lng);
                if (distance < 0.5) { // 0.5 km radius alert
                    alert("⚠️ Warning! You are near a high-crime area: " + crime.description);
                    suggestSaferRoute(userLat, userLng);
                }
            });
        });
}

// Calculate distance between two coordinates
function getDistance(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of Earth in km
    var dLat = (lat2 - lat1) * Math.PI / 180;
    var dLon = (lon2 - lon1) * Math.PI / 180;
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon/2) * Math.sin(dLon/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}

// Suggest a safer route
function suggestSaferRoute(userLat, userLng) {
    alert("Redirecting to a safer route...");
    window.location.href = `https://www.openstreetmap.org/directions?from=${userLat},${userLng}&to=8.7600,78.1200`;
}

// Handle location errors
function errorHandler(err) {
    console.log("Error getting location:", err);
}

// Start tracking user's location
if (navigator.geolocation) {
    navigator.geolocation.watchPosition(showLocation, errorHandler);
} else {
    alert("Geolocation is not supported.");
}
