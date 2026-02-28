"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const Photo = () => {
  return (
    <div
      className="
        relative
        aspect-square
        mx-auto
        overflow-hidden
        rounded-full

        /* mobile */
        w-[70vw]
        sm:w-[380px]

        /* tablet */
        md:w-[420px]

        /* desktop equilibrado */
        lg:w-[520px]
        xl:w-[600px]
      "
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
        className="w-full h-full"
      >
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="absolute inset-0"
        >
          <Image
            src="/assets/photo4.png"
            priority
            quality={100}
            fill
            alt="Albert Llica"
            className="object-cover scale-[1.03]"
          />
        </motion.div>

        {/* Animated circle */}
        <motion.svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00ff99"
            className="stroke-[2.5] lg:stroke-[3.5]"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: [
                "15 120 25 25",
                "16 25 92 92",
                "4 250 22 22",
              ],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  )
}

export default Photo