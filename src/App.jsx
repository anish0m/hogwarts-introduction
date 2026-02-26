import { HOGWARTS_HOUSES } from "./data.js";
import Header from "./components/Header/Header.jsx";
import House from "./components/House/House.jsx";

const studentDescriptions = ["Wizard", "Witch"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
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
