interface NavigationBarProps {
  children: JSX.Element | JSX.Element[];
}
export function NavigationBar({ children }: NavigationBarProps) {
  return (
    <div>
      <header className="z-10 mx-auto flex h-14 max-w-[95%] items-center justify-between bg-white">
        {children}
      </header>
    </div>
  );
}
