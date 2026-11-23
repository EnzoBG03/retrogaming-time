import { useEffect } from 'react';

// Titre d'onglet propre à chaque page (une SPA ne le change pas toute seule).
export default function useTitre(titre) {
  useEffect(() => {
    document.title = titre ? `${titre} — Rétrogaming` : 'Rétrogaming - Un voyage dans le temps';
  }, [titre]);
}
