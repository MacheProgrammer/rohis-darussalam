import Navbar from "@/components/navbar";
import Main from "./Main";
import AlumniMarquee from "@/app/alumni/alumniMarquee";
import { alumniMessages } from "@/lib/alumniMessages";
import SectionDivider from "@/components/sectionDivider";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="w-full justify-around overflow-x-hidden">
      <Navbar divisi="Divisi" />
      <Main />
      <SectionDivider />
      <section>
        <div className="mx-auto w-full">
          <AlumniMarquee
            messages={alumniMessages}
            layers={3}
            speeds={[36, 50, 70]}
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}
