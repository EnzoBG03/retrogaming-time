import { useRef } from 'react';
import { asset } from '../assets.js';
import Rubrique from '../components/Rubrique.jsx';
import '../styles/pages/quoi.css';

export default function Quoi() {
  const niveau = useRef(null);
  return (
    <Rubrique page="quoi" titre="Qu'est-ce que le rétrogaming ?" onglet="Qu'est-ce que c'est ?">
      <audio ref={niveau}>
        <source src={asset('Sons/Page - Quoi/Super Mario 64 - Niveau1.mp3')} type="audio/mp3" />
      </audio>

      <div className="content-text">
        <p>Quand on parle de rétrogaming, on évoque principalement le fait de jouer à certains jeux vidéos
          en particulier ; dans ce cas précis, on parle des jeux datant au moins des années 1980.
          Les consoles telles que la NES, la MegaDrive et la GameBoy sont concernées par ce mouvement.</p>

        <div className="gameplay-container">
          <video width={640} height={360} controls preload="metadata" src={asset('Vidéos/Gameplay - Excitebike.mp4')} />
          <a href="https://fr.wikipedia.org/wiki/Excitebike" className="excitebike-link"
             title="Apprenez-en plus sur Excitebike" target="_blank" rel="noopener noreferrer">
            <img id="roule" src={asset('Images/Page - Quoi/Excitebike.png')} width={150} alt="Excitebike" />
          </a>
        </div>

        <p>Depuis plusieurs années, le rétrogaming fait l'objet de nombreuses conventions culturelles.
          Que ce soit pour jouer, faire des achats ou rencontrer des joueurs, ce mouvement est devenu
          un vrai fil conducteur dans le domaine du jeu vidéo.</p>

        <p>Pour résumer, le rétrogaming représente une expérience nostalgique qui s'est fait une grande
          place dans le domaine du jeu vidéo. Grâce à sa large collection intemporelle de jeux rétro,
          le rétrogaming a pu construire un pont entre les différentes générations de joueurs.</p>
      </div>

      <div className="convention-container">
        <img id="affiche" className="convention-image"
             src={asset('Images/Page - Quoi/Illustration - Convention.jpg')}
             title="Bravo ! C'était un coup de chance ?" alt="Convention Brocante des Geeks 2022" width={350} onClick={() => { if (niveau.current.paused) niveau.current.play(); else niveau.current.pause(); }} />
        <p className="convention-caption">Ci-contre, l'affiche de la convention "Brocante des Geeks" de 2022 à Saint-Germain-des-Fossés(03),
          qui regroupait tous les éléments de la popculture.</p>
      </div>
    </Rubrique>
  );
}
