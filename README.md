# The Barber Squad — site vitrine

Site one-page pour **The Barber Squad** (Luxembourg-Ville & Foetz).
Stack : **React + Vite**. Réservations via **Salonkee**. Bilingue **FR / EN**.

Design street/bold : preloader, curseur custom, marquees, reveals au scroll,
boutons magnétiques, modal de réservation « Ville / Foetz ».

---

## Lancer en local

```bash
npm install
npm run dev
```
Ouvre l'URL affichée (http://localhost:5173).

Build de production :
```bash
npm run build      # génère /dist
npm start          # sert /dist (comme en prod) sur le PORT défini
```

---

## Où modifier le contenu

- **Textes, prix, horaires, liens** → `src/page.html`
  (chaque texte a un `data-fr` et un `data-en` pour les deux langues).
- **Styles / couleurs / polices** → `src/styles.css`
  (les couleurs sont en variables en haut : `--bg`, `--lav` (doré), `--gold`…).
- **Interactions** (preloader, curseur, modal, langue) → `src/init.js`.

### Remplacer une photo
Les images pointent aujourd'hui vers le CDN de Salonkee et une photo Instagram
(carte « Barber 01 »). La photo Instagram **expire** : pour le site définitif,
mets tes fichiers dans `public/` (ex. `public/team.jpg`) et remplace l'URL
correspondante dans `src/styles.css` (`#mem-1::before { background-image: url('/team.jpg') }`).

---

## Déploiement

### 1) Pousser sur GitHub

```bash
git init            # déjà fait si tu as reçu le .git
git add -A
git commit -m "The Barber Squad — site"
# crée le repo puis pousse (remplace TON-COMPTE) :
git remote add origin https://github.com/TON-COMPTE/the-barber-squad.git
git branch -M main
git push -u origin main
```
Ou en une commande avec GitHub CLI :
```bash
gh repo create the-barber-squad --public --source=. --remote=origin --push
```

### 2) Déployer sur Railway

1. Sur https://railway.app → **New Project** → **Deploy from GitHub repo**.
2. Choisis le repo `the-barber-squad`.
3. Railway détecte Node automatiquement :
   - build : `npm run build`
   - start : `npm start` (sert `/dist` sur `$PORT` via `server.js`)
4. Onglet **Settings → Networking → Generate Domain** pour une URL publique,
   puis **Custom Domain** pour brancher `thebarbersquad.lu` (ajoute le CNAME
   indiqué chez ton registrar).

C'est tout — chaque `git push` redéploie automatiquement.

---

## Notes
- `framer-motion` est installé et prêt si tu veux animer des composants plus tard.
- Réservations : boutons « Réserver » globaux → modal de choix Ville/Foetz →
  pages Salonkee. Les boutons dans la section Salons pointent en direct.
