/* ---------- CONFIGURACIÓN DEL LIBRO ---------- */

/* Firmas automáticas: dirección de tu Google Apps Script (termina en /exec). */
window.BRC_API="https://script.google.com/macros/s/AKfycbxf5wYq54Ox58EfVj-MiPFx1ezP3OOI9xl7CVYLc6w07hxOqLjBtZzxwtGkkn-loJw3/exec";

/* Música: lista de canciones de YouTube que suenan una tras otra y vuelven a empezar.
   id = lo que va después de youtu.be/  |  start / end = segundos (opcional, para usar solo un pedazo).
   Ejemplo: 2:25 = 145 segundos, 4:00 = 240 segundos. */
window.BRC_PLAYLIST=[
  {id:"jWreyULKiZU"},
  {id:"a1Femq4NPxs", start:145, end:240},
  {id:"kLBld4rQvUM"},
  {id:"qrGc5ZUhHys"},
  {id:"myW8YuosTq4"},
  {id:"zgdl59zOANQ"}
  {id:"3G2AQykb9oIWKTGu"}
];

/* Alternativas (se usan solo si BRC_PLAYLIST está vacía):
   window.BRC_YOUTUBE="https://www.youtube.com/watch?v=XXXXXXXXXXX";   // una sola canción
   window.BRC_MUSICA="musica.mp3";                                       // archivo subido al repo */
/* La música arranca sola con el primer toque en la página. Para que solo suene con el botón: window.BRC_AUTOPLAY=false; */
window.BRC_MUSICA="";
window.BRC_YOUTUBE="";
