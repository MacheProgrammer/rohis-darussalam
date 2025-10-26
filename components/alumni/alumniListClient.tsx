"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import type { AlumniMessage } from "@/lib/alumniMessages";
import ModalAlumni from "./modalAlumni";

export default function AlumniListClient({
  messages,
}: {
  messages: AlumniMessage[];
}) {
  const [selected, setSelected] = useState<AlumniMessage | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // lock scroll saat modal terbuka
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleOpen = (m: AlumniMessage) => {
    setSelected(m);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    // beri delay agar selected tetap saat animasi keluar (opsional)
    setTimeout(() => setSelected(null), 200);
  };

  return (
    <>
      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {messages.map((m, i) => (
          <article
            key={i}
            className="group relative flex flex-col overflow-hidden rounded-2xl bg-white p-4 shadow transition-shadow hover:shadow-lg"
            aria-labelledby={`alumni-${i}-name`}
          >
            <div className="flex items-start gap-4">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-gray-100">
                <Image
                  src={m.photo}
                  alt={m.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex-1">
                <h3
                  id={`alumni-${i}-name`}
                  className="text-sm font-semibold text-gray-900"
                >
                  {m.name}
                </h3>
                {m.angkatan && (
                  <div className="text-xs text-gray-500">
                    Angkatan {m.angkatan}
                  </div>
                )}
              </div>
            </div>

            <p className="mt-3 text-sm leading-relaxed text-gray-700">
              {m.message}
            </p>

            {/* tombol baca lengkap */}
            <div className="mt-4 flex items-center justify-end">
              <button
                onClick={() => handleOpen(m)}
                className="rounded-md bg-green-700 px-3 py-1.5 text-xs font-semibold text-white hover:bg-green-800"
              >
                Baca lengkap
              </button>
            </div>
          </article>
        ))}
      </section>

      {/* modal */}
      <ModalAlumni item={selected} open={open} onClose={handleClose} />
    </>
  );
}
