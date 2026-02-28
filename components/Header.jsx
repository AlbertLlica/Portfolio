"use client";

import Link from "next/link";
import { Button } from "./ui/button";

import { useLanguage } from "../contexts/LanguageContext";
//components
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const { t } = useLanguage();
  return( <header className="py-8 xl:py-12 text-white">
    <div className="container mx-auto flex justify-between items-center">
    {/*Logo */}
        <Link href="/">
            <h1 className="text-4xl font-semibold">
                Albert <span className="text-accent">.</span>
            </h1>
        </Link>


        {/* desktop nav & hire me button*/}
        <div className="hidden xl:flex items-center gap-8">
        <Nav /> 
        <a
          href={`https://wa.me/51971461834?text=${encodeURIComponent(
            t("header.whatsappMessage")
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>{t("header.hireMe")}</Button>
        </a>
        <LanguageSwitcher />
      </div>
        
        {/*mobile nav*/}
        <div className="xl:hidden">
          <MobileNav />
        </div>
    </div>
  </header>
  );
};

export default Header