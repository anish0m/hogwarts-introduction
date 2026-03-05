import gryffindorLogo from "./assets/logo-gryffindor.png";
import hufflepuffLogo from "./assets/logo-hufflepuff.png";
import ravenclawLogo from "./assets/logo-ravenclaw.png";
import slytherinLogo from "./assets/logo-slytherin.png";

import academicsTabImg from "./assets/hogwarts-professors.png";
import quidditchTabImg from "./assets/quidditch-pitch.png";
import clubsTabImg from "./assets/hogwarts-clubs.png";
import hogsmeadeTabImg from "./assets/hogsmeade-village.png";

export const HOGWARTS_HOUSES = [
  {
    image: gryffindorLogo,
    title: "Gryffindor",
    values: "Courage, Bravery, Nerve, Chivalry",
    description:
      "Being home of the courageous, Gryffindor house's emblematic animal is the lion, and its colors are scarlet and gold.",
  },
  {
    image: hufflepuffLogo,
    title: "Hufflepuff",
    values: "Hard Work, Patience, Loyalty, Fair Play",
    description:
      "Being home of the hardworking, Hufflepuff house's emblematic animal is the badger, and its colors are yellow and black.",
  },
  {
    image: ravenclawLogo,
    title: "Ravenclaw",
    values: "Intelligence, Creativity, Learning, Wit",
    description:
      "Being home of the intelligent, Ravenclaw house's emblematic animal is the eagle, and its colors are blue and silver.",
  },
  {
    image: slytherinLogo,
    title: "Slytherin",
    values: "Ambition, Cunning, Resourcefulness",
    description:
      "Being home of the ambitious, Slytherin house's emblematic animal is the serpent, and its colors are green and silver.",
  },
];

export const CONTENTS = {
  academics: {
    title: "Academic Curriculum",
    description:
      "Explore the magical subjects taught at Hogwarts, from Potions and Transfiguration to Defense Against the Dark Arts. Discover how first-years are introduced to the wizarding world through a blend of theory and practical lessons, guided by expert professors and enchanted textbooks.",
    source: academicsTabImg,
    link: {
      text: "Learn more about Hogwarts curriculum",
      url: "https://harrypotter.fandom.com/wiki/Hogwarts_curriculum"
    }
  },
  quidditch: {
    title: "Quidditch Matches",
    description:
      "Experience the thrill of Quidditch, the most popular sport in the wizarding world! Learn about the different player positions, the rules of the game, and the excitement of house rivalries as students compete for the coveted Quidditch Cup.",
    source: quidditchTabImg,
    link: {
      text: "Learn more about Quidditch",
      url: "https://harrypotter.fandom.com/wiki/Quidditch"
    }
  },
  clubs: {
    title: "Clubs in Hogwarts",
    description:
      "Hogwarts offers a variety of clubs for students to pursue their interests and talents outside of class. From the Dueling Club to the Gobstones Club, find out how students connect, collaborate, and compete in friendly gatherings throughout the year.",
    source: clubsTabImg,
    link: {
      text: "Learn more about Hogwarts clubs",
      url: "https://harrypotter.fandom.com/wiki/Hogwarts_clubs"
    }
  },
  hogsmeade: {
    title: "Trip to Hogsmeade",
    description:
      "Join the magical excursions to Hogsmeade, the only all-wizarding village in Britain. Discover the delights of Honeydukes, Zonko’s Joke Shop, and the Shrieking Shack as students enjoy a day of fun, treats, and adventure outside the castle walls.",
    source: hogsmeadeTabImg,
    link: {
      text: "Learn more about Hogsmeade",
      url: "https://harrypotter.fandom.com/wiki/Hogsmeade"
    }
  }
};