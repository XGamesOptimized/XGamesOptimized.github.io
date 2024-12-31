// Seleccionamos los cuadros
const homeCuadro = document.getElementById('home-cuadro');
const gamesCuadro = document.getElementById('games-cuadro');
const softwareCuadro = document.getElementById('software-cuadro');
const plusCuadro = document.getElementById('plus-cuadro');
const helpCuadro = document.getElementById('help-cuadro');

// Mostramos el cuadro de inicio por defecto
window.onload = function() {
  homeCuadro.style.display = 'block';
}

// Eventos para cada enlace
document.getElementById('home').addEventListener('click', () => {
  homeCuadro.style.display = 'block';
  gamesCuadro.style.display = 'none';
  softwareCuadro.style.display = 'none';
  plusCuadro.style.display = 'none';
  helpCuadro.style.display = 'none';
});

document.getElementById('games').addEventListener('click', () => {
  homeCuadro.style.display = 'none';
  gamesCuadro.style.display = 'block';
  softwareCuadro.style.display = 'none';
  plusCuadro.style.display = 'none';
  helpCuadro.style.display = 'none';
});

document.getElementById('software').addEventListener('click', () => {
  homeCuadro.style.display = 'none';
  gamesCuadro.style.display = 'none';
  softwareCuadro.style.display = 'block';
  plusCuadro.style.display = 'none';
  helpCuadro.style.display = 'none';
});

document.getElementById('plus').addEventListener('click', () => {
  homeCuadro.style.display = 'none';
  gamesCuadro.style.display = 'none';
  softwareCuadro.style.display = 'none';
  plusCuadro.style.display = 'block';
  helpCuadro.style.display = 'none';
});

document.getElementById('help').addEventListener('click', () => {
  homeCuadro.style.display = 'none';
  gamesCuadro.style.display = 'none';
  softwareCuadro.style.display = 'none';
  plusCuadro.style.display = 'none';
  helpCuadro.style.display = 'block';
});