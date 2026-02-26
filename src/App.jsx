function Header() {
  return (
    <header>
      <img src="src/assets/logo-hogwarts.png" alt="Stylized atom" />
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
        <h2>Time for our young wizards to get sorted!</h2>
      </main>
    </div>
  );
}

export default App;