let map = L.map('map').setView([28.61, 77.21], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

navigator.geolocation.getCurrentPosition(pos => {
  const lat = pos.coords.latitude;
  const lng = pos.coords.longitude;
  L.marker([lat, lng]).addTo(map).bindPopup("Driver here").openPopup();
});

const requestList = document.getElementById("requests");

firebase.database().ref("rideRequests").on("child_added", snap => {
  const ride = snap.val();
  const key = snap.key;

  if (ride.status === "waiting") {
    const li = document.createElement("li");
    li.innerHTML = `📍 Ride requested at (${ride.pickup.lat}, ${ride.pickup.lng})
      <button onclick="acceptRide('${key}')">Accept</button>`;
    requestList.appendChild(li);
  }
});

function acceptRide(key) {
  firebase.database().ref("rideRequests/" + key).update({
    status: "accepted",
    driverId: "driver1"
  });
  alert("Ride Accepted!");
}
