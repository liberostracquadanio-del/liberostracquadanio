# Grafici Radar

Schede grafiche dello stile «Radar» pubblicate con GitHub Pages, da incorporare negli articoli con un iframe.

Indice di tutti i grafici, con anteprima e codici da copiare: https://liberostracquadanio-del.github.io/liberostracquadanio/

## Come è fatto
```
AAAA-MM-tema/            una cartella per articolo (es. 2026-11-sfruttamento-moda)
  NN-nome/               una cartella per grafico (es. 03-salari): l'indirizzo pubblico è questo percorso
    index.html           la pagina del grafico, generata: non modificarla a mano
    testi.json           fonte, link della fonte, nota, data di aggiornamento: questi si modificano qui
index.html, elenco.json  indice generato di tutti i grafici
incorpora.js             script che adatta l'altezza degli iframe (versione A del codice di incorporamento)
impostazioni.json        indirizzo pubblico del sito
.nojekyll                dice a GitHub Pages di servire i file così come sono
.github/workflows/       controllo automatico dei testi.json a ogni modifica
```
Le pagine si creano con `strumenti/pubblica.py` della cartella `data-journalism` sul computer (o chiedendo a Claude Code «pubblica il grafico 03 su GitHub»), poi si fa commit e push.

## Correggere fonte e nota dal sito
1. Apri la cartella del grafico e clicca su `testi.json`.
2. Clicca sull'icona della matita («Edit this file»).
3. Cambia solo il testo tra virgolette; lascia virgolette, due punti e virgole a fine riga come sono. Niente punto finale.
4. In alto a destra «Commit changes…», poi di nuovo «Commit changes».
5. Dopo qualche minuto (fino a 10, per la cache di GitHub Pages) la pagina e tutti gli iframe già incorporati mostrano il testo nuovo. Se dopo 10 minuti vedi ancora il vecchio testo, ricarica la pagina; se non cambia, controlla la scheda «Issues»: un controllo automatico segnala i file scritti male.

Se `testi.json` manca o è scritto male, la pagina mostra i testi scritti al momento della pubblicazione: il grafico non si rompe.

