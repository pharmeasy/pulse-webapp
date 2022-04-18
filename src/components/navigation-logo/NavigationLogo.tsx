import Link from 'next/link';

interface NavigationLogoProps {
  children: JSX.Element | JSX.Element[];
}

export function NavigationLogo({ children }: NavigationLogoProps) {
  return (
    <Link href="/">
      <a className="flex h-[36px] w-[128px] items-center justify-center border-none">
        {children}
      </a>
    </Link>
  );
}
