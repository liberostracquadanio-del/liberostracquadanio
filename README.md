# Grafici Radar

Schede grafiche dello stile «Radar» pubblicate con GitHub Pages, da incorporare negli articoli con un iframe.

Indice di tutti i grafici, con anteprima e codici da copiare: https://liberostracquadanio-del.github.io/grafici/

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

## Incorporare nel CMS
- **Versione A** (consigliata se il CMS accetta gli script): iframe + `incorpora.js`, l'altezza si adatta da sola su computer e telefono.
- **Versione B** (CMS che toglie gli script): solo iframe ad altezza fissa: la maggiore tra le altezze misurate a 360 px (telefono) e a 640 px, più 30 px di margine. Dove il grafico è più basso resta un po’ di spazio bianco sotto.

I codici pronti sono nell'indice, sotto ogni grafico.

## Regole
- Non rinominare e non cancellare le cartelle dei grafici già incorporati: gli iframe nel giornale resterebbero vuoti.
- Il repository è pubblico: un grafico caricato qui è visibile a chiunque abbia l'indirizzo, anche prima dell'uscita del pezzo.
- `2026-11-esempio/01-prova` è un grafico di prova con dati inventati: si può cancellare quando il primo grafico vero è online (poi rigenera l'indice).
