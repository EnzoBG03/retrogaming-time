import { useRef, useState } from 'react';
import { asset } from '../assets.js';
import Rubrique from '../components/Rubrique.jsx';
import '../styles/pages/avin.css';

export default function Avin() {
  const pistes = useRef([]);
  const [actif, setActif] = useState(null);
  const lire = (n) => {
    pistes.current.forEach((a, i) => (i === n ? a.play() : a.pause()));
    setActif(n);
  };
  const arreter = (n) => {
    pistes.current[n].pause();
    setActif(null);
  };
  return (
    <Rubrique page="avin" titre="Quels sont les avantages et les inconvénients du rétrogaming ?" onglet="Avantages et inconvénients">
      <audio ref={(el) => (pistes.current[0] = el)} onEnded={() => setActif(null)}>
        <source src={asset('Sons/Page - AvIn/Tetris.mp3')} type="audio/mp3" />
      </audio>
      <audio ref={(el) => (pistes.current[1] = el)} onEnded={() => setActif(null)}>
        <source src={asset('Sons/Page - AvIn/San Andreas.mp3')} type="audio/mp3" />
      </audio>
      <audio ref={(el) => (pistes.current[2] = el)} onEnded={() => setActif(null)}>
        <source src={asset('Sons/Page - AvIn/Sonic.mp3')} type="audio/mp3" />
      </audio>
      <audio ref={(el) => (pistes.current[3] = el)} onEnded={() => setActif(null)}>
        <source src={asset('Sons/Page - AvIn/Dr. Mario.mp3')} type="audio/mp3" />
      </audio>

      <div className="content-text">
        <p>Le rétrogaming est un procédé innovant qui présente de nombreux avantages :</p>

        <p>Le <i>rétrogamer</i> vit une expérience nostalgique à travers ses souvenirs d'enfance. Grâce à un catalogue de jeux qui devient
          de plus en plus fourni au fil des années, ainsi qu'avec l'arrivée des émulateurs, il est en mesure de personnaliser sa propre expérience de jeu.</p>
        <p>De plus, cette expérience est facilitée par la simplicité très connue des jeux rétros : l'influence n'en est que bénéfique.</p>

        <p>Malgré tout, il existe quelques contraintes autour du rétrogaming :</p>
        <p>Le coût des matériels peuvent être un frein, car il faut prendre en compte l'évolution technologique du XXI<sup>ème</sup> siècle, et par conséquent des graphismes ; maintenir une bonne expérience visuelle par le biais d'adaptateurs peut rapidement devenir handicapant. De plus, les consoles en elles-mêmes sont de plus en plus prisées, et valent désormais quelques centaines d'euros sur le marché.</p>
        <p>Il ne faut également pas oublier les droits d'auteur en ce qui concerne les fichiers ROM des jeux rétros : cela rajoute une pression aux <i>rétrogamers</i> du côté légal.</p>

        <div className="jukebox">
          <div id="son1">
            {actif === 0
              ? <img id="pause1" src={asset('Images/Page - AvIn/Jukebox/Icône - Pause.png')} alt="Pause" width={40} onClick={() => arreter(0)} />
              : <img id="play1" src={asset('Images/Page - AvIn/Jukebox/Icône - Play.png')} alt="Play" width={40} onClick={() => lire(0)} />}
            <h4>Son n°1 : Soyez logique à travers cette musique</h4>
          </div>
          <div id="son2">
            {actif === 1
              ? <img id="pause2" src={asset('Images/Page - AvIn/Jukebox/Icône - Pause.png')} alt="Pause" width={40} onClick={() => arreter(1)} />
              : <img id="play2" src={asset('Images/Page - AvIn/Jukebox/Icône - Play.png')} alt="Play" width={40} onClick={() => lire(1)} />}
            <h4>Son n°2 : Voyagez dans une région avec une certaine ambiance</h4>
          </div>
          <div id="son3">
            {actif === 2
              ? <img id="pause3" src={asset('Images/Page - AvIn/Jukebox/Icône - Pause.png')} alt="Pause" width={40} onClick={() => arreter(2)} />
              : <img id="play3" src={asset('Images/Page - AvIn/Jukebox/Icône - Play.png')} alt="Play" width={40} onClick={() => lire(2)} />}
            <h4>Son n°3 : Courez très rapidement dans un terrain vert</h4>
          </div>
          <div id="son4">
            {actif === 3
              ? <img id="pause4" src={asset('Images/Page - AvIn/Jukebox/Icône - Pause.png')} alt="Pause" width={40} onClick={() => arreter(3)} />
              : <img id="play4" src={asset('Images/Page - AvIn/Jukebox/Icône - Play.png')} alt="Play" width={40} onClick={() => lire(3)} />}
            <h4>Son n°4 : Jouez le médecin minutieux</h4>
          </div>
        </div>
      </div>
    </Rubrique>
  );
}
