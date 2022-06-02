import profile from '../images/profile-img.png';
import '../styles/Card.css';
import Main from './Main';

function Card() {
  return (
    <div className="card-container">
      <img className="profile-pic" src={profile} alt="profile-pic" />
      <Main />
    </div>
  );
}

export default Card;
