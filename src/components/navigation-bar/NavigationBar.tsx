export function NavigationBar({ children }) {
  return (
    <div className="w-[100%] h-[100%]">
      <header className="bg-white h-14 mx-auto z-10 flex items-center justify-between max-w-[95%]">
        {children}
      </header>
    </div>
  );
}
