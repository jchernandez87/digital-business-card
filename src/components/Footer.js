import '../styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <a href="https://github.com/jchernandez87" rel="noreferrer" target="_blank">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="https://twitter.com/Juancar70771241" rel="noreferrer" target="_blank">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="https://www.instagram.com/_nihilest/" rel="noreferrer" target="_blank">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
    </footer>
  );
}

export default Footer;
