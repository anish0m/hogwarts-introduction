import { use, useState } from "react";
import { HOGWARTS_HOUSES } from "./data.js";
import Header from "./components/Header/Header.jsx";
import House from "./components/House/House.jsx";
import TabButton from "./components/TabButton.jsx";
import { CONTENTS } from "./data.js";

const studentDescriptions = ["Wizard", "Witch"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function App() {
  const [selectedTabContent, setSelectedTabContent] = useState("academics");

  function handleSelect(selectedTab) {
    setSelectedTabContent(selectedTab);
    console.log(selectedTabContent);
  }
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

        <section id="hogwarts-all">
          <h2>Everything about Hogwarts Life</h2>
          <menu>
            <TabButton onSelect={() => handleSelect("academics")}>
              Academic Curriculum
            </TabButton>
            <TabButton onSelect={() => handleSelect("quidditch")}>
              Quidditch Matches
            </TabButton>
            <TabButton onSelect={() => handleSelect("clubs")}>
              Clubs in Hogwarts
            </TabButton>
            <TabButton onSelect={() => handleSelect("hogsmeade")}>
              Trip to Hogsmeade
            </TabButton>
          </menu>
          <div id="tab-content">
            <h3>{CONTENTS[selectedTabContent].title}</h3>
            <p>{CONTENTS[selectedTabContent].description}</p>
            <img
              src={CONTENTS[selectedTabContent].source}
              alt={CONTENTS[selectedTabContent].title}
            />
            <a href={CONTENTS[selectedTabContent].link.url}>
              <h5>{CONTENTS[selectedTabContent].link.text}</h5>
              <i class="bi bi-arrow-right-short"></i>
            </a>
          </div>
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
            <i class="bi bi-arrow-right-short"></i>
          </a>
        </section>
      </main>
    </div>
  );
}

export default App;
