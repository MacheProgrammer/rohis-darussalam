"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogOverlay,
} from "@/components/ui/dialog";
import Link from "next/link";
import { ReactNode } from "react";
import {
  FaUsers,
  FaMosque,
  FaFemale,
  FaBookOpen,
  FaHandsHelping,
  FaChalkboardTeacher,
  FaCamera,
} from "react-icons/fa";
import { PiCrownSimpleFill } from "react-icons/pi";
import { Montserrat } from "next/font/google";

const MontserratFont = Montserrat({
  subsets: ["latin"],
});

interface Division {
  name: string;
  icon: ReactNode;
  link: string;
}

export default function page() {
  const divisions: Division[] = [
    {
      name: "Pengurus Harian",
      icon: <PiCrownSimpleFill />,
      link: "/divisi/pengurus-harian",
    },
    { name: "Kaderisasi", icon: <FaUsers />, link: "/divisi/kaderisasi" },
    {
      name: "Divisi HAMAS (Himpunan Anak Masjid)",
      icon: <FaMosque />,
      link: "/divisi/hamas",
    },
    {
      name: "Divisi Keakhwatan",
      icon: <FaFemale />,
      link: "/divisi/keakhwatan",
    },
    { name: "Divisi Dakwah", icon: <FaBookOpen />, link: "/divisi/dakwah" },
    {
      name: "Divisi GAZA (Gerakan Sosial)",
      icon: <FaHandsHelping />,
      link: "/divisi/gaza",
    },
    {
      name: "Divisi Tarbiyah",
      icon: <FaChalkboardTeacher />,
      link: "/divisi/tarbiyah",
    },
    { name: "Divisi Media", icon: <FaCamera />, link: "/divisi/media" },
  ];

  return (
    <Dialog open={true}>
      <DialogOverlay className="backdrop-blur-sm" />
      <DialogContent className="max-w-md [&>button]:hidden">
        <DialogHeader>
          <DialogTitle
            className={`border-b-4 border-white/40 p-2 text-center text-2xl font-extrabold text-green-700 ${MontserratFont.className}`}
          >
            Divisi Rohis Darussalam
          </DialogTitle>
        </DialogHeader>

        <div className="mt-4 space-y-3">
          {divisions.map((div, idx) => (
            <Link
              href={div.link}
              key={idx}
              className="hover:bg-secondary flex cursor-pointer items-center gap-3 rounded-lg p-2 transition duration-300 ease-in-out hover:scale-105 active:scale-95"
            >
              <span className="text-primary text-lg">{div.icon}</span>
              <span className="font-bold">{div.name}</span>
            </Link>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
