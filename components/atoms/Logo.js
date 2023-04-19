import Image from "next/image";

export default function ({ source, altText, width, height }) {
  return (
    <Image
      src={source}
      alt={altText}
      width={width}
      height={height}
      priority={true}
    />
  );
}
