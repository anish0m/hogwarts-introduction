import Header from "./components/Header/Header.jsx";
import Houses from "./components/Houses/Houses.jsx";
import { Details } from "./components/Details/Details.jsx";

const studentDescriptions = ["Wizard", "Witch"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Houses />
        <Details />
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
            <i className="bi bi-arrow-right-short"></i>
          </a>
        </section>
      </main>
    </>
  );
}

export default App;
