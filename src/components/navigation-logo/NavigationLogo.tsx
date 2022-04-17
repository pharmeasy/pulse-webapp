import Link from "next/link";
import Image from "next/image";

export function NavigationLogo({ imageSrc, imageAlt, width, height }) {
  return (
    <Link href="/">
      <a className="border-none flex items-center justify-center">
        <Image src={imageSrc} alt={imageAlt} width={width} height={height} />
      </a>
    </Link>
  );
}
