/* _____________________________ Menu Burger ________________________________*/

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

/* _____________________________ Diaporama ________\\________________________*/

// variables

let arrowL = document.getElementById("prev");
let arrowR = document.getElementById("next");
let dots = document.querySelectorAll(".dot");
let slideIndex = 1;

// Mise en place des écouteurs et appels de fonctions

arrowL.addEventListener("click", () => plusSlides(-1));
arrowR.addEventListener("click", () => plusSlides(1));

dots.forEach(function (dot, index) {
  dot.addEventListener("click", () => currentSlide(index + 1));
});

showSlides(slideIndex);

// Contrôles via les chevrons Next/previous
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Contrôles via les Thumbnail image
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
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

/* _____________________________ Formulaire _________________________________*/
const btnFormulaire = document.getElementById("btnForm");
const indication = document.getElementById("indication");

btnFormulaire.addEventListener("click", function (e) {
  e.preventDefault();

  try {
    if (validerFormulaire()) {
      indication.textContent = "Votre formulaire a été envoyé";
      // monFormulaire.submit()  //soumission du formulaire
    }
  } catch (erreur) {
    indication.textContent = `${erreur.message}`;
  }
});

function validerFormulaire() {
  const firstName = document.getElementById("firstname");
  const lastName = document.getElementById("lastname");
  const email = document.getElementById("email");
  const objet = document.getElementById("objet");
  const message = document.getElementById("message");
  const rgpdCheckbox = document.getElementById("rgpd");

  indication.classList.remove("erreur"); // Supprimer toute classe d'erreur précédente

  if (firstName.value === "" || lastName.value === "") {
    indication.classList.add("erreur");
    throw new Error("Les champs Prénom et Nom ne peuvent être vides");
  }

  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!regexEmail.test(email.value)) {
    indication.classList.add("erreur");
    throw new Error("Vous devez saisir une adresse email valide");
  }

  if (objet.value === "") {
    indication.classList.add("erreur");
    throw new Error("L'objet du message doit être renseigné");
  }

  if (message.value === "") {
    indication.classList.add("erreur");
    throw new Error("Un message doit être rédigé");
  }

  if (!rgpdCheckbox.checked) {
    indication.classList.add("erreur");
    throw new Error(
      "Vous devez accepter la politique de confidentialité du site"
    );
  }

  // Si tout est OK, soumission du formulaire
  return true;
}

/* ______________________________ Footer ___________________________________*/

// Gestion du footer au scroll (masquage progressif)

const footer = document.querySelector("footer");
let prevPosition = window.scrollY;

window.onscroll = () => {
  const diff = window.scrollY - prevPosition;
  prevPosition = window.scrollY;

  if (diff > 0) {
    //scroll vers le bas
    footer.classList.add("hidden");
  } else {
    //scroll vers le haut
    footer.classList.remove("hidden");
  }
};
