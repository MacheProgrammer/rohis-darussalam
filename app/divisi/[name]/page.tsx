import { notFound } from "next/navigation";
import { divisiData } from "@/lib/divisi";
import CardProgram from "@/components/cardProgram";
import DivisiInfoList from "@/app/divisi/[name]/divisiInfoList";
import FooterDivisi from "@/app/divisi/[name]/footerDivisi";
import Navbar from "@/components/navbar";
import { capitalize } from "@/lib/utils";
import SectionDivider from "@/components/sectionDivider";

export default function Page({ params }: { params: { name: string } }) {
  const { name: url } = params;
  const capitalized: string = capitalize(url);

  const data = divisiData[url];

  if (!data) {
    notFound();
  }

  return (
    <>
      <Navbar divisi={capitalized} />
      <main className="overflow-x-hidden pt-16">
        <section className="container mx-auto px-6 py-10">
          <h2 className="mb-6 w-full text-center text-2xl font-semibold">
            Program Kerja
          </h2>
          <div className="flex flex-row gap-5">
            {data.programKerja.map((p, i) => (
              <CardProgram key={i} program={p} />
            ))}
          </div>
        </section>
        <SectionDivider />

        <DivisiInfoList penjelasan={data.penjelasan} />

        <SectionDivider />
        <FooterDivisi gallery={data.gallery} divisi={capitalized} />
      </main>
    </>
  );
}
