interface NavigationListProps {
  children: JSX.Element | JSX.Element[];
}

export function NavigationList({ children }: NavigationListProps) {
  return (
    <nav>
      <ul className="m-0 flex w-[100%] list-none p-0">{children}</ul>
    </nav>
  );
}
