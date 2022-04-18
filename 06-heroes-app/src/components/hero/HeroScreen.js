import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroById } from '../../helpers/getHeroById';

export const HeroScreen = () => {
  const { heroId } = useParams();
  const navigate = useNavigate();
  const hero = getHeroById(heroId);
  const handleReturn = () => {
    navigate(-1);
  };

  if (!hero) {
    return <Navigate to="/" />;
  }

  const { id, superhero, alter_ego, publisher, first_appearance, characters } =
    hero;

  const imgPath = `/assets/${id}.jpg`;

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={imgPath}
          alt={superhero}
          className="img-fluid img-thumbnail"
        />
      </div>
      <div className="col-8">
        <h3>{superhero}</h3>
        <ul className="list-group">
          <li className="list-group-item">
            <strong>Alter ego:</strong> {alter_ego}
          </li>
          <li className="list-group-item">
            <strong>Publisher:</strong> {publisher}
          </li>
          <li className="list-group-item">
            <strong>First appearance:</strong> {first_appearance}
          </li>
        </ul>
        <h4 className="mt-3">Characters</h4>
        <p>{characters}</p>
        <button className="btn btn-outline-info" onClick={handleReturn}>
          Regresar
        </button>
      </div>
    </div>
  );
};
