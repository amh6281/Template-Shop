"use client";

import Image from "next/image";

const Banner = () => {
  return (
    <div className="grid place-items-center bg-zinc-50">
      <Image
        src="/banner/banner1.jpeg"
        alt="Banner"
        width={1920}
        height={40}
        objectFit="contain"
      />
    </div>
  );
};

export default Banner;
