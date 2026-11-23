import { Link } from 'react-router-dom';
import Rubrique from '../components/Rubrique.jsx';

export default function NonTrouve() {
  return (
    <Rubrique page="introuvable" titre="Page introuvable">
      <p className="content-text"><Link to="/" className="nav-link">Retour à l'accueil</Link></p>
    </Rubrique>
  );
}
