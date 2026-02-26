import './Header.css';
import hogwartsLogo from "../../assets/logo-hogwarts.png";

export default function Header() {
  return (
    <header>
      <img src={hogwartsLogo} alt="Hogwarts Logo" />
      <h1>Hogwarts</h1>
      <p>
        <i>Draco dormiens nunquam titillandus</i>
      </p>
    </header>
  );
}
