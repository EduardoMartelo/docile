// menu hamburguer

const btnMob = document.getElementById("btn-mob");

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
  const active = nav.classList.contains("active");
  event.currentTarget.setAttribute("aria-expended", active);
  if (active) {
    event.currentTarget.setAttribute("aria-label", "Fechar Menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir Menu");
  }
}

btnMob.addEventListener("click", toggleMenu);
btnMob.addEven;

// #### Animação ####
// Debounce do Lodash
debounce = function (func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

// Função Animar (Javascript)

const target = document.querySelectorAll("[data-anime]");
const animationClass = "animate";

function animeScroll() {
  const windowTop = window.pageYOffset + (window.innerHeight * 3) / 3;
  target.forEach(function (e) {
    if (windowTop > e.offsetTop) {
      e.classList.add(animationClass);
    }
  });
}

animeScroll();

if (target.length) {
  window.addEventListener(
    "scroll",
    debounce(function () {
      animeScroll();
    }, 200)
  );
}

// #### Função de volta ao topo ####

window.onscroll = function () {
  showBackTop();
};

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//Função aparecer botão após scroll de 100px
function showBackTop() {
  const btn = document.querySelector("#goToBack");

  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    btn.classList.add("active");
  } else {
    btn.classList.remove("active");
  }
}
