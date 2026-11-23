import { useEffect, useRef, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { asset } from '../assets.js';
import useTitre from '../useTitre.js';
import '../styles/pages/accueil.css';

const IMG = (nom) => asset(`Images/Page - Accueil/Fresque/${nom}`);
const SON = (nom) => asset(`Sons/Page - Accueil/Fresque/${nom}`);
const NB_GOOMBAS = 3;

export default function Accueil() {
  useTitre();
  const { disque } = useOutletContext();
  const [vaincus, setVaincus] = useState(0);   // Goombas éliminés
  const [ecrase, setEcrase] = useState(null);  // index du Goomba en cours d'animation
  const [enSaut, setEnSaut] = useState(false);
  const [etape, setEtape] = useState('jeu');   // 'jeu' -> 'grand' -> 'fini'
  const timer = useRef(null);
  const sonBonus = useRef(null);
  const sonSaut = useRef(null);
  const sonEcrase = useRef(null);
  const sonGrandi = useRef(null);
  const sonTermine = useRef(null);
  const sonStart = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  const champignonDispo = vaincus === NB_GOOMBAS;
  const peutSauter = etape === 'jeu' && !enSaut && ecrase === null && !champignonDispo;

  const sauter = () => {
    if (!peutSauter) return;
    sonSaut.current.play();
    setEnSaut(true);
    timer.current = setTimeout(() => {
      sonEcrase.current.play();
      setEcrase(vaincus);
      setEnSaut(false);
    }, 750);
  };

  const finEcrasement = (i) => {
    if (i !== ecrase) return;
    setEcrase(null);
    setVaincus((v) => v + 1);
  };

  const prendreChampignon = () => {
    if (!champignonDispo || etape !== 'jeu') return;
    sonGrandi.current.play();
    setEtape('grand');
  };

  const terminer = () => {
    disque.current.pause();
    sonStart.current.pause();
    sonTermine.current.play();
    setEtape('fini');
  };

  const sprite = etape !== 'jeu' ? 'Animation - Grand Mario.png'
    : enSaut ? 'Animation - Saut de Mario.png' : 'Animation - Mario.png';

  return (
    <div className="page-accueil">
      <audio ref={sonBonus}><source src={SON('1UP.mp3')} type="audio/mp3" /></audio>
      <audio ref={sonSaut}><source src={SON('Saut.mp3')} type="audio/mp3" /></audio>
      <audio ref={sonEcrase}><source src={SON('Ecrasé.mp3')} type="audio/mp3" /></audio>
      <audio ref={sonGrandi}><source src={SON('Grandir.mp3')} type="audio/mp3" /></audio>
      <audio ref={sonTermine}><source src={SON('Terminé.mp3')} type="audio/mp3" /></audio>
      <audio ref={sonStart}>
        <source src={asset('Sons/Page - Accueil/Super Mario Bros - Sol.mp3')} type="audio/mp3" />
      </audio>

      <h2 id="start" style={{ textAlign: 'center', margin: '2rem', cursor: 'pointer' }}
          onClick={() => { if (sonStart.current.paused) sonStart.current.play(); else sonStart.current.pause(); }}>
        Bienvenue sur la page d'accueil !
      </h2>

      <div className="mario-fresque">
        <div className="mario-container">
          <img id="mario" className="mario-sprite" src={IMG(sprite)} onClick={sauter} />
        </div>

        {[...Array(NB_GOOMBAS).keys()].map((i) => i >= vaincus && (
          <img
            key={i}
            className={`goomba${ecrase === i ? ' ecrase' : ''}`}
            src={IMG('Goomba.png')}
            onAnimationEnd={() => finEcrasement(i)}
          />
        ))}

        {etape === 'jeu' && (
          <img
            id="champignon"
            className={`champignon${champignonDispo ? ' available' : ''}`}
            src={IMG('Champignon.png')}
            style={{ cursor: champignonDispo ? 'pointer' : 'not-allowed' }}
            onClick={prendreChampignon}
          />
        )}

        <div style={{ width: '100%', textAlign: 'center' }}>
          {etape === 'grand' && (
            <button id="termine" type="button" onClick={terminer}>
              J'ai récupéré le champignon !
            </button>
          )}
        </div>
      </div>

      <div className="presentation">
        <h3>Sur ce site, vous vous apprêtez à découvrir un thème rempli de nostalgie.</h3>
        <h3>Au fil des sections, étape par étape, vous apprendrez à connaître les différents points qui constituent le rétrogaming.</h3>
        <h3>Pour vous plonger au mieux dans cette aventure, vous retrouverez plusieurs références aux anciens jeux qui ont probablement bercé votre enfance.</h3>
        <h3>
          Des{' '}
          <i id="up" style={{ cursor: 'pointer', color: 'var(--highlight-color)' }} title="Celui-ci était un cadeau."
             onClick={() => { if (sonBonus.current.paused) sonBonus.current.play(); else sonBonus.current.pause(); }}>
            easter eggs
          </i>{' '}
          se sont cachés un peu partout dans les différentes sections de ce site. Saurez-vous les retrouver ?
        </h3>
        <h3>(Par exemple, aidez Mario à récupérer ce champignon sans heurter un Goomba. Vous savez comment vous en débarasser, n'est-ce pas ?)</h3>
        <h3 id="branche" style={{ marginTop: '2rem' }}>Il ne reste plus qu'à vous souhaiter une bonne lecture !</h3>
        <img src={asset('Images/Page - Accueil/Manette SNES.png')} alt="Manette SNES"
             style={{ width: 350, marginTop: '0.5rem' }} />
      </div>
    </div>
  );
}
