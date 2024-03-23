'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

const bannerImages = [
  '/banner/banner1.jpeg',
  '/banner/banner2.jpeg',
  '/banner/banner3.jpeg',
];

const Banner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
  };

  useEffect(() => {
    // 3초마다 다음 이미지로 이동
    const interval = setInterval(goToNextImage, 3000);

    // 컴포넌트가 언마운트되면 인터벌 클리어
    return () => clearInterval(interval);
  }, [currentImageIndex]); // currentImageIndex가 변경될 때마다 useEffect 실행

  return (
    <div className="grid place-items-center bg-zinc-50">
      <Image
        src={bannerImages[currentImageIndex]}
        alt="Banner"
        width={1920}
        height={40}
        objectFit="contain"
      />
    </div>
  );
};

export default Banner;
