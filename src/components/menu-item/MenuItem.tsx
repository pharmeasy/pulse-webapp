interface MenuItemProps {
  children: JSX.Element | JSX.Element[];
  itemText: string;
  isSelected?: boolean;
}

export function MenuItem({
  children,
  itemText,
  isSelected = false,
}: MenuItemProps) {
  return (
    <div
      className={`w-[30%] h-[100%] p-[3px] rounded-2xl flex justify-center items-center place-content-around  ${
        isSelected ? 'bg-skyblue text-white' : 'text-black'
      }`}
    >
      {children}
      <span className="ml-2 text-xs font-semibold">{itemText}</span>
    </div>
  );
}
