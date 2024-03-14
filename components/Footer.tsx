import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const images = [
    "/icon/facebook.png",
    "/icon/instagram.png",
    "/icon/tiktok.png",
    "/icon/youtube.png",
  ];
  return (
    <div className="flex flex-col gap-5">
      <div className="w-full flex items-center justify-center gap-5">
        {images.map((image, index) => (
          <Image key={index} src={image} alt="icon" width={30} height={30} />
        ))}
      </div>
      <div className="w-full flex items-center justify-center gap-5">
        <Link href="/">Home</Link>
        <Link href="/">About</Link>
        <Link href="/">Contact Us</Link>
        <Link href="/">Our Team</Link>
      </div>
    </div>
  );
};

export default Footer;
