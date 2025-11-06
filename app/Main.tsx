"use client";
import ModalDivisi from "@/components/modalDivisi";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaListUl, FaWpforms } from "react-icons/fa";
import { Montserrat } from "next/font/google";
import ModalChat from "./modalChat";

const MontserratFont = Montserrat({
  subsets: ["latin"],
});

function Main() {
  const [divisiIsopen, setDivisiIsOpen] = useState(false);
  const [chatIsopen, setChatIsOpen] = useState(false);
  return (
    <main className="flex h-dvh w-dvw flex-row items-center max-md:flex-col max-md:px-5 lg:px-10">
      <div className="flex h-full flex-3 items-center max-md:mt-10 max-md:w-4/5">
        <Image
          src="/RohisDarussalam.png"
          alt="RohisDarussalam"
          width={600}
          height={600}
        ></Image>
      </div>
      <div className="mx-auto flex h-dvh flex-6 flex-col justify-center text-center text-white max-md:justify-start lg:px-10">
        <h1
          className={`text-5xl font-extrabold text-green-600 text-shadow-lg/30 text-shadow-black ${MontserratFont.className} w-full`}
        >
          ROHIS DARUSSALAM
        </h1>
        <h3 className="mt-1 font-medium">
          "Bersatu dalam Ukhuwah, Beramal dalam Dakwah"
        </h3>
        <p className="mt-2">
          Kerohanian Islam (Rohis) Darussalam merupakan organisasi islam dibawah
          naungan organisasi OSIS Bhinneka Dharma Siswa Puspanegara seksi bidang
          Ketaqwaan Kepada Tuhan Yang Maha Esa subsie Kerohanian Islam, SMA
          Negeri 5 Yogyakarta.
        </p>
        <div className="mt-4 flex w-full flex-row gap-3 text-xl max-md:flex-col">
          <button
            onClick={() => setChatIsOpen(true)}
            className="flex h-20 w-full flex-row items-center justify-center gap-4 rounded-2xl bg-green-600 px-8 font-bold transition duration-500 ease-in-out hover:scale-105 hover:bg-white hover:text-green-600 active:scale-90 max-md:h-15"
          >
            <p>DAFTAR SEKARANG</p>
            <FaWpforms />
          </button>
          <a
            onClick={() => setDivisiIsOpen(true)}
            className="flex h-20 w-full cursor-pointer items-center justify-center gap-4 rounded-2xl border-3 border-green-600 bg-transparent p-2 px-8 font-bold transition duration-500 ease-in-out hover:scale-105 hover:border-white hover:bg-white hover:text-green-600 active:scale-90 max-md:h-15"
          >
            INFORMASI DIVISI <FaListUl />
          </a>
        </div>
      </div>
      <ModalDivisi isOpen={divisiIsopen} setIsOpen={setDivisiIsOpen} />
      <ModalChat isOpen={chatIsopen} setIsOpen={setChatIsOpen} />
    </main>
  );
}

export default Main;
