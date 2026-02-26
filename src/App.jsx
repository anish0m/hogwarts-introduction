import hogwartsLogo from "./assets/logo-hogwarts.png";
import { HOGWARTS_HOUSES } from "./data.js";

const studentDescriptions = ["Wizard", "Witch"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
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

function House({image, title, values, description}) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <h5>{values}</h5>
      <p>{description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="hogwarts-houses">
          <h2>Hogwarts Houses</h2>
          <ul>
            <House {...HOGWARTS_HOUSES[0]} />
            <House {...HOGWARTS_HOUSES[1]} />
            <House {...HOGWARTS_HOUSES[2]} />
            <House {...HOGWARTS_HOUSES[3]} />
          </ul>
        </section>
        <h2>
          Time for our young{" "}
          {studentDescriptions[genRandomInt(studentDescriptions.length - 1)]} to
          get sorted!
        </h2>
      </main>
    </div>
  );
}

export default App;
