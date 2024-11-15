import ScrollReveal from 'scrollreveal';

export default defineNuxtPlugin(() => {
  if (process.client) {
    /*=============== SHOW MENU ===============*/
    const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close");

    /*=========MENU SHOW=============*/
    if (navToggle) {
      navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("show-menu");
      });
    }

    /*=========ESCODNER MENU=============*/
    if (navClose) {
      navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
      });
    }

    /*=============== REMOVE MENU MOBILE ===============*/
    const navLink = document.querySelectorAll(".nav-link");
    const linkAction = () => {
      document.getElementById("nav-menu");
      navMenu.classList.remove("show-menu");
    };
    navLink.forEach((n) => n.addEventListener("click", linkAction));

    /*=============== AGREGAR DESENFOQUE AL ENCABEZADO ===============*/
    const blurHeader = () => {
      const header = document.getElementById("header");
      if (window.scrollY >= 50) {
        header.classList.add("blur-header");
      } else {
        header.classList.remove("blur-header");
      }
    };
    window.addEventListener("scroll", blurHeader);

    /*=============== CAMBIAR COLOR DEL FONDO DEL HEADER AL HACER SCROLL ===============*/
    const changeHeaderBackground = () => {
      const header = document.getElementById("header");
      if (window.scrollY >= 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", changeHeaderBackground);

    /*=============== SHOW SCROLL UP ===============*/
    const scrollUp = () => {
      const scrollUp = document.getElementById("scroll-up");
      if (window.scrollY >= 350) {
        scrollUp.classList.add("show-scroll");
      } else {
        scrollUp.classList.remove("show-scroll");
      }
    };
    window.addEventListener("scroll", scrollUp);

    /*=============== Enlace activo de la sección de desplazamiento ===============*/
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav__list a");

    const scrollActive = () => {
      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 58;
        const sectionId = section.getAttribute("id");

        const navLink = document.querySelector(`.nav__list a[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLink.classList.add("active-link");
        } else {
          navLink.classList.remove("active-link");
        }
      });
    };

    window.addEventListener("scroll", scrollActive);

    /*=============== SCROLL QUE REVELA ANIMACION ===============*/
    const sr = ScrollReveal({
      distance: "60px",
      duration: 2500,
      delay: 400,
      reset: false,
    });

    sr.reveal(".home__data, .explore__data", {
      interval: 100,
    });
    sr.reveal(".home__card", {
      delay: 600,
      distance: "80px",
      interval: 100,
    });
    sr.reveal(".about__data, .join__image", {
      origin: "center",
      mobile: false,
    });
    sr.reveal(".about__image, .join__data", {
      origin: "left",
      mobile: false,
    });
    sr.reveal(".popular__card", {
      interval: 200,
      mobile: true,
    });
    sr.reveal(".explore__content", {
      interval: 200,
      mobile: true,
    });
  }
});
