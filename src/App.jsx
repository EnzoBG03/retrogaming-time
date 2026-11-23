import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Accueil from './pages/Accueil.jsx';
import Quoi from './pages/Quoi.jsx';
import Concept from './pages/Concept.jsx';
import Comment from './pages/Comment.jsx';
import Avin from './pages/Avin.jsx';
import Opinion from './pages/Opinion.jsx';
import Futur from './pages/Futur.jsx';
import NonTrouve from './pages/NonTrouve.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Accueil />} />
        <Route path="quoi" element={<Quoi />} />
        <Route path="concept" element={<Concept />} />
        <Route path="comment" element={<Comment />} />
        <Route path="avin" element={<Avin />} />
        <Route path="opinion" element={<Opinion />} />
        <Route path="futur" element={<Futur />} />
        <Route path="*" element={<NonTrouve />} />
      </Route>
    </Routes>
  );
}
