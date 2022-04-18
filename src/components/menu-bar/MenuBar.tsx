interface MenuBarProps {
  children: JSX.Element | JSX.Element[];
}

export function MenuBar({ children }: MenuBarProps) {
  return (
    <div
      className="sticky flex h-16 items-center justify-center rounded-t-2xl px-4 py-3"
      style={{ boxShadow: 'rgb(0 0 0 / 41%) 0px -4px 3px' }}
    >
      {children}
    </div>
  );
}
