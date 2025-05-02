"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"
import type { ReactNode } from "react"

interface ServiceDetailCardProps {
  id: string
  title: string
  description: string
  icon: ReactNode
  details: string[]
  isReversed?: boolean
}

export default function ServiceDetailCard({
  id,
  title,
  description,
  icon,
  details,
  isReversed = false,
}: ServiceDetailCardProps) {
  return (
    <motion.div
      id={id}
      className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 lg:gap-16 items-center`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="w-full lg:w-1/2">
        <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 p-8 rounded-2xl border border-purple-500/20 backdrop-blur-sm">
          <div className="mb-6">{icon}</div>
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <p className="text-gray-300 mb-8">{description}</p>

          <div className="space-y-4">
            {details.map((detail, index) => (
              <motion.div
                key={index}
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-gray-200">{detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2">
        <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-2xl h-64 lg:h-full min-h-[300px] flex items-center justify-center p-8 border border-blue-500/10 backdrop-blur-sm">
          <div className="text-center">
            <div className="text-6xl mb-4 opacity-80">{icon}</div>
            <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              {title}
            </h3>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
