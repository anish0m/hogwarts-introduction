export default function TabButton({ children }) {
  function handleClick() {
    console.log("alohomora!");
  }

  return (
    <li>
      <button onClick={handleClick}>{children}</button>
    </li>
  );
}
