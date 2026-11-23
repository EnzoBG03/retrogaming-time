import { asset } from '../assets.js';
import Rubrique from '../components/Rubrique.jsx';
import Pacman from '../components/Pacman.jsx';
import '../styles/pages/futur.css';

export default function Futur() {
  return (
    <Rubrique page="futur" titre="Quel est le futur du rétrogaming ?" onglet="Le futur">

      <div className="content-text">
        <p>Dans un monde en constante évolution, le rétrogaming pourrait être amélioré par plusieurs types de modifications. Il est possible d'en énumérer une partie ci-dessous :</p>
        <p>Avec l'amélioration continue des réalités virtuelle et augmentée, on peut imaginer une intégration des éléments principaux du rétrogaming dans un environnement technologique de haut niveau, avec des interactions de plus en plus réalistes.</p>
        <p>Vous devez sans doute connaître les plateformes de streaming qui alimentent nos vies. Imaginez un peu une plateforme entièrement dédiée au rétrogaming, avec un choix de
          jeux à en faire pâlir les joueurs ; ce serait incroyable, non ?</p>
        <p>L'intelligence artificielle connaît une progression affolante ces dernières années : cela pourrait profiter aux <i>rétrogamers</i>, qui auraient l'occasion de développer de nouvelles fonctionnalités intelligentes (imaginez qu'on puisse personnaliser les dialogues dans une partie de GTA !).</p>
        <p>Pour les jeux en eux-mêmes, la communauté acquiert de plus en plus de compétences ; la création de "mods", d'extensions et d'émulateurs plus performants devient de plus en plus envisageable.</p>
        <p>Enfin, le rétrogaming pourrait s'ancrer encore plus dans la culture d'aujourd'hui ; même si cela paraît peu probable, on pourrait avoir des cours concernant les effets des jeux rétro sur notre société.</p>
      </div>
      <div className="illustrations">
        <figure>
          <img src={asset('Images/Page - Futur/VR-AR.jpg')} width={300} />
          <h4>Une imagination de Super Mario Bros en réalité virtuelle</h4>
        </figure>
        <figure>
          <img src={asset('Images/Page - Futur/Mod - Eléphant.jpeg')} width={300} />
          <h4>Un Mario éléphant dans Super Mario 64 ? Le résultat d'un mod !</h4>
        </figure>
      </div>

      <Pacman />
    </Rubrique>
  );
}
