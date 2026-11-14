/* incorpora.js - adatta l'altezza degli iframe dei grafici Radar alla pagina che li ospita.
 *
 * Si mette nel CMS subito dopo l'iframe (versione A del codice di incorporamento):
 *   <iframe src="https://UTENTE.github.io/grafici/AAAA-MM-tema/NN-nome/" ...></iframe>
 *   <script src="https://UTENTE.github.io/grafici/incorpora.js" async></script>
 *
 * Come funziona: ogni pagina di grafico manda alla pagina che la ospita un messaggio
 * {tipo: 'radar-altezza', altezza: N}. Questo script lo riceve, controlla che arrivi da un iframe
 * della pagina e dallo stesso sito da cui è servito lo script, e imposta l'altezza di quell'iframe.
 * Funziona con più grafici nella stessa pagina e anche se lo script è incollato più volte.
 * Se lo script non gira (CMS che toglie gli script), l'iframe resta all'altezza scritta nel codice.
 */
(function () {
  'use strict';
  if (window.__radarIncorpora) return;
  window.__radarIncorpora = true;

  var origine = '';
  try { origine = new URL(document.currentScript.src).origin; } catch (e) { /* origine sconosciuta: si controlla solo l'iframe */ }

  function iframeDi(finestra) {
    var f = document.getElementsByTagName('iframe');
    for (var i = 0; i < f.length; i++) if (f[i].contentWindow === finestra) return f[i];
    return null;
  }

  window.addEventListener('message', function (e) {
    var d = e.data;
    if (!d || d.tipo !== 'radar-altezza') return;
    if (origine && e.origin !== origine) return;
    var h = Math.ceil(Number(d.altezza));
    if (!(h > 50 && h < 20000)) return;
    var f = iframeDi(e.source);
    if (f) f.style.height = (h + 2) + 'px';
  });

  // Chiede l'altezza agli iframe già caricati prima che lo script arrivasse
  function chiedi() {
    var f = document.getElementsByTagName('iframe');
    for (var i = 0; i < f.length; i++) {
      if (origine && (f[i].src || '').indexOf(origine) !== 0) continue;
      try { f[i].contentWindow.postMessage({tipo: 'radar-chiedi-altezza'}, origine || '*'); } catch (e) {}
    }
  }
  chiedi();
  if (document.readyState !== 'complete') window.addEventListener('load', chiedi);
})();
