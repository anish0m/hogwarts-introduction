import { useState } from "react";
import TabButton from "../TabButton.jsx";
import { CONTENTS } from "../../data.js";

import "./Details.css";

export function Details() {
  const [selectedTabContent, setSelectedTabContent] = useState();

  function handleSelect(selectedTab) {
    setSelectedTabContent(selectedTab);
    console.log(selectedTabContent);
  }

  return (
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
  );
}
