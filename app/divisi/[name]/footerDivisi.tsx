"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function FooterDivisi({
  gallery,
  divisi,
}: {
  gallery: string;
  divisi: string;
}) {
  if (divisi === "Pengurus-harian")
    return (
      <section className="container mx-auto overflow-hidden px-4 py-12">
        <div className="flex flex-col items-center justify-center rounded-lg">
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.2 }}
            className="w-full"
          >
            <div className="relative mx-auto aspect-video max-w-lg">
              <Image
                src={gallery}
                alt={divisi}
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <h4 className="mt-6 text-center text-xl font-semibold">{`Pengurus Harian 24/25`}</h4>
          </motion.div>
        </div>
      </section>
    );
  return (
    <section className="container mx-auto overflow-hidden px-4 py-12">
      <div className="flex flex-col items-center justify-center rounded-lg">
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.2 }}
          className="w-full"
        >
          <div className="relative mx-auto aspect-video max-w-lg overflow-hidden rounded-lg">
            <Image
              src={gallery}
              alt={divisi}
              fill
              className="aspect-video rounded-lg object-contain"
            />
          </div>
          <h4 className="mt-6 text-center text-xl font-semibold">{`${divisi} 24/25`}</h4>
        </motion.div>
      </div>
    </section>
  );
}
