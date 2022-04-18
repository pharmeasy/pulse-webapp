import Image from 'next/image';

interface NavigationItemProps {
  imageSrc: string;
  imageAlt: string;
}

export function NavigationItem({ imageSrc, imageAlt }: NavigationItemProps) {
  return (
    <li className="mr-1 flex h-[34px] w-[34px] items-center justify-center p-0.5">
      <Image src={imageSrc} alt={imageAlt} width={20} height={20} />
    </li>
  );
}
