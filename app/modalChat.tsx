"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogOverlay,
} from "@/components/ui/dialog";
import Link from "next/link";
import { FaLine } from "react-icons/fa";

interface Chats {
  name: string;
  link: string;
  idLine: string;
}

export default function ModalChat({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) {
  const chats: Chats[] = [
    {
      name: "Chantika 75",
      link: "https://line.me/ti/p/YT2fEJsQhR",
      idLine: "@slvcaca",
    },
    {
      name: "Syaza 75",
      link: "https://line.me/ti/p/pDDIeGgCBL",
      idLine: "@syazahratul",
    },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogOverlay className="bg-black/30 backdrop-blur-sm" />
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="border-b-4 border-white/40 p-2 text-center text-2xl font-black text-green-700">
            Silahkan hubungi CP berikut
          </DialogTitle>
        </DialogHeader>

        <div className="mt-4 space-y-3">
          {chats.map((c, idx) => (
            <div
              key={idx}
              className="hover:bg-secondary flex cursor-pointer items-center gap-3 rounded-lg p-2 transition duration-300 ease-in-out hover:scale-105 active:scale-95"
            >
              <span className="text-primary w-10 text-lg">
                <FaLine className="h-auto w-full" />
              </span>
              <Link href={c.link} className="font-bold">
                <h2>{c.name}</h2>
                <h3>{c.idLine}</h3>
              </Link>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
