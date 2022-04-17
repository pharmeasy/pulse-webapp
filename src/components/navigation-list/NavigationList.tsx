export function NavigationList({ children }) {
  return (
    <nav>
      <ul className="list-none p-0 m-0 w-[100%] flex">{children}</ul>
    </nav>
  );
}
