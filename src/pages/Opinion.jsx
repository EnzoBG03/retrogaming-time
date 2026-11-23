import { useRef } from 'react';
import { asset } from '../assets.js';
import Rubrique from '../components/Rubrique.jsx';
import '../styles/pages/opinion.css';

const PERSO = (nom) => asset(`Images/Page - Opinion/${nom}`);

export default function Opinion() {
  const retro = useRef([]);
  const lireRetro = (n) => retro.current.forEach((a, i) => (i === n ? a.play() : a.pause()));
  return (
    <Rubrique page="opinion" titre="Quelle est mon opinion concernant le rétrogaming ?" onglet="Mon opinion">
      <audio ref={(el) => (retro.current[0] = el)}>
        <source src={asset('Sons/Page - Opinion/Super Mario 64 - Aquatique.mp3')} type="audio/mp3" />
      </audio>
      <audio ref={(el) => (retro.current[1] = el)}>
        <source src={asset('Sons/Page - Opinion/Skylanders.mp3')} type="audio/mp3" />
      </audio>
      <audio ref={(el) => (retro.current[2] = el)}>
        <source src={asset('Sons/Page - Opinion/Wii Party.mp3')} type="audio/mp3" />
      </audio>
      <audio ref={(el) => (retro.current[3] = el)}>
        <source src={asset('Sons/Page - Opinion/Super Mario Bros - Château.mp3')} type="audio/mp3" />
      </audio>
      <audio ref={(el) => (retro.current[4] = el)}>
        <source src={asset('Sons/Page - Opinion/Pokémon - Route 201.mp3')} type="audio/mp3" />
      </audio>
      <audio ref={(el) => (retro.current[5] = el)}>
        <source src={asset('Sons/Page - Opinion/Flipper Waluigi.mp3')} type="audio/mp3" />
      </audio>
      <audio ref={(el) => (retro.current[6] = el)}>
        <source src={asset('Sons/Page - Opinion/LittleBigPlanet.mp3')} type="audio/mp3" />
      </audio>
      <audio ref={(el) => (retro.current[7] = el)}>
        <source src={asset('Sons/Page - Opinion/Worms.mp3')} type="audio/mp3" />
      </audio>
      <audio ref={(el) => (retro.current[8] = el)}>
        <source src={asset('Sons/Page - Opinion/Crash Bandicoot.mp3')} type="audio/mp3" />
      </audio>

      <div className="content-text">
        <p className="note">Note : cette section n'est que le fruit de mon opinion.</p>
        <div className="utilise">
          <p>Voici ce que j'utilise pour jouer aux jeux rétro :</p>
          <img src={PERSO('Raspberry Pi - Enzo.jpg')} width={150} />
          <img src={PERSO('Wii - Enzo.jpg')} width={150} />
          <img src={PERSO('NES Classic Mini - Enzo.jpg')} width={150} />
          <p>A préciser : bien que les images aux extrémités aient l'air similaires, à gauche, il s'agit d'un Raspberry Pi 3B+ faisant tourner le système nommé Batocera.</p>
        </div>
        <p>Je vous ai répertorié mes coups de coeur parmi le catalogue de jeux rétro : ils se trouvent ci-dessous.{' '}
          <span style={{ cursor: 'pointer' }} title="Souvenez-vous : comment avez-vous trouvé tous les easter eggs précédents ?">(Immergez-vous dedans !)</span></p>
        <div className="banque">
          <img id="jeu1" style={{ cursor: 'pointer' }} title="Faites-vous plaisir : cliquez partout !"
               src={asset('Images/Page - Opinion/Jeux favoris/1.jpeg')} width={275} onClick={() => lireRetro(0)} />
          <img id="jeu2" style={{ cursor: 'pointer' }} title="Faites-vous plaisir : cliquez partout !"
               src={asset('Images/Page - Opinion/Jeux favoris/2.jpg')} width={400} onClick={() => lireRetro(1)} />
          <img id="jeu3" style={{ cursor: 'pointer' }} title="Faites-vous plaisir : cliquez partout !"
               src={asset('Images/Page - Opinion/Jeux favoris/3.jpeg')} width={140} onClick={() => lireRetro(2)} />
          <img id="jeu4" style={{ cursor: 'pointer' }} title="Faites-vous plaisir : cliquez partout !"
               src={asset('Images/Page - Opinion/Jeux favoris/4.jpeg')} width={150} onClick={() => lireRetro(3)} />
          <img id="jeu5" style={{ cursor: 'pointer' }} title="Faites-vous plaisir : cliquez partout !"
               src={asset('Images/Page - Opinion/Jeux favoris/5.jpeg')} width={220} onClick={() => lireRetro(4)} />
          <img id="jeu6" style={{ cursor: 'pointer' }} title="Faites-vous plaisir : cliquez partout !"
               src={asset('Images/Page - Opinion/Jeux favoris/6.jpg')} width={220} onClick={() => lireRetro(5)} />
          <img id="jeu7" style={{ cursor: 'pointer' }} title="Faites-vous plaisir : cliquez partout !"
               src={asset('Images/Page - Opinion/Jeux favoris/7.jpg')} width={170} onClick={() => lireRetro(6)} />
          <img id="jeu8" style={{ cursor: 'pointer' }} title="Faites-vous plaisir : cliquez partout !"
               src={asset('Images/Page - Opinion/Jeux favoris/8.jpg')} width={175} onClick={() => lireRetro(7)} />
          <img id="jeu9" style={{ cursor: 'pointer' }} title="Faites-vous plaisir : cliquez partout !"
               src={asset('Images/Page - Opinion/Jeux favoris/9.jpg')} width={200} onClick={() => lireRetro(8)} />
        </div>
        <p>Mais revenons-en au sujet principal :</p>
        <p>De mon point de vue, le rétrogaming offre une expérience enrichissante, du point de vue culturel. Il en y a pour tous les types de joueurs, des plus
          jeunes aux plus âgés. En ce qui concerne ma génération, je considère qu'elle a raté une certaine quantité de "classiques", et qu'il est nécessaire
          d'apprendre à connaître leurs mécaniques.</p>
        <p>Êtes-vous prêts pour la dernière étape ?</p>
      </div>
    </Rubrique>
  );
}
