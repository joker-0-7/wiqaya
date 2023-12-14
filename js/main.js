const links = document.querySelectorAll("nav ul li a");
const toUp = document.querySelector(".to-up");

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
}, 5000);

window.onscroll = () => {
  if (window.scrollY > "200") {
    toUp.classList.add("show");
  } else {
    toUp.classList.remove("show");
  }
};

toUp.onclick = () => {
  window.scrollTo(0, 0);
};
