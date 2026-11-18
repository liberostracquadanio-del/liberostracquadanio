# Grafici Radar

Grafici interattivi nello stile «Radar» (Quotidiano Nazionale), pubblicati con GitHub Pages e incorporati negli articoli con un iframe e uno script.

Indice di tutti i grafici, con anteprima e codici da copiare: https://liberostracquadanio-del.github.io/liberostracquadanio/

## Come è fatto
```
AAAA-MM-tema/            una cartella per articolo (es. 2026-11-redditi-famiglie)
  assets/                stile e funzioni comuni (radar.css, radar.js)
  data/                  i dati dei grafici in CSV, generati da uno script: non si modificano a mano
  NN-nome/               una cartella per grafico (es. 03-salari): l'indirizzo pubblico è questo percorso
    index.html           la pagina del grafico (D3, tema chiaro e scuro)
index.html, elenco.json  indice generato di tutti i grafici
impostazioni.json        indirizzo pubblico del sito
.nojekyll                dice a GitHub Pages di servire i file così come sono
```
Dal 16/11/2026 le pagine si fanno con la skill `radar-dataviz` e con `strumenti/dataviz.py` della cartella `data-journalism` (o chiedendo a Claude Code «fai il grafico 03» e «pubblicalo»).

## Correggere titolo, sottotitolo o fonte dal sito
1. Apri la cartella del grafico e clicca su `index.html`, poi sulla matita («Edit this file»).
2. Il titolo è tra `<h1 class="r-title">` e `</h1>`, il sottotitolo tra `<p class="r-sub" …>` e `</p>`, la fonte nella riga `<span>Fonte: …</span>`. Cambia solo il testo, non i segni `< >`. Niente punto finale.
3. In alto a destra «Commit changes…», poi di nuovo «Commit changes». Dopo qualche minuto (fino a 10) la pagina e gli iframe già incorporati mostrano il testo nuovo.

I numeri non si cambiano così: si correggono dallo script dei dati e si ripubblica.

## Grafici fino al 15/11/2026
Le schede vecchie hanno fonte e nota in un file `testi.json` accanto alla pagina: si corregge quello, con la stessa matita (cambia solo il testo tra virgolette). Un controllo automatico (`.github/workflows/`) segnala nella scheda «Issues» i `testi.json` scritti male. I loro codici con `incorpora.js` continuano a funzionare.

## Regola d'oro
Non rinominare né cancellare le cartelle dei grafici già incorporati: gli iframe nel giornale resterebbero vuoti.
