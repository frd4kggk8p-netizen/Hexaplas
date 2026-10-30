/**
 * Hexaplas - Coordinador de Imágenes para Vocabulario
 * Este archivo mapea palabras básicas de Fundamentos a sus ilustraciones
 * vectoriales (SVG) y fotografías ligeras optimizadas (WebP) en img/vocab/
 */

const VOCAB_IMAGES = {
  // === Momentos del día y tiempo ===
  "abend": "img/vocab/abend.svg",
  "morgen": "img/vocab/morgen.svg",
  "mittag": "img/vocab/mittag.svg",
  "mitternacht": "img/vocab/mitternacht.svg",
  "nachmittag": "img/vocab/nachmittag.svg",
  "vormittag": "img/vocab/mittag.svg",
  "uhr": "img/vocab/uhr.svg",
  "datum": "img/vocab/datum.svg",
  "monat": "img/vocab/monat.svg",
  "sekunde": "img/vocab/sekunde.webp",

  // === Saludos y cortesía ===
  "gruss": "img/vocab/gruss.svg",
  "gutentag": "img/vocab/gutentag.svg",
  "tschuess": "img/vocab/tschuess.svg",
  "aufwiedersehen": "img/vocab/aufwiedersehen.svg",
  "danke": "img/vocab/danke.svg",
  "bitte": "img/vocab/bitte.svg",
  "prost": "img/vocab/prost.svg",

  // === Conceptos, preguntas y medidas ===
  "idee": "img/vocab/idee.svg",
  "frage": "img/vocab/frage.svg",
  "fragen": "img/vocab/frage.svg",
  "antwort": "img/vocab/antwort.svg",
  "antworten": "img/vocab/antwort.svg",
  "ziel": "img/vocab/ziel.svg",
  "zahl": "img/vocab/zahl.svg",
  "nummer": "img/vocab/nummer.webp",
  "paar": "img/vocab/paar.svg",
  "gott": "img/vocab/gott.svg",
  "dutzend": "img/vocab/dutzend.webp",
  "haelfte": "img/vocab/haelfte.webp",
  "viertel": "img/vocab/viertel.svg",
  "mitte": "img/vocab/mitte.svg",
  "ding": "img/vocab/ding.webp",
  "augenblick": "img/vocab/augenblick.webp",
  "ende": "img/vocab/ende.webp",
  "wunsch": "img/vocab/wunsch.webp",
  "wuenschen": "img/vocab/wunsch.webp",
  "fehler": "img/vocab/fehler.svg",
  "beispiel": "img/vocab/beispiel.svg",
  "behandlung": "img/vocab/behandlung.svg",
  "meinung": "img/vocab/meinung.svg",
  "qualitaet": "img/vocab/qualitaet.svg",
  "quatsch": "img/vocab/quatsch.svg",
  "grund": "img/vocab/grund.svg",
  "bisschen": "img/vocab/bisschen.svg",

  // === Estados y adjetivos cotidianos ===
  "gluecklich": "img/vocab/gluecklich.svg",
  "gut": "img/vocab/gut.svg",
  "schlecht": "img/vocab/schlecht.svg",
  "offen": "img/vocab/offen.svg",
  "oeffnen": "img/vocab/offen.svg",
  "geschlossen": "img/vocab/geschlossen.svg",
  "schliessen": "img/vocab/geschlossen.svg",
  "zumachen": "img/vocab/geschlossen.svg",
  "kaputt": "img/vocab/kaputt.svg",
  "voll": "img/vocab/voll.webp",
  "bequem": "img/vocab/bequem.webp",
  "billig": "img/vocab/billig.webp",
  "allein": "img/vocab/allein.webp",
  "zusammen": "img/vocab/zusammen.webp"
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
 * @returns {string} - Ruta al archivo SVG/WebP o cadena vacía si no tiene imagen
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
