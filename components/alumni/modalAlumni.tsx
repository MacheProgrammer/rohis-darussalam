"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import type { AlumniMessage } from "../../lib/alumniMessages";

export default function ModalAlumni({
  item,
  open,
  onClose,
}: {
  item: AlumniMessage | null;
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open || !item) return null;

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
      />

      {/* Modal panel */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.18 }}
        className="relative z-70 mx-4 w-full max-w-2xl rounded-2xl bg-white p-6 shadow-2xl"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex gap-4">
          <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-xl bg-gray-100">
            <Image
              src={item.photo}
              alt={item.name}
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
            {item.angkatan && (
              <div className="mb-2 text-sm text-gray-500">
                Angkatan {item.angkatan}
              </div>
            )}
            <p className="leading-relaxed text-gray-700">{item.message}</p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="mt-6 inline-block rounded-md bg-green-700 px-4 py-2 text-sm font-semibold text-white hover:bg-green-800"
        >
          Tutup
        </button>
      </motion.div>
    </div>
  );
}
