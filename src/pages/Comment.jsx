import { useRef } from 'react';
import { asset } from '../assets.js';
import Rubrique from '../components/Rubrique.jsx';
import '../styles/pages/comment.css';

const IMG = (nom) => asset(`Images/Page - Comment/${nom}`);

export default function Comment() {
  const wii = useRef(null);
  return (
    <Rubrique page="comment" titre="Comment faire du rétrogaming ?" onglet="Comment faire ?">
      <audio ref={wii}>
        <source src={asset('Sons/Page - Comment/Wii - Démarrage.mp3')} type="audio/mp3" />
      </audio>

      <div className="content-text">
        <p>Avec l'arrivée des nouvelles technologies, le rétrogaming peut être exécuté de différentes manières. On peut se pencher sur 5 possibilités :</p>

        <p>Premièrement, ressortir des cartons les consoles authentiques est la meilleure option pour le rétrogaming.
          Cependant, étant donné que les systèmes graphiques ont évolué depuis plusieurs décennies, des solutions avec des adaptateurs existent.</p>

        <p>Deuxièmement, il est possible d'installer des émulateurs sur son PC, et d'utiliser des fichiers ROMS permettant de retranscrire les jeux rétros.
          Il existe des émulateurs propres à chaque console, tout comme il existe des émulateurs polyvalents pouvant traiter toutes les consoles rétro.</p>
        <p className="warning"><i>AVERTISSEMENT :</i> Les fichiers ROMS sont sujets à des restrictions légales ; il est obligatoire de posséder la copie physique d'un jeu
          avant de récupérer son fichier ROM associé sur Internet.</p>

        <p>Troisièmement, des firmes telles que Nintendo ont développé des consoles dédiées au rétrogaming, avec un catalogue de jeux prédéfini.
          Malgré tout, ce catalogue est souvent assez limité (30 jeux seulement pour la NES Classic Mini).</p>

        <p>Du point de vue moderne, les grandes firmes du jeu vidéo, à savoir PlayStation, Xbox et Nintendo (une nouvelle fois), proposent des options
          dédiées au rétrogaming dans leurs abonnements en ligne, avec des tarifs plus ou moins coûteux.</p>

        <p>Le rétrogaming peut également être pratiqué au sein des évènements communautaires en guise de divertissement.</p>

        <div className="solutions-container">
          <img id="image" className="solution-image" style={{ cursor: 'pointer' }} src={IMG('Wii.png')}
               title="Un petit retour en arrière..." width={200} onClick={() => { if (wii.current.paused) wii.current.play(); else wii.current.pause(); }} />
          <img className="solution-image" src={IMG('Adaptateur Wii.png')} width={200} />
          <a href="https://www.retroarch.com/" title="Vous devez sûrement vous demander de quoi il s'agit..."
             target="_blank" rel="noopener noreferrer">
            <img className="solution-image" style={{ cursor: 'pointer' }} src={IMG('RetroArch.png')} width={200} />
          </a>
          <img className="solution-image" src={IMG('NES Classic.png')} width={200} />
        </div>
      </div>
    </Rubrique>
  );
}
