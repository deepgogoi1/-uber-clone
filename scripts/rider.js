let map = L.map('map').setView([28.61, 77.21], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

navigator.geolocation.getCurrentPosition(pos => {
  const lat = pos.coords.latitude;
  const lng = pos.coords.longitude;
  L.marker([lat, lng]).addTo(map).bindPopup("You are here").openPopup();
});

function requestRide() {
  navigator.geolocation.getCurrentPosition(pos => {
    const ride = {
      riderId: "rider1", // Replace with real UID
      pickup: {
        lat: pos.coords.latitude,
        lng: pos.coords.longitude
      },
      status: "waiting"
    };
    firebase.database().ref("rideRequests").push(ride);
    alert("Ride Requested!");
  });
}
