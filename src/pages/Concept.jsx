import { useRef } from 'react';
import { asset } from '../assets.js';
import Rubrique from '../components/Rubrique.jsx';
import '../styles/pages/concept.css';

const GB = (nom) => asset(`Images/Page - Concept/GameBoys/${nom}`);

export default function Concept() {
  const ps1 = useRef(null);
  const xbox = useRef(null);
  return (
    <Rubrique page="concept" titre="D'où vient le concept du rétrogaming ?" onglet="Le concept">
      <audio ref={ps1}>
        <source src={asset('Sons/Page - Concept/PS1 - Lancement.mp3')} type="audio/mp3" />
      </audio>
      <audio ref={xbox}>
        <source src={asset('Sons/Page - Concept/Xbox - Lancement.mp3')} type="audio/mp3" />
      </audio>

      <div className="content-text">
        <p>La légende veut que le rétrogaming ait fait ses débuts lors des années 2000. Cependant, cela remonte à un peu plus loin que cela.
          En vérité, les origines du rétrogaming se trouvent au sein des années 1990, soit pratiquement aux débuts de ce que l'on connaît aujourd'hui.</p>

        <p>Lors des années 1990, le marché du jeu vidéo a été bouleversé par l'arrivée de la Playstation et de la Xbox.
          Si Nintendo a survécu à cette apparition, ce ne sera malheureusement pas le cas pour SEGA.</p>

        <div className="logos-container">
          <img id="PS1" className="logo-image" src={asset('Images/Page - Concept/Logos/PlayStation1.png')}
               title="Vous êtes quelqu'un d'observateur..." width={200} onClick={() => { if (ps1.current.paused) ps1.current.play(); else ps1.current.pause(); }} />
          <img id="XBOX" className="logo-image" src={asset('Images/Page - Concept/Logos/Xbox.png')}
               title="Deux pour le prix d'un ! Comment avez-vous fait ?" width={200} onClick={() => { if (xbox.current.paused) xbox.current.play(); else xbox.current.pause(); }} />
        </div>

        <p>Lors des années 2000, le terme de "rétrogaming" est apparu. Les nouvelles technologies ont permis l'arrivée des émulateurs
          (des logiciels capables de reproduire à l'identique les consoles rétro) : c'est ce qui a permis au rétrogaming de s'élargir dans le monde à l'heure actuelle.</p>

        <p>Il convient également de noter que cette évolution est parallèle à l'avancée de notre société, qui a "démocratisé" le jeu vidéo.
          La communauté a saisi cette occasion pour organiser de plus en plus de conventions et attirer de nouveaux joueurs.</p>

        <div className="gameboy-container">
          <img id="GB" className="gameboy-image" src={GB('GameBoy.png')} width={150} />
          <img id="GBC" className="gameboy-image" src={GB('GameBoy Color.png')} width={180} />
          <img id="GBA" className="gameboy-image" src={GB('GameBoy Advance.png')} width={290}
               style={{ cursor: 'pointer' }} title="Raté ! Il n'y a rien ici !" />
        </div>
      </div>
    </Rubrique>
  );
}
