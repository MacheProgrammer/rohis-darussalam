export type Program = {
  nama: string;
  foto: string;
  info: string;
};

export type PenjelasanSection = {
  judul?: string;
  deskripsi: string;
  foto: string;
};

export type Divisi = {
  nama: string;
  deskripsiPendek: string;
  programKerja: Program[];
  penjelasan: PenjelasanSection[];
  gallery: string;
};

export const divisiData: Record<string, Divisi> = {
  kaderisasi: {
    nama: "Kaderisasi",
    deskripsiPendek: "Membina kader Rohis agar berakhlak dan berintegritas.",
    programKerja: [
      {
        nama: "Latihan Kepemimpinan",
        foto: "/ex1.jpg",
        info: "Melatih kemampuan kepemimpinan bagi anggota baru.",
      },
      {
        nama: "Mentoring",
        foto: "/ex2.jpg",
        info: "Kegiatan pembinaan ruhiyah dan intelektual.",
      },
    ],
    penjelasan: [
      {
        deskripsi:
          "Divisi ini fokus pada pembentukan karakter anggota melalui kegiatan Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam numquam voluptas alias sit aliquid est facere dolor sapiente harum ipsa.",
        foto: "/ex1.jpg",
      },
      {
        deskripsi:
          "Mentoring dilakukan rutin untuk meningkatkan wawasan keislaman ...",
        foto: "/ex2.jpg",
      },
    ],
    gallery: "/ex1.jpg",
  },

  media: {
    nama: "Media",
    deskripsiPendek: "Mengelola publikasi dan dokumentasi kegiatan.",
    programKerja: [
      {
        nama: "Manajemen Konten",
        foto: "/ex1.jpg",
        info: "Mengelola Instagram & konten",
      },
    ],
    penjelasan: [
      {
        deskripsi: "Merekam kegiatan ...",
        foto: "/ex1.jpg",
      },
    ],
    gallery: "/ex2.jpg",
  },
};
