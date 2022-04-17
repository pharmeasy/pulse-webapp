import Image from "next/image";

export function NavigationItem({imageSrc, imageAlt, imageWidth, imageHeight}) {
  return (
    <li className="w-[34px] h-[34px] p-0.5 mr-1 flex items-center justify-center">
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={imageWidth}
        height={imageHeight}
      />
    </li>
  );
}