"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import { motion } from "framer-motion";

const Contact = () => {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = "51971461834"; // 🇵🇪 sin +

    const text = `
  Hola, soy ${formData.firstName} ${formData.lastName}.

  📧 Email: ${formData.email}
  📱 Teléfono: ${formData.phone}
  🛠 Servicio: ${formData.service}

  💬 Mensaje:
  ${formData.message}
    `;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };
  const info = [
    {
      icon: <FaPhoneAlt />,
      title: t("contact.info.phone"),
      description: "(+51) 971 461 834",
    },
    {
      icon: <FaEnvelope />,
      title: t("contact.info.email"),
      description: "albertllica@gmail.com",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: t("contact.info.address"),
      description: "Av. España 107, A.S.A., Arequipa, Perú",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">

          {/* FORM */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleWhatsAppSubmit}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">
                {t("contact.form.heading")}
              </h3>

              <p className="text-white/60">
                {t("contact.form.paragraph")}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  placeholder={t("contact.form.firstName")}
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  required
                />
                <Input
                  placeholder={t("contact.form.lastName")}
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                  required
                />
                <Input
                  type="email"
                  placeholder={t("contact.form.email")}
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
                <Input
                  placeholder={t("contact.form.phone")}
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>

              {/* SELECT */}
              <Select
                onValueChange={(value) =>
                  setFormData({ ...formData, service: value })
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue
                    placeholder={t("contact.form.servicePlaceholder")}
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>
                      {t("contact.form.servicesLabel")}
                    </SelectLabel>
                    <SelectItem value="Web">
                      {t("contact.form.services.web")}
                    </SelectItem>
                    <SelectItem value="Mobile">
                      {t("contact.form.services.mobile")}
                    </SelectItem>
                    <SelectItem value="UI/UX">
                      {t("contact.form.services.ui")}
                    </SelectItem>
                    <SelectItem value="Other">
                      {t("contact.form.services.other")}
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* TEXTAREA */}
              <Textarea
                className="h-[200px]"
                placeholder={t("contact.form.message")}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
              />

              {/* BUTTON */}
              <Button
                type="submit"
                size="md"
                className="max-w-40 whitespace-normal text-center leading-tight px-4"
              >
                {t("contact.form.send")}
              </Button>
            </form>
          </div>

          {/* INFO */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-full flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </motion.section>
  );
};

export default Contact;