// Partagé par l'application ET par scripts/migrer-assets.mjs :
// "Page - Accueil/Écrasé.mp3" -> "page-accueil/ecrase.mp3"
export function slug(nom, fichier = true) {
  const ascii = nom.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const i = fichier ? ascii.lastIndexOf('.') : -1;
  const base = i > 0 ? ascii.slice(0, i) : ascii;
  const ext = i > 0 ? ascii.slice(i).toLowerCase() : '';
  return base.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') + ext;
}

// Permet d'écrire les chemins d'origine : asset('Sons/Page - AvIn/Tetris.mp3')
export function asset(chemin) {
  const parties = chemin.split('/');
  return '/' + parties.map((p, k) => slug(p, k === parties.length - 1)).join('/');
}
