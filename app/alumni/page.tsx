import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <main className="flex h-dvh flex-col items-center justify-center px-6 py-12 text-center">
      <div className="relative h-64 w-64 sm:h-72 sm:w-72">
        <Image
          src="/temp/under-construction.gif"
          alt="Halaman Berita Sedang Dalam Pengembangan"
          fill
          className="object-contain mix-blend-screen"
          priority
        />
      </div>
      <h1 className="text-foreground mb-4 text-2xl font-bold">
        Halaman Alumni Sedang Dalam Pengembangan 🛠️
      </h1>

      <p className="text-muted-foreground mb-8 max-w-md">
        Kami sedang menyiapkan halaman alumni agar bisa menampilkan kesan-pesan
        dari alumni Rohis Darussalam. Nantikan segera ya!
      </p>

      <Link
        href="/"
        className="bg-primary hover:text-primary mt-5 flex h-20 w-4/5 max-w-xl items-center justify-center rounded-full text-2xl font-extrabold text-white transition duration-500 ease-in-out hover:scale-110 hover:bg-white active:scale-95"
      >
        Halaman Utama
      </Link>
    </main>
  );
}
