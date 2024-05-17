//mettre en place une fonction de cookies

function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// fonction d'avoir de cookies

function getCookie(name) {
  let nameEQ = name + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function eraseCookie(name) {
  document.cookie = name + "=; Max-Age=-99999999;";
}

// Ajouter un cookie
setCookie("username", "NesrineYAH", 7); // Le cookie "username" avec la valeur "JohnDoe" qui expire dans 7 jours

// Lire un cookie
let username = getCookie("username");
if (username) {
  console.log("Hello " + username);
} else {
  console.log("Cookie not found");
}

// Supprimer un cookie
eraseCookie("username");
