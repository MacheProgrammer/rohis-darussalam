import FuzzyText from "@/components/reactBits/FuzzyText";
import Link from "next/link";

const error = () => {
  return (
    <div className="flex h-dvh w-full flex-col items-center justify-center px-5">
      <FuzzyText baseIntensity={0.2} hoverIntensity={1} enableHover={true}>
        404
      </FuzzyText>

      <h3 className="my-5 text-center font-bold uppercase">
        "Mohon Sabar. Halaman ini belum mendapat Hidayah untuk ditemukan."
      </h3>
      <Link
        href="/"
        className="bg-primary hover:text-primary mt-5 flex h-20 w-4/5 max-w-2xl items-center justify-center rounded-full text-2xl font-extrabold text-white transition duration-500 ease-in-out hover:scale-110 hover:bg-white active:scale-95"
      >
        Halaman Utama
      </Link>
    </div>
  );
};

export default error;
