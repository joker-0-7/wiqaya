const links = document.querySelectorAll("nav ul li a");

links.forEach((link) => {
  link.onclick = () => {
    links.forEach((link) => {
      link.classList.remove("active");
    });
    link.classList.add("active");
  };
});

setInterval(() => {
  document.querySelector("#carouselExample2 .carousel-control-next").click();
}, 3000);
