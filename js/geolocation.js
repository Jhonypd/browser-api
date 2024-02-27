/** @format */

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition);
  console.log(navigator.geolocation);
}

function showPosition(position) {
  const getLongitude = position.coords.longitude;
  const getLatitude = position.coords.latitude;

  const url = `https://maps.google.com/maps?width=600&amp;height=500&amp;hl=en&amp;q=${getLongitude},${getLatitude}+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed`;

  window.open(url, "map");
}
