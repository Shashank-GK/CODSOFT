document.addEventListener("DOMContentLoaded", function () {
 
  var carousel = document.getElementById('carouselExampleCaptions');
  var carouselInstance = new bootstrap.Carousel(carousel, {
    interval: 3000 // Slide every 3 seconds
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Add click event listeners to the .hover-zoom elements
  var hoverZoomElements = document.querySelectorAll(".hover-zoom");
  hoverZoomElements.forEach(function (element) {
    element.addEventListener("click", function () {
      // Scroll to the top of the clicked element smoothly
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth"
      });
    });
  });
});


//for video
document.addEventListener('DOMContentLoaded', function () {
  var video = document.getElementById('autoplay-video');
  video.play();
});
