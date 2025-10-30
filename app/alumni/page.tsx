import AlumniListClient from "@/app/alumni/alumniListClient";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { alumniMessages } from "@/lib/alumniMessages";

export default function Page() {
  return (
    <>
      <Navbar divisi="Divisi" />
      <main className="mt-25">
        <div className="container mx-auto px-4">
          <header className="mb-8">
            <h1 className="text-center text-3xl font-bold text-white">
              Semua Pesan Alumni
            </h1>
            <p className="mt-2 text-center text-gray-500">
              Koleksi pesan lengkap dari alumni. Klik sebuah kartu untuk membaca
              pesan secara utuh.
            </p>
          </header>
          <AlumniListClient messages={alumniMessages} />
        </div>
      </main>
      <Footer />
    </>
  );
}
