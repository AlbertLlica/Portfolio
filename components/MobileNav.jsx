"use client";

import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { useLanguage } from "../contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const links = [
    { name: 'home', path: '/' },
    { name: 'services', path: '/services' },
    { name: 'resume', path: '/resume' },
    { name: 'work', path: '/work' },
    { name: 'contact', path: '/contact' },
];

const MobileNav = () => {
  const pathname = usePathname();
  const { t } = useLanguage();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent title="Mobile navigation" className="flex flex-col p-6">
        {/* logo */}
        <div className="mt-12 mb-8 text-center">
          <SheetClose asChild>
            <Link href="/">
              <h1 className="text-4xl font-semibold">
                Albert<span className="text-accent">.</span>
              </h1>
            </Link>
          </SheetClose>
        </div>

        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-6 flex-1">
          {links.map((link, index) => (
            <SheetClose asChild key={index}>
              <Link
                href={link.path}
                className={`${
                  link.path === pathname ? "text-accent border-b-2 border-accent" : ""
                } text-xl capitalize hover:text-accent transition-all`}
              >
                {t(`nav.${link.name}`)}
              </Link>
            </SheetClose>
          ))}
        </nav>

        {/* language toggle */}
        <div className="pb-6 flex justify-center">
          <LanguageSwitcher />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
