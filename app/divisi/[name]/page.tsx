import { notFound } from "next/navigation";
import { divisiData } from "../../../lib/divisi";
import CardProgram from "@/components/cardProgram";
import DivisiInfoList from "@/components/divisiInfoList";
import Image from "next/image";
import FooterDivisi from "@/components/footerDivisi";
import Navbar from "@/components/navbar";
import { capitalize } from "@/lib/utils";
import SectionDivider from "@/components/sectionDivider";

export default async function Page({ params }: { params: { name: string } }) {
  const url = await params.name;
  const capitalized: string = capitalize(url);

  const data = divisiData[url];

  if (!data) {
    notFound();
  }

  return (
    <>
      <Navbar divisi={capitalized} />
      <main className="overflow-x-hidden pt-16">
        {/* Program Kerja */}
        <section className="container mx-auto px-6 py-10">
          <h2 className="mb-6 w-full text-center text-2xl font-semibold">
            Program Kerja
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {data.programKerja.map((p, i) => (
              <CardProgram key={i} program={p} />
            ))}
          </div>
        </section>
        <SectionDivider />

        {/* Penjelasan (multi-section) */}
        <DivisiInfoList penjelasan={data.penjelasan} />

        <SectionDivider />
        {/* Gallery */}
        <FooterDivisi gallery={data.gallery} divisi={capitalized} />
      </main>
    </>
  );
}
