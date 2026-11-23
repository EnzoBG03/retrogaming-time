import { useRef, useState } from 'react';
import { asset } from '../assets.js';

const NB_POINTS = 14;
const DUREE = 5; // secondes : durée du son Pac-Man.mp3 (≈ 5,1 s), à garder synchronisée avec le CSS

// Dernier easter egg du parcours : Pac-Man traverse l'écran en mangeant les points.
export default function Pacman() {
  const son = useRef(null);
  const [enCours, setEnCours] = useState(false);

  const lancer = () => {
    if (enCours) return;
    son.current.play();
    setEnCours(true);
  };

  return (
    <div className={`pacman-piste${enCours ? ' en-cours' : ''}`}>
      <audio ref={son}>
        <source src={asset('Sons/Page - Futur/Pac-Man.mp3')} type="audio/mp3" />
      </audio>
      {[...Array(NB_POINTS).keys()].map((i) => (
        <span key={i} className="pacman-point"
              style={{ animationDelay: `${((DUREE * (i + 0.5)) / NB_POINTS).toFixed(2)}s` }} />
      ))}
      <div className="pacman" title="Wakka wakka ! Vous avez l'œil..."
           onAnimationEnd={() => setEnCours(false)} onClick={lancer} />
    </div>
  );
}
