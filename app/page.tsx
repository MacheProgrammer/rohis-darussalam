import Navbar from "@/components/navbar";
import Main from "./Main";
import AlumniMarquee from "@/components/alumni/alumniMarquee";
import { alumniMessages } from "@/lib/alumniMessages";
import SectionDivider from "@/components/sectionDivider";

export default function Home() {
  return (
    <div className="w-full justify-around">
      <Navbar divisi="Divisi" />
      <Main />
      <SectionDivider />
      <section>
        <div className="container mx-auto">
          <AlumniMarquee
            messages={alumniMessages}
            layers={3}
            speeds={[36, 50, 70]}
          />
        </div>
      </section>
    </div>
  );
}
