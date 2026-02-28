"use client";

import { Button } from "@/components/ui/button";
import {FiDownload} from "react-icons/fi"
import { useLanguage } from "../contexts/LanguageContext";

//components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  const { t } = useLanguage();
  return (
  <section className="overflow-x-hidden">
    <div className="container mx-auto min-h-screen flex flex-col justify-center items-center xl:justify-between xl:pt-8 xl:pb-24">
      <div className="flex flex-col xl:flex-row items-center justify-center xl:justify-between">
        {/* text */}
        <div className="text-center xl:text-left order-2 xl:order-none px-4">
          <span className="text-lg sm:text-xl">{t("home.profession")}</span>
          <h1 className="h1 mb-6">
            {t("home.greeting")} <br/> <span className="text-accent">Albert Llica</span>
          </h1>
          <p className="max-w-[90vw] sm:max-w-[500px] mb-9 text-white/80">
            {t("home.intro")}
          </p>
          {/*btn and socials */}
          <div className="flex flex-col xl:flex-row items-center gap-8">
            <Button 
              variant="outline" 
              size="lg" 
              className="uppercase flex items-center gap-2"
            >
              <span>{t("home.downloadCV")}</span>
              <FiDownload className="text-xl" />
            </Button>
            <div className="mb-8 xl:mb-0">
              <Social 
              containerStyles="flex gap-6" 
              iconStyles="w-9 h-9 border border-accent rounded-full flex 
              justify-center items-center text-accent text-base hover:bg-accent
              hover:text-primary hover:transition-all duration-500"
              />
            </div>
          </div>
        </div>
        {/* photo*/}
        <div className="order-1 xl:order-none mb-8 xl:mb-0 flex-shrink-0">
          <Photo />
        </div>
      </div>
    </div>
    <Stats />
  </section>
  );
}

export default Home