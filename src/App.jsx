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
        <section id="sorting-ceremony">
          <a href="https://www.harrypotter.com/news/discover-your-hogwarts-house-on-wizarding-world">
            <h3>
              Time for our young{" "}
              {
                studentDescriptions[
                  genRandomInt(studentDescriptions.length - 1)
                ]
              }{" "}
              to get sorted!
            </h3>
            <img src="./arrow-right.svg" alt="arrow pointing right" />
          </a>
        </section>
      </main>
    </div>
  );
}

export default App;
