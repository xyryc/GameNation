// Array of background images
const images = [
  "./images/nfs.jpg",
  "./images/valorant.jpg",
  "./images/cod.jpg",
];

let currentIndex = 0;

function changeBackground() {
  // Get the background element
  const backgroundElement = document.getElementById("background");

  // Update the background image
  backgroundElement.style.backgroundImage = `url(${images[currentIndex]})`;

  // Move to the next image in the array, looping back if necessary
  currentIndex = (currentIndex + 1) % images.length;
}

// Change the background every 5 seconds (5000 milliseconds)
setInterval(changeBackground, 5000);
