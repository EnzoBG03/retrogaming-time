export default function EnTete({ titre = 'Le Rétrogaming', onClick }) {
  return (
    <header className="header" id="titre" onClick={onClick}>
      <h1 className="title" id="main-title">{titre}</h1>
    </header>
  );
}
