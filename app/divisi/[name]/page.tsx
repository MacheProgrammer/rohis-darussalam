import { notFound } from "next/navigation";
import { divisiData } from "@/lib/divisi";
import CardProgram from "@/app/divisi/[name]/cardProgram";
import DivisiInfoList from "@/app/divisi/[name]/divisiInfoList";
import FooterDivisi from "@/app/divisi/[name]/footerDivisi";
import Navbar from "@/components/navbar";
import { capitalize } from "@/lib/utils";
import SectionDivider from "@/components/sectionDivider";
import { MontserratFont } from "@/lib/utils";
import Footer from "@/components/footer";

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
          <h2
            className={`${MontserratFont.className} mb-6 w-full text-center text-2xl font-bold`}
          >
            {capitalized === "Pengurus-harian"
              ? "Pengurus Harian"
              : capitalized}
          </h2>
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
        <FooterDivisi gallery={data.gallery} divisi={capitalized} />
      </main>
      <Footer />
    </>
  );
}
