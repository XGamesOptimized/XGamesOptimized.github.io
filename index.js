const sidebar = document.querySelector(".sidebar");
const sidebarToggler = document.querySelector(".sidebar-toggler");

sidebarToggler.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
});

const homeCuadro = document.getElementById('home-cuadro');

window.onload = function() {
  homeCuadro.style.display = 'block';
}

function home(){
  document.getElementById("home-cuadro").style.display = "block";
  document.getElementById("home-game").style.display = "none";
  document.getElementById("home-soft").style.display = "none";
  document.getElementById("home-plus").style.display = "none";
  document.getElementById("home-help").style.display = "none";
};

function game(){
  document.getElementById("home-cuadro").style.display = "none";
  document.getElementById("home-game").style.display = "block";
  document.getElementById("home-soft").style.display = "none";
  document.getElementById("home-plus").style.display = "none";
  document.getElementById("home-help").style.display = "none";
};

function soft(){
  document.getElementById("home-cuadro").style.display = "none";
  document.getElementById("home-game").style.display = "none";
  document.getElementById("home-soft").style.display = "block";
  document.getElementById("home-plus").style.display = "none";
  document.getElementById("home-help").style.display = "none";
};

function plus(){
  document.getElementById("home-cuadro").style.display = "none";
  document.getElementById("home-game").style.display = "none";
  document.getElementById("home-soft").style.display = "none";
  document.getElementById("home-plus").style.display = "block";
  document.getElementById("home-help").style.display = "none";
};

function help(){
  document.getElementById("home-cuadro").style.display = "none";
  document.getElementById("home-game").style.display = "none";
  document.getElementById("home-soft").style.display = "none";
  document.getElementById("home-plus").style.display = "none";
  document.getElementById("home-help").style.display = "block";
};


