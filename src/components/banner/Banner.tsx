import Image from 'next/image';

interface BannerProps {
  imageSrc: string;
  imageAlt: string;
  coverTitle: string;
  coverMessage: string;
}

export function Banner({
  imageSrc,
  imageAlt,
  coverTitle,
  coverMessage,
}: BannerProps) {
  return (
    <div className="relative h-52 w-[100%]">
      <div className="absolute top-0 left-0 -z-10">
        <Image
          className="object-cover align-middle"
          src={imageSrc}
          alt={imageAlt}
          width={390}
          height={208}
        />
      </div>
      <div className="flex flex-col items-center py-2">
        <div className="text-4xl font-semibold">{coverTitle}</div>
        <div className="text-xl">{coverMessage}</div>
      </div>
    </div>
  );
}
