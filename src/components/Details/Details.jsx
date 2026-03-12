import { useState } from "react";
import TabButton from "../TabButton.jsx";
import Section from "../Section.jsx";
import { CONTENTS } from "../../data.js";

import "./Details.css";

export function Details() {
  const [selectedTabContent, setSelectedTabContent] = useState();

  function handleSelect(selectedTab) {
    setSelectedTabContent(selectedTab);
    console.log(selectedTabContent);
  }

  return (
    <Section title="Everything about Hogwarts Life" id="hogwarts-all">
      <menu>
        <TabButton
          isSelected={selectedTabContent === "academics"}
          onClick={() => handleSelect("academics")}
        >
          Academic Curriculum
        </TabButton>
        <TabButton
          isSelected={selectedTabContent === "quidditch"}
          onClick={() => handleSelect("quidditch")}
        >
          Quidditch Matches
        </TabButton>
        <TabButton
          isSelected={selectedTabContent === "clubs"}
          onClick={() => handleSelect("clubs")}
        >
          Clubs in Hogwarts
        </TabButton>
        <TabButton
          isSelected={selectedTabContent === "hogsmeade"}
          onClick={() => handleSelect("hogsmeade")}
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
    </Section>
  );
}
