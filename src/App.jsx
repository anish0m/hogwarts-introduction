import hogwartsLogo from "./assets/logo-hogwarts.png";
import gryffindorLogo from "./assets/logo-gryffindor.png";
import hufflepuffLogo from "./assets/logo-hufflepuff.png";
import ravenclawLogo from "./assets/logo-ravenclaw.png";
import slytherinLogo from "./assets/logo-slytherin.png";

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
              title="Gryffindor"
              values="Courage, Bravery, Nerve, Chivalry"
              description="Being home of the courageous, Gryffindor house's emblematic animal is the lion, and its colors are scarlet and gold."
              image={gryffindorLogo}
            />
            <House
              title="Hufflepuff"
              values="Hard Work, Patience, Loyalty, Fair Play"
              description="Being home of the hardworking, Hufflepuff house's emblematic animal is the badger, and its colors are yellow and black."
              image={hufflepuffLogo}
            />
            <House
              title="Ravenclaw"
              values="Intelligence, Creativity, Learning, Wit"
              description="Being home of the intelligent, Ravenclaw house's emblematic animal is the eagle, and its colors are blue and silver."
              image={ravenclawLogo}
            />
            <House
              title="Slytherin"
              values="Ambition, Cunning, Resourcefulness"
              description="Being home of the ambitious, Slytherin house's emblematic animal is the serpent, and its colors are green and silver."
              image={slytherinLogo}
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
