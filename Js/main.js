// Het zet de bar op 0%
document.getElementById('myBar').style.width = '0%';

// Het is een functie dat de bar update om te kijken hoe ver het is met scrollen.
const updateProgressBar = () => {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.getElementById('myBar').style.width = `${scrolled}%`;
};

// Voegt een scroll event aan de update functie om de proces te laten zien
window.addEventListener('scroll', updateProgressBar);


