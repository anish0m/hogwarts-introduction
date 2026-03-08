import Header from "./components/Header/Header.jsx";
import Houses from "./components/Houses/Houses.jsx";
import { Details } from "./components/Details/Details.jsx";
import Sorting from "./components/Sorting/Sorting.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <Houses />
        <Details />
        <Sorting />
      </main>
    </>
  );
}

export default App;
