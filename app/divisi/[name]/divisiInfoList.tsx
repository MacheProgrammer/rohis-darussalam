"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PenjelasanSection } from "@/lib/divisi";
import { Montserrat } from "next/font/google";

const MontserratFont = Montserrat({
  subsets: ["latin"],
});

export default function DivisiInfoList({
  penjelasan,
}: {
  penjelasan: PenjelasanSection[];
}) {
  return (
    <section className="container mx-auto my-10 px-4 py-8">
      <div className="space-y-16">
        {penjelasan.map((item, idx) => {
          const reverse = idx % 2 === 1;

          const imageFrom = reverse
            ? { x: 80, opacity: 0 }
            : { x: -80, opacity: 0 };
          const textFrom = reverse
            ? { x: -80, opacity: 0 }
            : { x: 80, opacity: 0 };

          return (
            <div
              key={idx}
              className={`flex flex-col items-center justify-center gap-8 md:gap-12 lg:flex-row ${
                reverse ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Gambar */}
              <motion.div
                initial={imageFrom}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, amount: 0.2 }}
                className="w-full items-center lg:w-2/5"
              >
                <div className="relative mx-auto aspect-video max-w-lg overflow-hidden rounded-lg shadow-md">
                  <Image
                    src={item.foto}
                    alt={item.judul ?? ""}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </motion.div>

              {/* Teks */}
              <motion.div
                initial={textFrom}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.05 }}
                viewport={{ once: true, amount: 0.2 }}
                className="w-full lg:w-1/2"
              >
                {item.judul && (
                  <p
                    className={`mt-4 px-4 text-center text-xl leading-relaxed font-bold text-neutral-100 ${MontserratFont.className}`}
                  >
                    {item.judul}
                  </p>
                )}
                <p className="mt-4 px-4 text-center leading-relaxed text-neutral-400">
                  {item.deskripsi}
                </p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
