// Open-Close details tag
// Fetch all the details element.
const details = Array.from(document.querySelectorAll("details"));

// Add the onclick listeners.
details.forEach(targetDetail => {
  targetDetail.addEventListener("click", () => {
    // Close all the details that are not targetDetail.
    details.forEach(detail => {
      if (detail !== targetDetail) {
        detail.removeAttribute("open");
      }
    });
  });
});

//Carousel
new Glide(".glide", {
  type: "slides",
  startAt: 0,
  perView: 3,
  autoplay: 3000,
  hoverpause: true,
  bound: true,
}).mount();

