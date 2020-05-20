const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");

  burger.addEventListener("click", () => {
    //Toggle Nav
    nav.classList.toggle("nav-active");

    //Burger animation
    burger.classList.toggle("toggle");
  });
};

const app = () => {
  navSlide();
  //other functions to call can go here or maybe put them in a DOM loaded function;
};

app();
