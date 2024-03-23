import { footerImages, footerLinks } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="flex flex-col gap-5 fixed bottom-10 left-0 w-full">
      <div className="w-full flex items-center justify-center gap-5">
        {footerImages.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={image.alt}
            width={30}
            height={30}
          />
        ))}
      </div>
      <div className="w-full flex items-center justify-center gap-5">
        {footerLinks.map((link, index) => (
          <Link key={index} href={link.href}>
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
