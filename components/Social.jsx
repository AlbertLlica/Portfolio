import Link from "next/link"

import { FaGithub, FaLinkedinIn, FaFacebook, FaInstagram } from "react-icons/fa"

const socials = [
    { icon: <FaGithub/>, path: "https://github.com/AlbertLlica" },
    { icon: <FaLinkedinIn/>, path: "https://www.linkedin.com/in/albert-llica-alvarez" },
    { icon: <FaFacebook/>, path: "https://www.facebook.com/albert.llica" },
    { icon: <FaInstagram/>, path: "https://www.instagram.com/albert_llica" },
];

const Social = ({containerStyles, iconStyles}) => {
  return <div className={containerStyles}>
    {socials.map((item, index) => {
      return (
        <Link key={index} href={item.path} className={iconStyles}>
          {item.icon}
        </Link>
      )
    })}
  </div>
}

export default Social