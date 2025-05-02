"use client"

import { motion } from "framer-motion"

interface ConsultingStepProps {
  number: number
  title: string
  description: string
  colorGradient: string
}

export default function ConsultingStep({ number, title, description, colorGradient }: ConsultingStepProps) {
  return (
    <motion.div
      className="flex items-start gap-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: number * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div
        className={`flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br ${colorGradient} flex items-center justify-center text-xl font-bold`}
      >
        {number}
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </motion.div>
  )
}
