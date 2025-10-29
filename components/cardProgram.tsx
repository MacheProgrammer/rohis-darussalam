"use client";

import Image from "next/image";
import { Program } from "../lib/divisi";
import { motion } from "framer-motion";

export default function CardProgram({ program }: { program: Program }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="overflow-hidden rounded-xl bg-white shadow-md"
    >
      <div className="relative aspect-video h-44">
        <Image
          src={program.foto}
          alt={program.nama}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-4">
        <h4 className="text-lg font-semibold text-gray-800">{program.nama}</h4>
        <p className="mt-2 text-sm wrap-break-word whitespace-normal text-gray-600">
          {program.info}
        </p>
      </div>
    </motion.div>
  );
}
