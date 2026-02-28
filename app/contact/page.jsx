"use client";

import { Button } from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "../../contexts/LanguageContext";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import {motion} from "framer-motion";

const Contact = () => {
  const { t } = useLanguage();
  const info = [
    {
      icon: <FaPhoneAlt />, 
      title: t("contact.info.phone"),
      description: "+123 456 7890",
    },
    {
      icon: <FaEnvelope />, 
      title: t("contact.info.email"),
      description: "contact@example.com",
    },
    {
      icon: <FaMapMarkerAlt />, 
      title: t("contact.info.address"),
      description: "123 Main Street, City, Country",
    },
  ];

  return (
     <motion.section 
          initial={{ opacity: 0}}
          animate={{ 
            opacity: 1,
            transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
          }}
          className="py-6"
        >
          <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row gap-[30px]">
              {/*form*/}
              <div className="xl:h-[54%] order-2 xl:order-none">
                <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                  <h3 className="text-4xl text-accent">
                    {t("contact.form.heading")} <br />
                  </h3>
                  <p className="text-white/60">
                    {t("contact.form.paragraph")}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input type="firstname" placeholder={t("contact.form.firstName")} />
                    <Input type="lastname" placeholder={t("contact.form.lastName")} />
                    <Input type="email" placeholder={t("contact.form.email")} />
                    <Input type="phone" placeholder={t("contact.form.phone")} />
                  </div>
                  {/* select */}
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder={t("contact.form.servicePlaceholder")} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>{t("contact.form.servicesLabel")}</SelectLabel>
                        <SelectItem value="web">{t("contact.form.services.web")}</SelectItem>
                        <SelectItem value="mobile">{t("contact.form.services.mobile")}</SelectItem>
                        <SelectItem value="ui">{t("contact.form.services.ui")}</SelectItem>
                        <SelectItem value="other">{t("contact.form.services.other")}</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  {/* text area */}
                  <Textarea className="h-[200px]" 
                  placeholder={t("contact.form.message")} />
                  {/* button */}
                  <Button size="md" className="max-w-40">{t("contact.form.send")}</Button>
                </form>
              </div>
              {/*info*/}
              <div className="flex-1 flex items-center xl:justify-end order-1
              xl:order-none mb-8 xl:mb-0">
                <ul className="flex flex-col gap-10">
                  {info.map((item, index) => {
                    return (
                      <li key={index} className="flex items-center gap-6">
                        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-full items-center justify-center flex">
                          <div className="text-[28px]">{item.icon}</div>
                        </div>
                        <div className="flex-1">
                          <p className="text-white/60">{item.title}</p>
                          <h3 className="text-xl">{item.description}</h3>
                        </div>
                      </li>
                    );
                  })}

                </ul>
              </div>
            </div>
          </div>
      </motion.section>    
  );
}

export default Contact