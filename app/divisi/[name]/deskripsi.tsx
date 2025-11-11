"use client";
import { PenjelasanDivisi } from "@/lib/divisi";
import { easeInOut, motion } from "framer-motion";
function Deskripsi(description: { description: PenjelasanDivisi }) {
  return (
    <div className="mx-auto mb-8 flex w-full max-w-4xl flex-col gap-3">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: easeInOut }}
        // viewport={{ once: true }}
        className="w-full"
      >
        <p
          className={`px-4 text-center text-xl leading-relaxed font-semibold text-neutral-300 md:text-lg`}
        >
          {description.description.first}
        </p>
      </motion.div>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8, ease: easeInOut }}
        // viewport={{ once: true }}
        className="w-full"
      >
        <p className="text-xl font-medium text-neutral-300 md:text-lg">
          {description.description.sabda}
        </p>
        <div className="border-l-5 border-white bg-black/60 px-2 py-6 md:text-lg">
          <p
            className={`px-4 text-left text-xl leading-relaxed font-semibold text-neutral-300`}
          >
            {description.description.quotes}
          </p>
          <p
            className={`px-4 text-left text-xl leading-relaxed font-semibold text-neutral-300`}
          >
            {description.description.ayat}
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: easeInOut }}
        // viewport={{ once: true }}
        className="w-full"
      >
        <p
          className={`px-4 text-center text-xl leading-relaxed font-semibold text-neutral-300 md:text-lg`}
        >
          {description.description.last}
        </p>
      </motion.div>
    </div>
  );
}

export default Deskripsi;
