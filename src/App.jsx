import { useState } from "react";
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
  const [selectedTabContent, setSelectedTabContent] = useState();

  function handleSelect(selectedTab) {
    setSelectedTabContent(selectedTab);
    console.log(selectedTabContent);
  }
  return (
    <>
      <Header />
      <main>
        <section id="hogwarts-houses">
          <h2>Hogwarts Houses</h2>
          <ul>
            {HOGWARTS_HOUSES.map((house) => (
              <House key={house.name} {...house} />
            ))}
          </ul>
        </section>

        <section id="hogwarts-all">
          <h2>Everything about Hogwarts Life</h2>
          <menu>
            <TabButton
              isSelected={selectedTabContent === "academics"}
              onSelect={() => handleSelect("academics")}
            >
              Academic Curriculum
            </TabButton>
            <TabButton
              isSelected={selectedTabContent === "quidditch"}
              onSelect={() => handleSelect("quidditch")}
            >
              Quidditch Matches
            </TabButton>
            <TabButton
              isSelected={selectedTabContent === "clubs"}
              onSelect={() => handleSelect("clubs")}
            >
              Clubs in Hogwarts
            </TabButton>
            <TabButton
              isSelected={selectedTabContent === "hogsmeade"}
              onSelect={() => handleSelect("hogsmeade")}
            >
              Trip to Hogsmeade
            </TabButton>
          </menu>
          <div id="tab-content">
            {!selectedTabContent ? (
              <h4>What do you want to explore?</h4>
            ) : (
              <div>
                <h3>{CONTENTS[selectedTabContent].title}</h3>
                <p>{CONTENTS[selectedTabContent].description}</p>
                <img
                  src={CONTENTS[selectedTabContent].source}
                  alt={CONTENTS[selectedTabContent].title}
                />
                <a href={CONTENTS[selectedTabContent].link.url}>
                  <h5>{CONTENTS[selectedTabContent].link.text}</h5>
                  <i className="bi bi-arrow-right-short"></i>
                </a>
              </div>
            )}
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
            <i className="bi bi-arrow-right-short"></i>
          </a>
        </section>
      </main>
    </>
  );
}

export default App;
