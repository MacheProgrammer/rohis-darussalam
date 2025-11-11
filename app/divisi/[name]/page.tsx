import { notFound } from "next/navigation";
import { divisiData } from "@/lib/divisi";
import CardProgram from "@/app/divisi/[name]/cardProgram";
import DivisiInfoList from "@/app/divisi/[name]/divisiInfoList";
import FooterDivisi from "@/app/divisi/[name]/footerDivisi";
import Navbar from "@/components/navbar";
import SectionDivider from "@/components/sectionDivider";
import { MontserratFont } from "@/lib/utils";
import Footer from "@/components/footer";
import { Metadata } from "next";

import { use } from "react";
import Deskripsi from "./deskripsi";

type Props = {
  params: Promise<{ name: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { name } = await params;
  const data = divisiData[name];
  if (!data) {
    return {
      title: "Divisi Tidak Ditemukan",
      description: "Halaman divisi yang kamu cari tidak tersedia.",
    };
  }
  return {
    title: data.nama,
    description: `Kenali lebih dekat Divisi ${data.nama} Rohis Darussalam SMA Negeri 5 Yogyakarta`,
    openGraph: {
      title: data.nama,
    },
  };
}

export default function Page({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name: url } = use(params);

  const data = divisiData[url];

  if (!data) {
    notFound();
  }

  return (
    <>
      <Navbar divisi={data.nama ?? "Divisi"} />
      <main className="overflow-x-hidden pt-16">
        <section className="container mx-auto px-6 py-10">
          <h2
            className={`${MontserratFont.className} mb-4 w-full text-center text-2xl font-bold`}
          >
            {data.nama}
          </h2>
          {data.deskripsi && <Deskripsi description={data.deskripsi} />}
          <div className="relative -mx-3 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-3 py-2">
            {data.programKerja.map((p, i) => (
              <div
                key={i}
                className="shrink-0 snap-start"
                style={{ minWidth: "300px" }}
              >
                <CardProgram program={p} />
              </div>
            ))}
          </div>
        </section>
        <SectionDivider />

        <DivisiInfoList penjelasan={data.penjelasan} />

        <SectionDivider />
        <FooterDivisi gallery={data.gallery} divisi={data.nama} />
      </main>
      <Footer />
    </>
  );
}
