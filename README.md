# Rétrogaming — Un voyage dans le temps

Site de présentation du rétrogaming, réalisé par Enzo BENOIST-GIMET.
En ligne : https://upgraded-retrogaming.netlify.app

Le site est une application **React** construite avec **Vite** (routage : React Router).

## Développement

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # génère dist/
npm run preview   # prévisualise le build
```

## Structure

```
public/           médias servis tels quels (images/, sons/, videos/, polices/)
src/
  pages/          une page par rubrique (Accueil, Quoi, Concept, Comment, Avin, Opinion, Futur)
  components/     Layout (en-tête + navigation), Rubrique, Pacman, EnTete
  styles/         base.css (commun) + pages/*.css (isolés par page via .page-xxx)
  slug.js         asset('Sons/Page - AvIn/Tetris.mp3') -> /sons/page-avin/tetris.mp3
netlify.toml      build Netlify (npm run build -> dist) + redirections
```

Les chemins de médias s'écrivent avec les noms d'origine grâce à `asset()` ;
les fichiers de `public/` portent la version sans espaces ni accents.

## Déploiement (Netlify)

La configuration est dans `netlify.toml` : commande `npm run build`, dossier publié `dist`,
anciennes URL `.html` redirigées vers les nouvelles routes, et redirection SPA (`/*` → `/index.html`).
