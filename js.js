// JavaScript dla nawigacji, przewijania strony do odpowiednich sekcji po kliknięciu linku
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const sectionId = this.getAttribute('href').substr(1);
    document.getElementById(sectionId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
