export type Program = {
  nama: string;
  foto: string;
  info: string;
};

export type PenjelasanSection = {
  judul: string;
  deskripsi: string;
  foto: string;
};

export type Divisi = {
  nama: string;
  deskripsi?: string;
  programKerja: Program[];
  penjelasan: PenjelasanSection[];
  gallery: string;
};

export const divisiData: Record<string, Divisi> = {
  "pengurus-harian": {
    nama: "Pengurus Harian",
    deskripsi:
      "lorem ipsum dolor sut ami=et guehw smbc okswuegh akemazodkskdwjkdwkodwjk",
    programKerja: [
      {
        nama: "Mabit",
        foto: "/divisi/pengurus-harian/mabit.png",
        info: "2024-11-03",
      },
      {
        nama: "Syawalan",
        foto: "/divisi/pengurus-harian/syawalan.JPG",
        info: "2024-11-03",
      },
      {
        nama: "Machetar",
        foto: "/divisi/pengurus-harian/machetar.png",
        info: "2024-22-03",
      },
    ],
    penjelasan: [
      {
        judul: "Mabit (Malam Bina Iman dan Taqwa)",
        deskripsi:
          "Malam Bina Iman dan Takwa merupakan rangkaian kegiatan yang dilaksanakan di luar area sekolah selama dua hari satu malam. Kegiatan yang ada pada Malam Bina Iman dan Takwa antara lain materi kajian Islam, materi kepemimpinan, shalat berjamaah, dan tadarus bersama. Kemudian pada hari kedua juga dilaksanakan kegiatan jalan pagi dan games yang bertujuan untuk meningkatkan tali silaturahmi anggota pengurus ROHIS Darussalam. ",
        foto: "/divisi/pengurus-harian/mabit.png",
      },
      {
        judul: "Syawalan",
        deskripsi:
          "Pelaksanaan program kerja Syawalan ini melalui dua kegiatan. Kegiatan yang pertama adalah saling memaafkan untuk siswa-siswi dan guru SMA Negeri 5 Yogyakarta yang dilaksanakan di Lapangan Upacara. Kemudian, siswa-siswi dan guru SMA Negeri 5 Yogyakarta yang beragama Islam menuju Masjid Puspanegara untuk mengikuti kajian yang sudah disiapkan. ",
        foto: "/divisi/pengurus-harian/syawalan.JPG",
      },
      {
        judul: "Machetar",
        deskripsi:
          "MACHETAR hadir sebagai upaya implementasi program afeksi di SMA Negeri 5 Yogyakarta dengan tujuan utama untuk membangkitkan kembali nilai-nilai akhlak mulia serta semangat ukuwah Islamiah.",
        foto: "/divisi/pengurus-harian/machetar.png",
      },
    ],
    gallery: "/fotbar/pengurus.png",
  },

  kaderisasi: {
    nama: "Kaderisasi",
    programKerja: [
      {
        nama: "Monitoring",
        foto: "/divisi/kaderisasi/monitoring.png",
        info: "2025-10-20",
      },
      {
        nama: "Tadarus Central",
        foto: "/divisi/kaderisasi/tadarus.png",
        info: "2025-12-15",
      },
      {
        nama: "ROHIS Aspiration",
        foto: "/divisi/kaderisasi/aspiration.png",
        info: "2025-12-15",
      },
    ],
    penjelasan: [
      {
        judul: "Monitoring",
        deskripsi:
          "Sebuah kegiatan yang dilaksanakan oleh seluruh anggota Divisi Kaderisasi pada divisi lain ROHIS Darussalam untuk memantau,memberi masukan, evaluasi, serta memastikan kelancaran pelaksanaan suatu program kerja divisi lain",
        foto: "/divisi/kaderisasi/monitoring.png",
      },
      {
        judul: "Tadarus Central",
        deskripsi:
          "Sebuah kegiatan tadarus ayat suci Al-Qur'an setiap hari sebelum kegiatan KBM oleh seluruh warga sekolah SMA Negeri 5 Yogyakarta yang dipandu oleh Qori' melalui Ruang Central.",
        foto: "/divisi/kaderisasi/tadarus.png",
      },
      {
        judul: "ROHIS Aspiration",
        deskripsi:
          "Sebuah papan aspirasi berbentuk Google Form untuk mencurahkan keluh kesah, kritik, dan saran terhadap divisinya maupun kepada salah satu anggota ROHIS lainnya. Pengisian ROHIS Aspiration tiap menjelang SHAR'I (untuk proker rutin) dan setelah menyelesaikan suatu proker (untuk proker tidak rutin).",
        foto: "/divisi/kaderisasi/aspiration.png",
      },
    ],
    gallery: "/fotbar/kaderisasi.png",
  },

  dakwah: {
    nama: "Dakwah",
    programKerja: [
      {
        nama: "PHBI",
        foto: "/divisi/dakwah/phbi.JPG",
        info: "2025-10-20",
      },
      {
        nama: "HOTW",
        foto: "/divisi/dakwah/hotw.png",
        info: "2025-12-15",
      },
      {
        nama: "Info Kajian Eksternal",
        foto: "/divisi/dakwah/kajian.png",
        info: "2025-12-15",
      },
    ],
    penjelasan: [
      {
        judul: "PHBI (Pengajian Hari Besar Islam)",
        deskripsi:
          "Kegiatan mempersiapkan dan membuat kajian dalam rangka memperingati hari besar Islam. Seperti tahun baru Islam dan Isra' Mi'raj yang dihadiri oleh seluruh angkatan dari SMA Negeri 5 Yogyakarta.",
        foto: "/divisi/dakwah/phbi.JPG",
      },
      {
        judul: "HOTW (Hadis Of The Week)",
        deskripsi:
          "Kegiatan membuat dan membagikan hadist kepada siswa siswi SMA Negeri 5 yogyakarta melalui line angkatan dan grup besar ROHIS menggunakan media poster digital setiap hari jumat.",
        foto: "/divisi/dakwah/hotw.png",
      },
      {
        judul: "Info Kajian Eksternal",
        deskripsi:
          "Kegiatan mencari informasi kajian-kajian ekstern dan membagikannya kepada setiap grup angkatan yang akan disebarkan bersamaan dengan HOTW pada hari Jumat. Info kajian disebarkan setiap seminggu hingga 2 minggu sekali. Jadwal kajian yang disebarkan adalah kajian yang dilaksanakan seminggu yang akan datang. Kegiatan kajian dapat dicari melalui media sosial dan informasi lainnya.",
        foto: "/divisi/dakwah/kajian.png",
      },
    ],
    gallery: "/fotbar/dakwah.png",
  },

  tarbiyah: {
    nama: "Tarbiyah",
    programKerja: [
      {
        nama: "SCA",
        foto: "/divisi/tarbiyah/sca.png",
        info: "2025-10-20",
      },
      {
        nama: "TRT",
        foto: "/divisi/tarbiyah/trt.png",
        info: "2025-12-15",
      },
      {
        nama: "PMB",
        foto: "/divisi/tarbiyah/pmb.png",
        info: "2025-10-20",
      },
      {
        nama: "Fun Fact Islam",
        foto: "/divisi/tarbiyah/funfact.png",
        info: "2025-12-15",
      },
    ],
    penjelasan: [
      {
        judul: "SCA (Study Club Academy)",
        deskripsi:
          "Kegiatan pendalaman materi untuk membantu siswa - siswi kelas 10 untuk mempersiapkan materi yang matang sebelum melaksanakan Penilaian Akhir Semester (PAS) dan Penilaian Akhir Tahun (PAT)",
        foto: "/divisi/tarbiyah/sca.png",
      },
      {
        judul: "TRT (Tahfidz Ramadhan Time)",
        deskripsi:
          "Kegiatan Hafalan Al Qur'an Untuk Kelas 11 dan 10 saat bulan Ramadhan yang bertujuan untuk mengisi waktu luang di bulan Ramadhan dan juga menambah hafalan.",
        foto: "/divisi/tarbiyah/trt.png",
      },
      {
        judul: "PMB (Puspanegara Mencari Bakat)",
        deskripsi:
          "Lomba Keagamaan yang bertujuan mengembangkan Minat dan Bakat dalam hal seni keislaman dan menumbuhkan semangat mendalami ilmu keagamaan yang biasanya terdiri dari Adzan, CCA, MHQ, MTQ dan lomba keagamaan lainnya",
        foto: "/divisi/tarbiyah/pmb.png",
      },
      {
        judul: "Fun Fact Islam",
        deskripsi:
          "Membuat Poster tentang pengetahuan islam berupa hadist-hadist yang dibuat semenarik mungkin kemudian diunggah kedalam  sosial media ROHIS DARUSSALAM",
        foto: "/divisi/tarbiyah/funfact.png",
      },
    ],
    gallery: "/fotbar/tarbiyah.png",
  },

  gaza: {
    nama: "Gaza",
    programKerja: [
      {
        nama: "Galdan",
        foto: "/divisi/gaza/galdan.png",
        info: "2025-10-20",
      },
      {
        nama: "MSC",
        foto: "/divisi/gaza/msc.png",
        info: "2025-12-15",
      },
      {
        nama: "PANCAL",
        foto: "/divisi/gaza/pancal.png",
        info: "2025-12-15",
      },
      {
        nama: "Baksos Idul Fitri",
        foto: "/divisi/gaza/baksos-i.jpeg",
        info: "2025-12-15",
      },
      {
        nama: "Baksos Idul Adha",
        foto: "/divisi/gaza/baksos-a.png",
        info: "2025-12-15",
      },
      {
        nama: "Siltur Guru",
        foto: "/divisi/gaza/siltur-guru.png",
        info: "2025-12-15",
      },
      {
        nama: "Siltur Siswa",
        foto: "/divisi/gaza/siltur-siswa.png",
        info: "2025-12-15",
      },
    ],
    penjelasan: [
      {
        judul: "GALDAN",
        deskripsi:
          "GALDAN atau galang dana adalah proker gabungan bersama OSIS seksi bidang 2 yang dibantu juga oleh MPK dari komisi c. Proker galdan atau galang dana ini adalah bentuk rasa peduli kita terhadap keluarga SMAN 5 yang sedang berduka.",
        foto: "/divisi/gaza/galdan.png",
      },
      {
        judul: "MSC",
        deskripsi:
          "MSC atau singkatan dari mache share and care ini juga masih bekerjasama dengan OSIS seksi bidang 2 yang berjalan selama 2 hari pada saat bulan ramadhan. Di hari pertama kami berbagi takjil di jalanan secara berkelompok sesuai dengan rute yang sudah disepakati bersama sebelumnya. Dan untuk di hari kedua kami akan mengunjungi panti asuhan untuk berbuka puasa di sana.",
        foto: "/divisi/gaza/msc.png",
      },
      {
        judul: "PANCAL",
        deskripsi:
          "PANCAL atau Pembelajaran Baca Al Qur'an adalah program kerja yang bergerak di bulan ramadhan juga, proker ini bergerak selama 1 pekan untuk membantu masjid yang kekurangan pembimbing. Di sana dari kami akan membantu adik adik mengaji dan bermain bersama untuk menunggu waktubuka kemudian berbuka puasa bersama dan sholat maghrib berjamaah.",
        foto: "/divisi/gaza/pancal.png",
      },
      {
        judul: "BAKSOS IDUL FITRI",
        deskripsi:
          "Baksos idul fitri adalah program kerja bakti sosial yang bertujuan mengumpulkan dana untuk membantu warga sekolah ataupun warga di daerah kawasan sekolah yang membutuhkan zakat fitrah. Dari dana yang dikumpulkan tersebut kami bagikan dalam bentuk sembako kepada warga sekolah dan warga sekitar yang membutuhkan. Tidak hanya warga sekolah dan warga sekitar SMAN 5 yang mendapatkan, dari kami juga membagikan sembako tersebut pada saat kegiatan mubaligh hijrah ke gunung kidul kemarin",
        foto: "/divisi/gaza/baksos-i.jpeg",
      },
      {
        judul: "BAKSOS IDUL ADHA",
        deskripsi:
          "Baksos idul adha adalah program kerja bakti sosial yang bertujuan mengumpulkan dana untuk membantu daerah yang kekurangan hewan korban. Pada saat periode kemarin kami ikut serta pergi ke daerah gunung kidul ditemani guru guru SMA negeri 5 menyumbangkan satu ekor sapi untuk diqurbankan",
        foto: "/divisi/gaza/baksos-a.png",
      },
      {
        judul: "SILTUR GURU",
        deskripsi:
          "Sesuai dengan nama prokernya, siltur guru atau silaturahmi guru adalah program kerja yang dibersamai oleh pengurus harian rohis, mpk, dan juga osis yang bertujuan untuk mengunjungi beberapa rumah guru guru SMAN 5 dalam bentuk silaturahmi bersama",
        foto: "/divisi/gaza/siltur-guru.png",
      },
      {
        judul: "SILTUR SISWA",
        deskripsi:
          "Program kerja siltur siswa atau silaturahmi siswa ini kurang lebih mirip dengan stuband atau study banding. Dari proker ini kami saling berbagi informasi dan memperluas pertemanan, pada saat silaturahmi ini kami bertukar informasimengenai tiap tiap divisi yang berbeda. Proker in di periode kemarin berhasil terlaksana 2x, 1x sekolah lain berkunjung ke SMAN 5 dan 1x kami mengunjungi sekolah",
        foto: "/divisi/gaza/siltur-siswa.png",
      },
    ],
    gallery: "/fotbar/gaza.png",
  },

  hamas: {
    nama: "Hamas",
    programKerja: [
      {
        nama: "Diklat Khatib",
        foto: "/divisi/hamas/khatib.png",
        info: "2025-10-20",
      },
      {
        nama: "Resik Akbar",
        foto: "/divisi/hamas/resik.png",
        info: "2025-12-15",
      },
      {
        nama: "Baca Hadis",
        foto: "/divisi/hamas/hadis.png",
        info: "2025-12-15",
      },
      {
        nama: "Kelola Infak",
        foto: "/divisi/hamas/infaq.png",
        info: "2025-12-15",
      },
    ],
    penjelasan: [
      {
        judul: "Diklat Khatib",
        deskripsi:
          "Pemilihan dan pelatihan khatib salat Jumat yang dilaksanakan pada awal masa amanah. Diikuti oleh perwakilan kelas dan anggota ikhwan Rohis Darussalam.",
        foto: "/divisi/hamas/khatib.png",
      },
      {
        judul: "Resik Akbar",
        deskripsi:
          "Kegiatan membersihkan Masjid Puspanegara yang dilakukan secara rutin selama masa amanah. Kegiatan ini dilakukan oleh anggota ikhwan Rohis Darussalam sesuai jadwal yang sudah ditentukan.",
        foto: "/divisi/hamas/resik.png",
      },
      {
        judul: "Baca Hadis",
        deskripsi:
          "Kegiatan membaca hadis di atas mimbar setelah salat Zuhur dan Asar. Kegiatan ini dilakukan oleh anggota ikhwan Rohis Darussalam sesuai jadwal yang sudah ditentukan.",
        foto: "/divisi/hamas/hadis.png",
      },
      {
        judul: "Kelola Infak",
        deskripsi:
          "Kegiatan mengambil infak di setiap kelas dan mengelolanya untuk kemaslahatan warga SMAN 5 Yogyakarta. Kegiatan ini rutin dilakukan setiap hari Jumat.",
        foto: "/divisi/hamas/infaq.png",
      },
    ],
    gallery: "/fotbar/hamas.png",
  },

  keakhwatan: {
    nama: "Keakhwatan",
    programKerja: [
      {
        nama: "CBR (Cuci Bersih Rukuh)",
        foto: "/divisi/keakhwatan/cbr.png",
        info: "2025-10-20",
      },
      {
        nama: "KETCHE (Keterampilan Mache)",
        foto: "/divisi/keakhwatan/ketche.png",
        info: "2025-12-15",
      },
      {
        nama: "PO (Pre-Order) & Danusan",
        foto: "/divisi/keakhwatan/po.png",
        info: "2025-12-15",
      },
    ],
    penjelasan: [
      {
        judul: "CBR (Cuci Bersih Rukuh)",
        deskripsi:
          "Dibentuk jadwal piket yang dilakukan oleh seluruh anggota Divisi Keakhwatan untuk membereskan, menata, dan memilah rukuh yang sekiranya sudah tidak layak pakai. Serta, melaundry rukuh setiap 2 bulan sekali. Dibentuk panitia yang bertugas menerima donasi rukuh dari teman teman.",
        foto: "/divisi/keakhwatan/cbr.png",
      },
      {
        judul: "KETCHE (Keterampilan Mache)",
        deskripsi:
          "Keterampilan mache mengadakan sebuah perlombaan yang diikuti oleh setiap kelas yang akan membuat suatu kerajinan. Kegiatan ini bertujuan untuk meningkatkan kesadaran ikhwah terhadap pemanfaatan barang-barang di lingkungan sekitar dan untuk meningkatkan kreativitas siswi-siswi SMA Negeri 5 Yogyakarta dalam memanfaatkan danmeningkatkan nilai guna suatu barang, serta dapat menumbuhkan kesadaran warga sekolah dalam upaya menerapkan hidup peduli lingkungan.",
        foto: "/divisi/keakhwatan/ketche.png",
      },
      {
        judul: "PO (Pre-Order) & Danusan",
        deskripsi:
          "Suatu program kerja Divisi Keakhwatan dengan mengadakan Pre-Order yang menyediakan barang-barang atau makanan sesuai minat dan kebutuhan pelajar. Program kerja ini dilaksanakan dua sampai empat kali dalam satu tahun. Sedangkan Danusan adalah program kerja menjual makanan ringan keliling sekolah dengan target seluruh warga SMA Negeri 5 Yogyakarta yang dilaksanakan pada jam istirahat selama 1 minggu per bulan.",
        foto: "/divisi/keakhwatan/po.png",
      },
    ],
    gallery: "/fotbar/keakhwatan.png",
  },

  media: {
    nama: "Media",
    programKerja: [
      {
        nama: "Poster Kegiatan",
        foto: "/divisi/media/poster.png",
        info: "2024-06-30",
      },
      {
        nama: "After Movie",
        foto: "/divisi/media/after-movie.png",
        info: "2024-06-30",
      },
      {
        nama: "Dokumentasi Kegiatan",
        foto: "/divisi/media/dokum.JPG",
        info: "2024-06-30",
      },
      {
        nama: "Official Account",
        foto: "/divisi/media/account.png",
        info: "2024-06-30",
      },
      {
        nama: "BEBM",
        foto: "/divisi/media/bebm.JPG",
        info: "2024-06-30",
      },
      {
        nama: "Kuis RDS",
        foto: "/divisi/media/quiz.png",
        info: "2024-06-30",
      },
    ],
    penjelasan: [
      {
        judul: "Poster Kegiatan",
        deskripsi:
          "Poster kegiatan merupakan poster yang digunakan untuk menginformasikan suatu proker/kegiatan yang memuat gambar, keterangan waktu, tempat, dan informasi lainnya.",
        foto: "/divisi/media/poster.png",
      },
      {
        judul: "After Movie",
        deskripsi:
          "After Movie merupakan video berdurasi pendek yang berisi seluruh dokumentasi baik dalam bentuk foto atau video, yang akan diunggah ke akun Youtube dan Istagram ROHIS Darussalam pada akhir periode. video ini dibuat untuk mengabadikan moment-moment yang ada di dalam proker/kegiatan.",
        foto: "/divisi/media/after-movie.png",
      },
      {
        judul: "Dokumentasi Kegiatan",
        deskripsi:
          "Mendokumentasikan seluruh proker/kegiatan ROHIS Darussalam baik berupa foto maupun video yang nantinya dapat digunakan untuk aftermovie.",
        foto: "/divisi/media/dokum.JPG",
      },
      {
        judul: "Official Account",
        deskripsi:
          "Beberapa anak akan diberikan amanah untuk mengurus akun resmi Rohis Darussalam. Akun ini digunakan untuk mengunggah semua poster kegiatan, aftermovie, dan info lain seputar Rohis Darussalam.",
        foto: "/divisi/media/account.png",
      },
      {
        judul: "BEBM (Belajar Edit Bareng Media)",
        deskripsi:
          "Kegiatan yang dimana anak media akan menjelaskan bagaimana cara membuat poster, mengedit foto dan video dari awal dan disertai lomba",
        foto: "/divisi/media/bebm.JPG",
      },
      {
        judul: "Kuis RDS",
        deskripsi:
          "Kuis RDS merupakan sebuah kuis atau pertanyaan singkat mengenai pengetahuan agama Islam yang nantinya akan berisi 10 pertanyaan berupa pilihan ganda dan akan dilaksanakan 1 bulan sekali.",
        foto: "/divisi/media/quiz.png",
      },
    ],
    gallery: "/fotbar/media.png",
  },
};
