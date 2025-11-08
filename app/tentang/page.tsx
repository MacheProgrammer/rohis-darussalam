import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { MontserratFont } from "@/lib/utils";

export default function page() {
  return (
    <>
      <main className="container mx-auto mt-20 space-y-10 px-6 py-12 lg:px-45">
        <Navbar divisi="Divisi" />
        <section>
          <h1
            className={`mb-6 text-center text-5xl font-extrabold text-green-600 text-shadow-lg/30 text-shadow-black ${MontserratFont.className}`}
          >
            Rohis Darussalam
          </h1>
          <p>
            Kerohanian Islam (Rohis) Darussalam merupakan organisasi Islam di
            bawah naungan organisasi OSIS Bhinneka Dharma Siswa Puspanegara
            seksi bidang Ketaqwaan Kepada Tuhan Yang Maha Esa subsie Kerohanian
            Islam, SMA Negeri 5 Yogyakarta. Sekretariat Rohis Darussalam
            terletak di kompleks Masjid Darussalam SMA Negeri 5 Yogyakarta,
            Jalan Nyi Pembayun 39, Yogyakarta.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold">Visi dan Misi</h2>
          <div className="space-y-3">
            <p>
              <strong>Visi:</strong> “Membentuk siswa muslim yang berakhlaqul
              karimah dan memiliki motivasi menuntut ilmu demi terwujudnya
              lingkungan islami, budaya keilmuan di SMA Negeri 5 Yogyakarta.”
            </p>

            <p className="mt-4 font-semibold">Misi:</p>
            <ul className="list-decimal space-y-1 pl-6">
              <li>
                Menjalin hubungan yang sinergis dengan lembaga-lembaga terkait.
              </li>
              <li>Optimalisasi seluruh divisi dan subdivisi.</li>
              <li>Mencetak kader-kader yang prestatif.</li>
              <li>Menumbuhkan kebiasaan yang bersifat islami.</li>
              <li>
                Mewujudkan dominasi kader-kader Rohis di setiap organisasi dan
                kegiatan.
              </li>
              <li>Mengembangkan program-program berbasis keilmuan.</li>
              <li>Menjadi penggerak dakwah agama Islam.</li>
            </ul>

            <p className="mt-4">
              <strong>Tujuan:</strong> “Bersama-sama mengembangkan kepribadian
              dan wawasan Islami serta cinta sesama dan lingkungan dalam jiwa
              setiap pengurus dan anggota Rohis Darussalam.”
            </p>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold">Struktur Organisasi</h2>
          <p className="mb-3">
            Secara umum, Rohis Darussalam terdiri atas Pengurus Harian (PH) dan
            Divisi-Divisi yang berada di bawah arahan Pengurus Harian.
          </p>

          <p className="font-semibold">Pengurus Harian terdiri atas:</p>
          <ul className="mb-4 list-disc space-y-1 pl-6">
            <li>Roisul Amm</li>
            <li>Roisul Ula'</li>
            <li>Roisah</li>
            <li>Sekretaris Umum</li>
            <li>Sekretaris 1</li>
            <li>Bendahara Umum</li>
            <li>Bendahara 1</li>
          </ul>

          <p className="font-semibold">Divisi yang ada sebanyak tujuh (7):</p>
          <ul className="list-disc space-y-1 pl-6">
            <li>Kaderisasi</li>
            <li>Divisi HAMAS (Himpunan Anak Masjid)</li>
            <li>Divisi Keakhwatan</li>
            <li>Divisi Dakwah</li>
            <li>Divisi GAZA (Gerakan Sosial)</li>
            <li>Divisi Tarbiyah</li>
            <li>Divisi Media</li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
