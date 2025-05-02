"use client"

import { motion } from "framer-motion"

interface SigmaLogoProps {
  size?: number
}

export default function SigmaLogo({ size = 40 }: SigmaLogoProps) {
  return (
    <motion.div className="relative" style={{ width: size, height: size }} whileHover={{ scale: 1.05 }}>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg opacity-80"></div>
      <div
        className="absolute inset-0 flex items-center justify-center text-white font-bold"
        style={{ fontSize: size * 0.6 }}
      >
        Σ
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg opacity-30 blur-md"></div>
    </motion.div>
  )
}
