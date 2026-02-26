import hogwartsLogo from './assets/logo-hogwarts.png';

const studentDescriptions = ['Wizard', 'Witch'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  return (
    <header>
      <img src={hogwartsLogo} alt="Stylized atom" />
      <h1>Hogwarts</h1>
      <p>
        <i>Draco dormiens nunquam titillandus</i>
      </p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time for our young {studentDescriptions[genRandomInt(studentDescriptions.length - 1)]} to get sorted!</h2>
      </main>
    </div>
  );
}

export default App;