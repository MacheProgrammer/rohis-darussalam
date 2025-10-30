"use client";

import {
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaFacebook,
  FaTiktok,
} from "react-icons/fa6";
import Image from "next/image";
import { MontserratFont } from "@/lib/utils";

const socialLinks = [
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "https://instagram.com/rohisdarussalam",
    username: "@rohisdarussalam",
  },
  {
    name: "X (Twitter)",
    icon: FaXTwitter,
    url: "https://x.com/rohisdarussalam",
    username: "@RohisDarussalam",
  },
  {
    name: "YouTube",
    icon: FaYoutube,
    url: "https://www.youtube.com/channel/UChkgr0-UeikJDm9ke9bsEoQ",
    username: "Rohis Darussalam",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    url: "https://facebook.com/darussalamrohis",
    username: "Rohis Darussalam",
  },
  {
    name: "TikTok",
    icon: FaTiktok,
    url: "https://tiktok.com/@rohisdarussalam",
    username: "@rohisdarussalam",
  },
];

export default function Footer() {
  return (
    <footer className="bg-background text-foreground relative mt-20 w-full overflow-hidden pb-15">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-5">
        <Image
          src="/RohisDarussalam.png"
          alt="Rohis Darussalam"
          width={400}
          height={400}
          className="object-contain"
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-8 px-6 py-10 md:flex-col lg:flex-row">
        <div className="flex-1 text-center lg:text-left">
          <h3
            className={`${MontserratFont.className} mb-3 text-lg font-semibold`}
          >
            Rohis Darussalam
          </h3>
          <p className="text-muted-foreground max-w-md text-sm">
            Kerohanian Islam (Rohis) Darussalam merupakan organisasi islam
            dibawah naungan organisasi OSIS Bhinneka Dharma Siswa Puspanegara
            seksi bidang Ketaqwaan Kepada Tuhan Yang Maha Esa subsie Kerohanian
            Islam, SMA Negeri 5 Yogyakarta.
          </p>
        </div>

        <div className="flex flex-1 flex-col items-center lg:items-end">
          <h3 className="mb-3 text-lg font-semibold">Ikuti Kami</h3>

          <div className="flex flex-col items-center gap-3 lg:items-end">
            {socialLinks.map((sosmed, i) => {
              const Icon = sosmed.icon;
              return (
                <a
                  key={i}
                  href={sosmed.url}
                  aria-label={sosmed.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group text-muted-foreground hover:text-foreground flex items-center gap-3 transition"
                >
                  <Icon
                    size={22}
                    className="transition-transform group-hover:scale-110"
                  />
                  <span className="text-sm">{sosmed.username}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="border-border/40 text-muted-foreground relative z-10 border-t py-4 text-center text-sm">
        © {new Date().getFullYear()} Rohis Darussalam. All rights reserved.
      </div>
    </footer>
  );
}
