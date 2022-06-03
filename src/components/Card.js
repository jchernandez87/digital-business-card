import profile from '../images/profile-img.png';
import '../styles/Card.css';
import Main from './Main';
import Footer from './Footer';

function Card() {
  return (
    <div className="card-container">
      <img className="profile-pic" src={profile} alt="profile-pic" />
      <Main />
      <Footer />
    </div>
  );
}

export default Card;
