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
  programKerja: Program[];
  penjelasan: PenjelasanSection[];
  gallery: string;
};

export const divisiData: Record<string, Divisi> = {
  "pengurus-harian": {
    nama: "Pengurus Harian",
    programKerja: [
      {
        nama: "Mabit",
        foto: "/ex1.jpg",
        info: "2024-11-03",
      },
      {
        nama: "Syawalan",
        foto: "/ex1.jpg",
        info: "2024-11-03",
      },
      {
        nama: "ORD",
        foto: "/ex2.jpg",
        info: "2025-02-14",
      },
      {
        nama: "Katup",
        foto: "/ex2.jpg",
        info: "2025-02-14",
      },
    ],
    penjelasan: [
      {
        judul: "Mabit (Malam Bina Iman dan Taqwa)",
        deskripsi:
          "Malam Bina Iman dan Takwa merupakan rangkaian kegiatan yang dilaksanakan di luar area sekolah selama dua hari satu malam. Kegiatan yang ada pada Malam Bina Iman dan Takwa antara lain materi kajian Islam, materi kepemimpinan, shalat berjamaah, dan tadarus bersama. Kemudian pada hari kedua juga dilaksanakan kegiatan jalan pagi dan games yang bertujuan untuk meningkatkan tali silaturahmi anggota pengurus ROHIS Darussalam. ",
        foto: "/ex1.jpg",
      },
      {
        judul: "Syawalan",
        deskripsi:
          "Pelaksanaan program kerja Syawalan ini melalui dua kegiatan. Kegiatan yang pertama adalah saling memaafkan untuk siswa-siswi dan guru SMA Negeri 5 Yogyakarta yang dilaksanakan di Lapangan Upacara. Kemudian, siswa-siswi dan guru SMA Negeri 5 Yogyakarta yang beragama Islam menuju Masjid Puspanegara untuk mengikuti kajian yang sudah disiapkan. ",
        foto: "/ex2.jpg",
      },
      {
        judul: "ORD (Outbound ROHIS Darussalam)",
        deskripsi:
          "ORD atau Outbound Rohis Darussalam adalah program kerja berupa outbond yang dilaksanakan di luar sekolah / alam terbuka, diisi dengan permainan sederhana yang dapat meningkatkan rasa kekeluargaan dan kerja sama antarpengurus Rohis.",
        foto: "/ex2.jpg",
      },
      {
        judul: "Katup (Kajian Penutup) dan Penyerahan Sertifikat",
        deskripsi:
          "Katup merupakan kajian penutup yang dilaksanakan sebagai kajian terakhir/penutup dalam suatu masa amanah Penyerahan Seritifikat adalah suatu bentuk penghargaan yang diberikan oleh Pengurus Harian kepada seluruh Pengurus Rohis Darussalam.",
        foto: "/ex2.jpg",
      },
    ],
    gallery: "/ex1.jpg",
  },

  kaderisasi: {
    nama: "Kaderisasi",
    programKerja: [
      {
        nama: "Monitoring",
        foto: "/ex1.jpg",
        info: "2025-10-20",
      },
      {
        nama: "SHAR'I",
        foto: "/ex2.jpg",
        info: "2025-12-15",
      },
      {
        nama: "Tadarus Central",
        foto: "/ex2.jpg",
        info: "2025-12-15",
      },
      {
        nama: "Surat Komitmen",
        foto: "/ex2.jpg",
        info: "2025-12-15",
      },
      {
        nama: "ROHIS Aspiration",
        foto: "/ex2.jpg",
        info: "2025-12-15",
      },
    ],
    penjelasan: [
      {
        judul: "Monitoring",
        deskripsi:
          "Sebuah kegiatan yang dilaksanakan oleh seluruh anggota Divisi Kaderisasi pada divisi lain ROHIS Darussalam untuk memantau,memberi masukan, evaluasi, serta memastikan kelancaran pelaksanaan suatu program kerja divisi lain",
        foto: "/ex1.jpg",
      },
      {
        judul: "SHAR'I",
        deskripsi:
          "Sebuah kegiatan berkolaborasi dengan Pengurus Harian. Yaitu kegiatan evaluasi dan peningkatan kualitas diri untuk semua pengurus ROHIS Darussalam. Kegiatan ini dilaksanakan pada tengah dan akhir periode.",
        foto: "/ex2.jpg",
      },
      {
        judul: "Tadarus Central",
        deskripsi:
          "Sebuah kegiatan tadarus ayat suci Al-Qur'an setiap hari sebelum kegiatan KBM oleh seluruh warga sekolah SMA Negeri 5 Yogyakarta yang dipandu oleh Qori' melalui Ruang Central.",
        foto: "/ex2.jpg",
      },
      {
        judul: "Surat Komitmen",
        deskripsi:
          "Sebuah surat berisi komitmen dan tanggung jawab dari Divisi Kaderisasi yang bertujuan untuk membangun komitmen dan tanggung jawab selama satu periode untuk seluruh anggota ROHIS Darussalam.",
        foto: "/ex2.jpg",
      },
      {
        judul: "ROHIS Aspiration",
        deskripsi:
          "Sebuah papan aspirasi berbentuk Google Form untuk mencurahkan keluh kesah, kritik, dan saran terhadap divisinya maupun kepada salah satu anggota ROHIS lainnya. Pengisian ROHIS Aspiration tiap menjelang SHAR'I (untuk proker rutin) dan setelah menyelesaikan suatu proker (untuk proker tidak rutin).",
        foto: "/ex2.jpg",
      },
    ],
    gallery: "/ex1.jpg",
  },

  dakwah: {
    nama: "Dakwah",
    programKerja: [
      {
        nama: "PHBI",
        foto: "/ex1.jpg",
        info: "2025-10-20",
      },
      {
        nama: "HOTW",
        foto: "/ex2.jpg",
        info: "2025-12-15",
      },
      {
        nama: "Info Kajian Eksternal",
        foto: "/ex2.jpg",
        info: "2025-12-15",
      },
    ],
    penjelasan: [
      {
        judul: "PHBI (Pengajian Hari Besar Islam)",
        deskripsi:
          "Kegiatan mempersiapkan dan membuat kajian dalam rangka memperingati hari besar Islam. Seperti tahun baru Islam dan Isra' Mi'raj yang dihadiri oleh seluruh angkatan dari SMA Negeri 5 Yogyakarta.",
        foto: "/ex1.jpg",
      },
      {
        judul: "HOTW (Hadis Of The Week)",
        deskripsi:
          "Kegiatan membuat dan membagikan hadist kepada siswa siswi SMA Negeri 5 yogyakarta melalui line angkatan dan grup besar ROHIS menggunakan media poster digital setiap hari jumat.",
        foto: "/ex2.jpg",
      },
      {
        judul: "Info Kajian Eksternal",
        deskripsi:
          "Kegiatan mencari informasi kajian-kajian ekstern dan membagikannya kepada setiap grup angkatan yang akan disebarkan bersamaan dengan HOTW pada hari Jumat. Info kajian disebarkan setiap seminggu hingga 2 minggu sekali. Jadwal kajian yang disebarkan adalah kajian yang dilaksanakan seminggu yang akan datang. Kegiatan kajian dapat dicari melalui media sosial dan informasi lainnya.",
        foto: "/ex2.jpg",
      },
    ],
    gallery: "/ex1.jpg",
  },

  tarbiyah: {
    nama: "Tarbiyah",
    programKerja: [
      {
        nama: "SCA",
        foto: "/ex1.jpg",
        info: "2025-10-20",
      },
      {
        nama: "TRT",
        foto: "/ex2.jpg",
        info: "2025-12-15",
      },
      {
        nama: "PMB",
        foto: "/ex1.jpg",
        info: "2025-10-20",
      },
      {
        nama: "Fun Fact Islam",
        foto: "/ex2.jpg",
        info: "2025-12-15",
      },
    ],
    penjelasan: [
      {
        judul: "SCA (Study Club Academy)",
        deskripsi:
          "Kegiatan pendalaman materi untuk membantu siswa - siswi kelas 10 untuk mempersiapkan materi yang matang sebelum melaksanakan Penilaian Akhir Semester (PAS) dan Penilaian Akhir Tahun (PAT)",
        foto: "/ex1.jpg",
      },
      {
        judul: "TRT (Tahfidz Ramadhan Time)",
        deskripsi:
          "Kegiatan Hafalan Al Qur'an Untuk Kelas 11 dan 10 saat bulan Ramadhan yang bertujuan untuk mengisi waktu luang di bulan Ramadhan dan juga menambah hafalan.",
        foto: "/ex2.jpg",
      },
      {
        judul: "PMB (Puspanegara Mencari Bakat)",
        deskripsi:
          "Lomba Keagamaan yang bertujuan mengembangkan Minat dan Bakat dalam hal seni keislaman dan menumbuhkan semangat mendalami ilmu keagamaan yang biasanya terdiri dari Adzan, CCA, MHQ, MTQ dan lomba keagamaan lainnya",
        foto: "/ex2.jpg",
      },
      {
        judul: "Fun Fact Islam",
        deskripsi:
          "Membuat Poster tentang pengetahuan islam berupa hadist-hadist yang dibuat semenarik mungkin kemudian diunggah kedalam  sosial media ROHIS DARUSSALAM",
        foto: "/ex2.jpg",
      },
    ],
    gallery: "/ex1.jpg",
  },

  gaza: {
    nama: "Gaza",
    programKerja: [
      {
        nama: "Galdan",
        foto: "/ex1.jpg",
        info: "2025-10-20",
      },
      {
        nama: "MSC",
        foto: "/ex2.jpg",
        info: "2025-12-15",
      },
      {
        nama: "PANCAL",
        foto: "/ex2.jpg",
        info: "2025-12-15",
      },
      {
        nama: "Baksos Idul Fitri",
        foto: "/ex2.jpg",
        info: "2025-12-15",
      },
      {
        nama: "Baksos Idul Adha",
        foto: "/ex2.jpg",
        info: "2025-12-15",
      },
      {
        nama: "Siltur Guru",
        foto: "/ex2.jpg",
        info: "2025-12-15",
      },
      {
        nama: "Siltur Siswa",
        foto: "/ex2.jpg",
        info: "2025-12-15",
      },
    ],
    penjelasan: [
      {
        judul: "GALDAN",
        deskripsi:
          "GALDAN atau galang dana adalah proker gabungan bersama OSIS seksi bidang 2 yang dibantu juga oleh MPK dari komisi c. Proker galdan atau galang dana ini adalah bentuk rasa peduli kita terhadap keluarga SMAN 5 yang sedang berduka.",
        foto: "/ex1.jpg",
      },
      {
        judul: "MSC",
        deskripsi:
          "MSC atau singkatan dari mache share and care ini juga masih bekerjasama dengan OSIS seksi bidang 2 yang berjalan selama 2 hari pada saat bulan ramadhan. Di hari pertama kami berbagi takjil di jalanan secara berkelompok sesuai dengan rute yang sudah disepakati bersama sebelumnya. Dan untuk di hari kedua kami akan mengunjungi panti asuhan untuk berbuka puasa di sana.",
        foto: "/ex2.jpg",
      },
      {
        judul: "PANCAL",
        deskripsi:
          "PANCAL atau Pembelajaran Baca Al Qur'an adalah program kerja yang bergerak di bulan ramadhan juga, proker ini bergerak selama 1 pekan untuk membantu masjid yang kekurangan pembimbing. Di sana dari kami akan membantu adik adik mengaji dan bermain bersama untuk menunggu waktubuka kemudian berbuka puasa bersama dan sholat maghrib berjamaah.",
        foto: "/ex2.jpg",
      },
      {
        judul: "BAKSOS IDUL FITRI",
        deskripsi:
          "Baksos idul fitri adalah program kerja bakti sosial yang bertujuan mengumpulkan dana untuk membantu warga sekolah ataupun warga di daerah kawasan sekolah yang membutuhkan zakat fitrah. Dari dana yang dikumpulkan tersebut kami bagikan dalam bentuk sembako kepada warga sekolah dan warga sekitar yang membutuhkan. Tidak hanya warga sekolah dan warga sekitar SMAN 5 yang mendapatkan, dari kami juga membagikan sembako tersebut pada saat kegiatan mubaligh hijrah ke gunung kidul kemarin",
        foto: "/ex2.jpg",
      },
      {
        judul: "BAKSOS IDUL ADHA",
        deskripsi:
          "Baksos idul adha adalah program kerja bakti sosial yang bertujuan mengumpulkan dana untuk membantu daerah yang kekurangan hewan korban. Pada saat periode kemarin kami ikut serta pergi ke daerah gunung kidul ditemani guru guru SMA negeri 5 menyumbangkan satu ekor sapi untuk diqurbankan",
        foto: "/ex2.jpg",
      },
      {
        judul: "SILTUR GURU",
        deskripsi:
          "Sesuai dengan nama prokernya, siltur guru atau silaturahmi guru adalah program kerja yang dibersamai oleh pengurus harian rohis, mpk, dan juga osis yang bertujuan untuk mengunjungi beberapa rumah guru guru SMAN 5 dalam bentuk silaturahmi bersama",
        foto: "/ex2.jpg",
      },
      {
        judul: "SILTUR SISWA",
        deskripsi:
          "Program kerja siltur siswa atau silaturahmi siswa ini kurang lebih mirip dengan stuband atau study banding. Dari proker ini kami saling berbagi informasi dan memperluas pertemanan, pada saat silaturahmi ini kami bertukar informasimengenai tiap tiap divisi yang berbeda. Proker in di periode kemarin berhasil terlaksana 2x, 1x sekolah lain berkunjung ke SMAN 5 dan 1x kami mengunjungi sekolah",
        foto: "/ex2.jpg",
      },
    ],
    gallery: "/ex1.jpg",
  },

  hamas: {
    nama: "Hamas",
    programKerja: [
      {
        nama: "Diklat Khatib",
        foto: "/ex1.jpg",
        info: "2025-10-20",
      },
      {
        nama: "Resik Akbar",
        foto: "/ex2.jpg",
        info: "2025-12-15",
      },
      {
        nama: "Baca Hadis",
        foto: "/ex2.jpg",
        info: "2025-12-15",
      },
      {
        nama: "Kelola Infak",
        foto: "/ex2.jpg",
        info: "2025-12-15",
      },
    ],
    penjelasan: [
      {
        judul: "Diklat Khatib",
        deskripsi:
          "Pemilihan dan pelatihan khatib salat Jumat yang dilaksanakan pada awal masa amanah. Diikuti oleh perwakilan kelas dan anggota ikhwan Rohis Darussalam.",
        foto: "/ex1.jpg",
      },
      {
        judul: "Resik Akbar",
        deskripsi:
          "Kegiatan membersihkan Masjid Puspanegara yang dilakukan secara rutin selama masa amanah. Kegiatan ini dilakukan oleh anggota ikhwan Rohis Darussalam sesuai jadwal yang sudah ditentukan.",
        foto: "/ex2.jpg",
      },
      {
        judul: "Baca Hadis",
        deskripsi:
          "Kegiatan membaca hadis di atas mimbar setelah salat Zuhur dan Asar. Kegiatan ini dilakukan oleh anggota ikhwan Rohis Darussalam sesuai jadwal yang sudah ditentukan.",
        foto: "/ex2.jpg",
      },
      {
        judul: "Kelola Infak",
        deskripsi:
          "Kegiatan mengambil infak di setiap kelas dan mengelolanya untuk kemaslahatan warga SMAN 5 Yogyakarta. Kegiatan ini rutin dilakukan setiap hari Jumat.",
        foto: "/ex2.jpg",
      },
    ],
    gallery: "/ex1.jpg",
  },

  keakhwatan: {
    nama: "Keakhwatan",
    programKerja: [
      {
        nama: "CBR (Cuci Bersih Rukuh)",
        foto: "/ex1.jpg",
        info: "2025-10-20",
      },
      {
        nama: "KETCHE (Keterampilan Mache)",
        foto: "/ex2.jpg",
        info: "2025-12-15",
      },
      {
        nama: "PO (Pre-Order) & Danusan",
        foto: "/ex2.jpg",
        info: "2025-12-15",
      },
    ],
    penjelasan: [
      {
        judul: "CBR (Cuci Bersih Rukuh)",
        deskripsi:
          "Dibentuk jadwal piket yang dilakukan oleh seluruh anggota Divisi Keakhwatan untuk membereskan, menata, dan memilah rukuh yang sekiranya sudah tidak layak pakai. Serta, melaundry rukuh setiap 2 bulan sekali. Dibentuk panitia yang bertugas menerima donasi rukuh dari teman teman.",
        foto: "/ex1.jpg",
      },
      {
        judul: "KETCHE (Keterampilan Mache)",
        deskripsi:
          "Keterampilan mache mengadakan sebuah perlombaan yang diikuti oleh setiap kelas yang akan membuat suatu kerajinan. Kegiatan ini bertujuan untuk meningkatkan kesadaran ikhwah terhadap pemanfaatan barang-barang di lingkungan sekitar dan untuk meningkatkan kreativitas siswi-siswi SMA Negeri 5 Yogyakarta dalam memanfaatkan danmeningkatkan nilai guna suatu barang, serta dapat menumbuhkan kesadaran warga sekolah dalam upaya menerapkan hidup peduli lingkungan.",
        foto: "/ex2.jpg",
      },
      {
        judul: "PO (Pre-Order) & Danusan",
        deskripsi:
          "Suatu program kerja Divisi Keakhwatan dengan mengadakan Pre-Order yang menyediakan barang-barang atau makanan sesuai minat dan kebutuhan pelajar. Program kerja ini dilaksanakan dua sampai empat kali dalam satu tahun. Sedangkan Danusan adalah program kerja menjual makanan ringan keliling sekolah dengan target seluruh warga SMA Negeri 5 Yogyakarta yang dilaksanakan pada jam istirahat selama 1 minggu per bulan.",
        foto: "/ex2.jpg",
      },
    ],
    gallery: "/ex1.jpg",
  },

  media: {
    nama: "Media",
    programKerja: [
      {
        nama: "Poster Kegiatan",
        foto: "/ex1.jpg",
        info: "2024-06-30",
      },
      {
        nama: "After Movie",
        foto: "/ex1.jpg",
        info: "2024-06-30",
      },
      {
        nama: "Dokumentasi Kegiatan",
        foto: "/ex1.jpg",
        info: "2024-06-30",
      },
      {
        nama: "Official Account",
        foto: "/ex1.jpg",
        info: "2024-06-30",
      },
      {
        nama: "BEBM",
        foto: "/ex1.jpg",
        info: "2024-06-30",
      },
      {
        nama: "Kuis RDS",
        foto: "/ex1.jpg",
        info: "2024-06-30",
      },
    ],
    penjelasan: [
      {
        judul: "Poster Kegiatan",
        deskripsi:
          "Poster kegiatan merupakan poster yang digunakan untuk menginformasikan suatu proker/kegiatan yang memuat gambar, keterangan waktu, tempat, dan informasi lainnya.",
        foto: "/ex1.jpg",
      },
      {
        judul: "After Movie",
        deskripsi:
          "After Movie merupakan video berdurasi pendek yang berisi seluruh dokumentasi baik dalam bentuk foto atau video, yang akan diunggah ke akun Youtube dan Istagram ROHIS Darussalam pada akhir periode. video ini dibuat untuk mengabadikan moment-moment yang ada di dalam proker/kegiatan.",
        foto: "/ex1.jpg",
      },
      {
        judul: "Dokumentasi Kegiatan",
        deskripsi:
          "Mendokumentasikan seluruh proker/kegiatan ROHIS Darussalam baik berupa foto maupun video yang nantinya dapat digunakan untuk aftermovie.",
        foto: "/ex1.jpg",
      },
      {
        judul: "Official Account",
        deskripsi:
          "Beberapa anak akan diberikan amanah untuk mengurus akun resmi Rohis Darussalam. Akun ini digunakan untuk mengunggah semua poster kegiatan, aftermovie, dan info lain seputar Rohis Darussalam.",
        foto: "/ex1.jpg",
      },
      {
        judul: "BEBM (Belajar Edit Bareng Media)",
        deskripsi:
          "Kegiatan yang dimana anak media akan menjelaskan bagaimana cara membuat poster, mengedit foto dan video dari awal dan disertai lomba",
        foto: "/ex1.jpg",
      },
      {
        judul: "Kuis RDS",
        deskripsi:
          "Kuis RDS merupakan sebuah kuis atau pertanyaan singkat mengenai pengetahuan agama Islam yang nantinya akan berisi 10 pertanyaan berupa pilihan ganda dan akan dilaksanakan 1 bulan sekali.",
        foto: "/ex1.jpg",
      },
    ],
    gallery: "/ex2.jpg",
  },
};
