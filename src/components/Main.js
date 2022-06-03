import '../styles/Main.css';
import Mainheader from './Mainheader';
import Buttons from './Buttons';
import Maincontent from './Maincontent';

function Main() {
  return (
    <main className="main">
      <Mainheader />
      <Buttons />
      <Maincontent />
    </main>
  );
}

export default Main;
