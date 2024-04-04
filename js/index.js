// ###############################################
// ### Random And Change Designer Animation ######
// ###############################################
const allCardDesigners = document.querySelectorAll(".trust__des__card");
const numCardDesigners = allCardDesigners.length;

const randomDesigner = () => Math.trunc(Math.random() * numCardDesigners);

const toggleDesigner = (designer) => {
  designer.classList.toggle("visible");
  designer.classList.toggle("hidden");
};

const changeDesignerAnimation = () => {
  const n = randomDesigner();
  const designers = allCardDesigners[n].querySelectorAll(".trust__des__link");
  toggleDesigner(designers[0]);
  toggleDesigner(designers[1]);
};

setInterval(changeDesignerAnimation, 3 * 1000);

// ###############################################
// ### Mobile Navigation #########################
// ###############################################
const menu = document.querySelector(".menu__btn");
const menuLine = menu.querySelectorAll(".menu__line");
const header = document.querySelector(".header");

const toggleMenu = () => header.classList.toggle("nav--open");

menu.addEventListener("click", toggleMenu);

// ###############################################
// ### Smooth Scrolling Animation ################
// ###############################################

const allLinks = document.querySelectorAll("a:link");
const logo = document.querySelector(".logo");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("nav__link"))
      header.classList.toggle("nav--open");

    if (link.classList.contains("logo__container"))
      header.classList.remove("nav--open");
  });
});
