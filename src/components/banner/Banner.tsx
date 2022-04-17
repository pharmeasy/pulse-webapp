import Image from "next/image";

export function Banner({
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  coverTitle,
  coverMessage
}) {
  return (
    <div className="w-[100%] h-52 relative">
      <div className="absolute top-0 left-0 -z-10">
        <Image
          className="object-cover align-middle"
          src={imageSrc}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
        />
      </div>
      <div className="cover-content flex flex-col items-center py-2">
        <div className="cover-title font-semibold text-4xl">{coverTitle}</div>
        <div className="cover-message text-1xl">{coverMessage}</div>
      </div>
    </div>
  );
}
