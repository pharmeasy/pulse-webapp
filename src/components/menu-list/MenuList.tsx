interface MenuListProps {
  children: JSX.Element | JSX.Element[];
}
export function MenuList({ children }: MenuListProps) {
  return (
    <div className="flex w-[100%] place-content-between rounded-2xl bg-[#F8F8F8] p-1">
      {children}
    </div>
  );
}
