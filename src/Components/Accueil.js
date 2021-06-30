import '../styles/Accueil.css';

function Accueil() {
  return (
    <div className="Accueil">
          <h1 className="Accueilh1">Site d'actualités</h1>
          <select>
              <option>Défault</option>
              <option>Publiez cette année</option>
              <option>Par ordre décroissant</option>
          </select>
    </div>
  );
}

export default Accueil;
