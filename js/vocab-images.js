/**
 * Hexaplas - Coordinador de Imágenes para Vocabulario
 * Este archivo mapea palabras básicas a sus ilustraciones vectoriales (SVG)
 * ubicadas en la carpeta img/vocab/
 */

const VOCAB_IMAGES = {
  // Momentos del día y tiempo
  "abend": "img/vocab/abend.svg",
  "morgen": "img/vocab/morgen.svg",
  "mittag": "img/vocab/mittag.svg",
  "mitternacht": "img/vocab/mitternacht.svg",
  "nachmittag": "img/vocab/nachmittag.svg",
  "vormittag": "img/vocab/mittag.svg",
  "uhr": "img/vocab/uhr.svg",
  "datum": "img/vocab/datum.svg",
  "monat": "img/vocab/monat.svg",

  // Saludos y cortesía
  "gruss": "img/vocab/gruss.svg",
  "gutentag": "img/vocab/gutentag.svg",
  "tschuess": "img/vocab/tschuess.svg",
  "aufwiedersehen": "img/vocab/aufwiedersehen.svg",
  "danke": "img/vocab/danke.svg",
  "bitte": "img/vocab/bitte.svg",
  "prost": "img/vocab/prost.svg",

  // Conceptos y preguntas
  "idee": "img/vocab/idee.svg",
  "frage": "img/vocab/frage.svg",
  "fragen": "img/vocab/frage.svg",
  "antwort": "img/vocab/antwort.svg",
  "antworten": "img/vocab/antwort.svg",
  "ziel": "img/vocab/ziel.svg",
  "zahl": "img/vocab/zahl.svg",
  "paar": "img/vocab/paar.svg",
  "gott": "img/vocab/gott.svg",

  // Estados y calificaciones
  "gluecklich": "img/vocab/gluecklich.svg",
  "gut": "img/vocab/gut.svg",
  "schlecht": "img/vocab/schlecht.svg",
  "offen": "img/vocab/offen.svg",
  "oeffnen": "img/vocab/offen.svg",
  "geschlossen": "img/vocab/geschlossen.svg",
  "schliessen": "img/vocab/geschlossen.svg",
  "zumachen": "img/vocab/geschlossen.svg",
  "kaputt": "img/vocab/kaputt.svg"
};

/**
 * Normaliza una palabra alemana o inglesa para buscar su clave en VOCAB_IMAGES
 */
function normalizeVocabKey(str) {
  if (!str) return "";
  return str.toLowerCase()
    .replace(/^(der|die|das|ein|eine)\s+/i, "")
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^a-z]/g, "");
}

/**
 * Obtiene la ruta de la imagen asociada a una fila de vocabulario
 * @param {Object} r - Objeto con datos de la palabra (de, en, etc.)
 * @returns {string} - Ruta al archivo SVG o cadena vacía si no tiene imagen
 */
function getVocabImage(r) {
  if (!r) return "";
  if (r.img) return r.img;
  
  const keyDe = normalizeVocabKey(r.de);
  if (VOCAB_IMAGES[keyDe]) return VOCAB_IMAGES[keyDe];
  
  const keyEn = normalizeVocabKey(r.en);
  if (VOCAB_IMAGES[keyEn]) return VOCAB_IMAGES[keyEn];
  
  return "";
}
