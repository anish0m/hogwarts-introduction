import House from "../House/House.jsx";
import { HOGWARTS_HOUSES } from "../../data.js";

import "./Houses.css";

export default function Houses() {
  return (
    <section id="hogwarts-houses">
      <h2>Hogwarts Houses</h2>
      <ul>
        {HOGWARTS_HOUSES.map((house) => (
          <House key={house.name} {...house} />
        ))}
      </ul>
    </section>
  );
}
