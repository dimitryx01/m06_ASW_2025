// diccionario de traducciones
const translations = {
  "main-title": {
    ca: "benvinguda al projecte",
    es: "bienvenido al proyecto",
    en: "welcome to the project"
  },
  "welcome-message": {
    ca: "aquesta es la pagina principal",
    es: "esta es la pagina principal",
    en: "this is the main page"
  },
  "main-button": {
    ca: "comencem",
    es: "empezar",
    en: "start"
  }
}

// funcion que cambia todos los textos
function setLanguage(lang) {
  for (const idElemento in translations) {
    const nodo = document.getElementById(idElemento)
    if (!nodo) continue

    const traduccionesElemento = translations[idElemento]
    const textoTraducido = traduccionesElemento[lang]

    if (textoTraducido) {
      nodo.innerHTML = textoTraducido
    }
  }
}

// guarda la preferencia en localstorage
function savePreference(lang) {
  localStorage.setItem("userLang", lang)
}

// carga la preferencia al entrar en la pagina
function loadPreference() {
  let idiomaPreferido = localStorage.getItem("userLang")

  if (!idiomaPreferido) {
    idiomaPreferido = "es"
  }

  setLanguage(idiomaPreferido)
}

// maneja los clics en los botones de idioma
function configurarSelectorIdiomas() {
  const contenedorSelector = document.getElementById("selector-idiomas")

  contenedorSelector.addEventListener("click", function (evento) {
    const boton = evento.target

    if (!boton.dataset) return

    const idiomaSeleccionado = boton.dataset.lang
    if (!idiomaSeleccionado) return

    setLanguage(idiomaSeleccionado)
    savePreference(idiomaSeleccionado)
  })
}

// se ejecuta cuando la pagina esta lista
window.onload = function () {
  configurarSelectorIdiomas()
  loadPreference()
}