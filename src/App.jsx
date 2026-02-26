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

function House(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <h5>{props.values}</h5>
      <p>{props.description}</p>
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
            <House
              title={HOGWARTS_HOUSES[0].title}
              values={HOGWARTS_HOUSES[0].values}
              description={HOGWARTS_HOUSES[0].description}
              image={HOGWARTS_HOUSES[0].image}
            />
            <House
              title={HOGWARTS_HOUSES[1].title}
              values={HOGWARTS_HOUSES[1].values}
              description={HOGWARTS_HOUSES[1].description}
              image={HOGWARTS_HOUSES[1].image}
            />
            <House
              title={HOGWARTS_HOUSES[2].title}
              values={HOGWARTS_HOUSES[2].values}
              description={HOGWARTS_HOUSES[2].description}
              image={HOGWARTS_HOUSES[2].image}
            />
            <House
              title={HOGWARTS_HOUSES[3].title}
              values={HOGWARTS_HOUSES[3].values}
              description={HOGWARTS_HOUSES[3].description}
              image={HOGWARTS_HOUSES[3].image}
            />
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
