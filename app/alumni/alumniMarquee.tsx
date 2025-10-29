"use client";

import { useMemo, useState } from "react";
import AlumniCard from "./alumniCard";
import ModalAlumni from "./modalAlumni";
import type { AlumniMessage } from "../../lib/alumniMessages";
import Link from "next/link";
import GradualBlurMemo from "../../components/reactBits/GradualBlur";
import { FaArrowRight } from "react-icons/fa";

/**
 * props:
 * - messages: AlumniMessage[]
 * - layers: number (default 3)
 * - speeds: number[] durations in seconds; length >= layers (fallback provided)
 */
export default function AlumniMarquee({
  messages,
  layers = 3,
  speeds = [36, 50, 70],
}: {
  messages: AlumniMessage[];
  layers?: number;
  speeds?: number[];
}) {
  const [selected, setSelected] = useState<AlumniMessage | null>(null);
  const [open, setOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const handleOpen = (item: AlumniMessage) => {
    setSelected(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelected(null);
  };

  // Duplicate arrays for smooth loop
  const duplicated = useMemo(() => {
    // if small list, duplicate more times
    const times = messages.length < 6 ? 4 : 2;
    const arr: AlumniMessage[] = [];
    for (let i = 0; i < times; i++) arr.push(...messages);
    return arr;
  }, [messages]);

  return (
    <section className="relative w-full overflow-hidden py-10">
      <div className="container mx-auto px-4">
        <h2 className="mb-6 text-center text-2xl font-bold">Pesan Alumni</h2>
        {/* Layers */}
        <div className="space-y-6">
          {Array.from({ length: layers }).map((_, idx) => {
            const duration = speeds[idx] ?? speeds[speeds.length - 1];
            const layerOffset = (idx % 3) * 12; // vertical offset to look organic
            const layerPause = isPaused || open;

            return (
              <div
                key={idx}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className="relative h-[180px] w-full overflow-hidden"
                style={{ transform: `translateY(${layerOffset}px)` }}
              >
                {/* track: duplicated items laid out horizontally */}
                <div
                  className="marquee-track absolute top-0 left-0 flex w-max items-center gap-10"
                  // animation style inline: move -50% (since duplicated)
                  style={{
                    animation: `marquee-left-${idx} ${duration}s linear infinite`,
                    animationPlayState: layerPause ? "paused" : "running",
                  }}
                >
                  {duplicated.map((m, i) => (
                    <AlumniCard
                      key={`${idx}-${i}`}
                      item={m}
                      onClick={handleOpen}
                    />
                  ))}
                </div>

                {/* duplicate track again to ensure seamless (optional if duplicated already long) */}
                {/* Could be omitted if duplicated array is long enough */}
              </div>
            );
          })}
        </div>
        <GradualBlurMemo
          target="parent"
          position="right"
          height="4rem"
          strength={1.5}
          divCount={5}
          curve="bezier"
          exponential={true}
          opacity={1}
          zIndex={10}
        />
        <GradualBlurMemo
          target="parent"
          position="left"
          height="4rem"
          strength={1.5}
          divCount={5}
          curve="bezier"
          exponential={true}
          opacity={1}
          zIndex={10}
        />
        ;{/* tombol lihat semua */}
        <div className="mt-6 flex items-center justify-center">
          <Link
            href="/alumni"
            className="flex flex-row items-center justify-center gap-2 rounded-md border border-green-700 bg-white px-6 py-4 text-lg font-semibold text-green-700 shadow-sm hover:bg-green-50"
          >
            <p>Lihat Semua Pesan Alumni </p> <FaArrowRight />
          </Link>
        </div>
      </div>

      <ModalAlumni item={selected} open={open} onClose={handleClose} />

      {/* udah intinya yang bawah ini jangan diubah!~~~ */}
      <style jsx>{`
        /* each track slides left by 50% (since duplicated content equals repeated list)
           Ensure the duplicated list width results in smooth loop - we duplicated items many times above.
        */
        ${Array.from({ length: layers })
          .map(
            (_, i) => `
          @keyframes marquee-left-${i} {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `,
          )
          .join("\n")}

        /* ensure track elements have will-change transform for smoothness */
        .marquee-track {
          will-change: transform;
        }

        /* responsive tweak: card sizes smaller on mobile */
        @media (max-width: 640px) {
          .marquee-track > :global(*) {
            min-width: 200px !important;
            max-width: 200px !important;
          }
        }
      `}</style>
    </section>
  );
}
