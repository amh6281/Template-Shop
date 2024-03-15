import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="grid place-items-center">
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
