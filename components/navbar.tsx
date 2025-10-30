"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import ModalDivisi from "./modalDivisi";
import { Montserrat } from "next/font/google";
import clsx from "clsx";

const MontserratFont = Montserrat({
  subsets: ["latin"],
});

export default function Navbar({ divisi }: { divisi: string }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathName = usePathname();

  const btnClass = (path: string) =>
    clsx(
      "cursor-pointer rounded-lg px-4 py-2 transition duration-300 ease-in-out max-md:border hover:scale-110  max-md:border-black",
      pathName === path || pathName.startsWith(path + "/")
        ? "bg-neutral-600/40 scale-115"
        : "hover:bg-neutral-600/30",
    );

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <div className="fixed top-4 left-1/2 z-9999 flex h-14 w-[94%] items-center justify-between border-b border-white/10 bg-white/20 px-10 font-extrabold text-green-600 shadow-lg backdrop-blur-md max-md:top-0 max-md:left-0 max-md:w-full md:-translate-x-1/2 md:rounded-full lg:h-16">
        <Link
          href="/"
          className={`flex flex-row items-center justify-center gap-2 text-lg lg:text-xl ${MontserratFont.className} font-extrabold`}
        >
          <img
            src="/RohisDarussalam.png"
            alt=""
            className="w-10 -translate-y-0.5 rounded-full"
          />
          <h2>Rohis Darussalam</h2>
        </Link>

        {/* Desktop Menu */}
        <div className="flex w-auto items-center justify-around gap-6 max-md:hidden">
          <Link href="/tentang" className={btnClass("/tentang")}>
            Tentang
          </Link>
          <button
            onClick={() => setModalOpen(true)}
            className={btnClass("/divisi")}
          >
            {divisi === "Pengurus-harian" ? "Pengurus Harian" : divisi}
          </button>
          <Link href="/berita" className={btnClass("/berita")}>
            Berita
          </Link>
          <Link href="/infaq" className={btnClass("/infaq")}>
            Infaq
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="relative flex h-4 w-8 flex-col items-center justify-between md:hidden"
          onClick={toggleMenu}
        >
          <span
            className={`block h-[2.2px] w-6 rounded-4xl bg-white transition-all duration-300 ease-in-out ${
              isMenuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[2.2px] w-6 rounded-4xl bg-white transition-all duration-300 ease-in-out ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[2.2px] w-6 rounded-4xl bg-white transition-all duration-300 ease-in-out ${
              isMenuOpen ? "-translate-y-1.5 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Overlay + Blur background */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-2 bg-black/70 backdrop-blur-lg"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Sidebar Menu */}
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 250, damping: 30 }}
              className="fixed top-14 right-0 z-40 flex h-max w-2/3 flex-col rounded-bl-lg border-b-2 border-l-2 border-black bg-green-700/35 p-6 font-extrabold text-white shadow-2xl backdrop-blur-md"
            >
              <div className="flex flex-col space-y-4 text-lg">
                <Link
                  href="/tentang"
                  className={`${btnClass("/tentang")} `}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Tentang
                </Link>
                <button
                  onClick={() => setModalOpen(true)}
                  className={`${btnClass("/divisi")} text-left`}
                >
                  {divisi === "Pengurus-harian" ? "Pengurus Harian" : divisi}
                </button>
                <Link
                  href="/berita"
                  className={btnClass("/berita")}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Berita
                </Link>
                <Link
                  href="/infaq"
                  className={btnClass("/infaq")}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Infaq
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <ModalDivisi isOpen={modalOpen} setIsOpen={setModalOpen} />
    </>
  );
}
