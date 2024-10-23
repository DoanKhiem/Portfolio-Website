import Link from "next/link";

import { FaFacebook, FaGithub, FaTiktok, FaYoutube } from "react-icons/fa";

interface SocialProps {
  containerStyles: string;
  iconStyles: string;
}

const socials = [
  { icon: <FaGithub />, path: "https://github.com/DoanKhiem" },
  { icon: <FaFacebook />, path: "https://www.facebook.com/doankhiem1999" },
  { icon: <FaTiktok />, path: "https://www.tiktok.com/@sadboizit" },
  { icon: <FaYoutube />, path: "https://www.youtube.com/@SadboizIT" },
];

const Social: React.FC<SocialProps> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => {
        return (
          <Link target="_blank" key={index} href={social.path} className={iconStyles}>
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
