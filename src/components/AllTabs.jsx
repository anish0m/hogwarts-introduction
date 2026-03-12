export default function AllTabs({ children, buttons }) {
  return (
    <>
      <menu>
        {buttons}
      </menu>
      {children}
    </>
  );
}
