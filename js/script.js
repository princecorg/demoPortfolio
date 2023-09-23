/* Ajout ou suppression de la classe "responsive" au clic sur l'icône */

let menu = document.querySelector(".icon");
let switcher = true;

menu.addEventListener("click", () => {
  if (switcher) {
    menu.parentElement.classList.add("responsive");
    menu.innerHTML = '<em class="fa-solid fa-xmark"></em>';
    switcher = false;
  } else {
    menu.parentElement.classList.remove("responsive");
    menu.innerHTML = '<em class="fa fa-bars"></em>';
    switcher = true;
  }
});

/* Gestion  du diaporama */

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function controleForm() {
  if (document.getElementById("rgpd").checked === false) {
    document.getElementById("gdpr").style.color = "red";
    alert(
      "Vous devez donner votre consentement avant de soumettre le formulaire"
    );
  } else {
    document.getElementById("gdpr").style.color = "white";
    alert("Le formulaire a bien été envoyé");

    submit();
  }
}
