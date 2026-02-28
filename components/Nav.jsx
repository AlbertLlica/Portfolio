"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "../contexts/LanguageContext";

const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "services",
        path: "/services",
    },
    {
        name: "resume",
        path: "/resume",
    },
    {
        name: "work",
        path: "/work",
    },
    {
        name: "contact",
        path: "/contact",
    },
];

const Nav = () => {
  const pathname = usePathname();
  const { t } = useLanguage();
  return( 
    <nav className = "flex gap-8"> 
        {links.map((link, index) => {
            return (
            <Link 
                href={link.path} 
                key={index} 
                className={`${
                    link.path === pathname && "text-accent border-b-2 border-accent"
                } capitalize font-medium hover:text-accent transition-all`}>
                {t(`nav.${link.name}`)}
            </Link>
            );
        })}
    </nav>
  );
};

export default Nav;