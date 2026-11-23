import useTitre from '../useTitre.js';

// Gabarit commun des pages de contenu : titre de la rubrique + sections.
export default function Rubrique({ page, titre, onglet, children }) {
  useTitre(onglet ?? titre);
  return (
    <div className={`page-${page}`}>
      <section className="content-section">
        <h2 className="section-title">{titre}</h2>
        {children}
      </section>
    </div>
  );
}
