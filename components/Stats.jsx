"use client"

import CountUp from "react-countup"
import { useRef } from "react"
import { useLanguage } from "../contexts/LanguageContext"

const Stats = () => {
  const { t } = useLanguage()
  const stats = t("stats", { returnObjects: true }) || []

  const firstLoadRef = useRef(true)

  const baseDelay = firstLoadRef.current ? 0.8 : 0.2
  const duration = firstLoadRef.current ? 2.6 : 1.8

  if (firstLoadRef.current) {
    setTimeout(() => {
      firstLoadRef.current = false
    }, 0)
  }

  return (
    <section className="pt-4 pb-8 lg:pt-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[90vw] sm:max-w-[80vw] mx-auto xl:max-w-none items-center">
          {stats.map((item, index) => (
            <div
              key={`${item.text}-${index}`}
              className="flex-1 flex flex-col sm:flex-row gap-4 items-center justify-center xl:justify-start text-center xl:text-left"
            >
              <CountUp
                key={`${item.text}-${item.num}`}
                end={item.num}
                duration={duration}
                delay={baseDelay + index * 0.15}
                className="text-3xl sm:text-4xl xl:text-6xl font-extrabold"
              />
              <p
                className={`${
                  item.text.length < 15 ? "max-w-[160px]" : "max-w-[150px]"
                } leading-snug text-white/80`}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats