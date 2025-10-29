"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { AlumniMessage } from "../../lib/alumniMessages";

export default function AlumniCard({
  item,
  onClick,
}: {
  item: AlumniMessage;
  onClick: (item: AlumniMessage) => void;
}) {
  return (
    <motion.button
      onClick={() => onClick(item)}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 250, damping: 20 }}
      className="group relative flex max-w-xs min-w-[260px] flex-col gap-3 rounded-2xl bg-white/95 p-4 text-left shadow-lg ring-1 ring-black/5"
    >
      <div className="flex items-center gap-3">
        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-gray-100">
          <Image
            src={item.photo}
            alt={item.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="text-left">
          <div className="text-sm font-semibold text-gray-900">{item.name}</div>
          {item.angkatan && (
            <div className="text-xs text-gray-500">
              Angkatan {item.angkatan}
            </div>
          )}
        </div>
      </div>

      <p className="line-clamp-3 text-sm leading-relaxed text-gray-700">
        {item.message}
      </p>

      <style jsx>{`
        /* fallback line clamp if plugin not present */
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </motion.button>
  );
}
