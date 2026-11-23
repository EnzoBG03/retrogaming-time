import { useEffect, useRef } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import EnTete from './EnTete.jsx';
import { asset } from '../assets.js';

const LIENS = [
  ['/', 'Accueil', "Revenez à l'accueil"],
  ['/quoi', "Qu'est-ce que c'est ?", 'Découvrez un mouvement original'],
  ['/concept', 'Le concept', 'Apprenez les origines du rétrogaming'],
  ['/comment', 'Comment faire ?', 'Découvrez comment prendre part au mouvement'],
  ['/avin', 'Avantages et inconvénients', 'Prenez connaissance des bons et des mauvais côtés'],
  ['/opinion', 'Mon opinion', 'Lisez mon point de vue personnel'],
  ['/futur', 'Le futur', "Imaginez l'avenir de ce mouvement"],
];

export default function Layout() {
  const { pathname } = useLocation();
  const disque = useRef(null); // son du titre (1er easter egg), partagé avec l'accueil

  // Comme un changement de page classique : retour en haut, et le son du titre s'arrête.
  useEffect(() => {
    window.scrollTo(0, 0);
    disque.current?.pause();
  }, [pathname]);

  return (
    <>
      <audio ref={disque}>
        <source src={asset('Sons/Wii Sports - Disque.mp3')} type="audio/mp3" />
      </audio>

      {/* Easter egg du titre : uniquement sur l'accueil, comme avant */}
      <EnTete onClick={pathname === '/' ? () => {
        if (disque.current.paused) disque.current.play(); else disque.current.pause();
      } : undefined} />
      <nav className="nav">
        <ul className="nav-list">
          {LIENS.map(([to, texte, info]) => (
            <li key={to}>
              <NavLink to={to} end className="nav-link" title={info}>{texte}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <main>
        <Outlet context={{ disque }} />
      </main>
    </>
  );
}
