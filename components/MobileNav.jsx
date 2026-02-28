"use client";

import {Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet';
import {usePathname} from "next/navigation";
import Link from "next/link";
import {CiMenuFries} from "react-icons/ci";
import { useLanguage } from "../contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const links = [
    {
        name: 'home',
        path: '/',
    },
    {
        name: 'services',
        path: '/services',
    },
    {
        name: 'resume',
        path: '/resume',
    },
    {
        name: 'work',
        path: '/work',
    },
    {
        name: 'contact',
        path: '/contact',
    },
];

const MobileNav = () => {
  const pathname = usePathname();
  const { t } = useLanguage();
  return (
  <Sheet>
    <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent">

        </CiMenuFries>
    </SheetTrigger>
    <SheetContent title="Mobile navigation" className="flex flex-col">
        {/* logo*/}
        <div className = "mt-32 mb-40 text-center text-2xl">
            <Link href="/">
                <h1 className='text-4xl font-semibold'>
                    Albert<span className="text-accent">.</span>
                </h1>
            </Link>
        </div>
        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
            {links.map((link, index)=> {
                return (
                <Link 
                    href={link.path} 
                    key={index} 
                    className={`${
                        link.path === pathname &&
                         "text-accent border-b-2 border-accent"
                        } text-xl capitalize hover:text-accent transition-all`}
                >
                    {t(`nav.${link.name}`)}
                </Link>
                );
            })}
        </nav>
        {/* language toggle */}
        <div className="mt-8 flex justify-center">
          <LanguageSwitcher />
        </div>
    </SheetContent>
  </Sheet>
  );
};

export default MobileNav;