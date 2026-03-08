import "./Sorting.css";

export default function Sorting() {
  const studentDescriptions = ["Wizard", "Witch"];

  function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
  }
  
  return (
    <section id="sorting-ceremony">
      <a href="https://www.harrypotter.com/news/discover-your-hogwarts-house-on-wizarding-world">
        <h3>
          Time for our young{" "}
          {studentDescriptions[genRandomInt(studentDescriptions.length - 1)]} to
          get sorted!
        </h3>
        <i className="bi bi-arrow-right-short"></i>
      </a>
    </section>
  );
}
