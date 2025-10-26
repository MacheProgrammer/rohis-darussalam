export type AlumniMessage = {
  name: string;
  angkatan?: string;
  message: string;
  photo: string;
};

export const alumniMessages: AlumniMessage[] = [
  {
    name: "Ahmad Rafi",
    angkatan: "2020",
    message:
      "Rohis mengajarkan kepemimpinan dan keilmuan. Saya belajar banyak tentang manajemen acara, kepemimpinan, dan pengembangan diri selama bergabung.",
    photo: "/images/alumni/ahmad.jpg",
  },
  {
    name: "Siti Zahra",
    angkatan: "2021",
    message:
      "Pengalaman di Rohis memberikan nilai persaudaraan dan tanggung jawab. Kegiatan mentoring setiap minggu sangat membantu perkembangan pribadi.",
    photo: "/images/alumni/zahra.jpg",
  },
  {
    name: "Budi Prasetyo",
    angkatan: "2019",
    message:
      "Melalui kegiatan dokumentasi dan publikasi saya belajar skill yang berguna untuk karier saya sekarang. Rohis adalah rumah kedua.",
    photo: "/images/alumni/budi.jpg",
  },
];
