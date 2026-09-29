# PRODUCT REQUIREMENTS DOCUMENT (PRD)

## Website Profil SMAN 6 Surabaya
- Nama: Mas Ayu Lana afiah
- NRP: 5025251064
- Kelas: Pemrograman Web B

- [**Website Asal**](https://sman6sby.sch.id/) 
- [**Repository Kode**](https://github.com/ayulana/PemrogramanWeb/blob/main/Week3)
- [**Dokumentasi Pembuatan Web**](https://github.com/ayulana/PemrogramanWeb/blob/main/Week3/README.md)
- [**Hasil Web**](https://sman6website.vercel.app/)

### 1. Informasi Produk
| Item          | Detail  | 
|     :---      |  :---   |
| Nama Produk | Website Profile SMAN 6 Surabaya | 
| Jenis Produk | Website Informasil dan Profile Institusi| 
| Target Pengguna| Siswa dan Masyarakat | 
| Platform | Web Responsive | 
| Tujuan | Menyediakan informasi terupdate dari sekolah yang menarik, acceptable, dan dapat diakses oleh masyarakat termasuk siswa  | 

### 2. Latar Belakang
Website SMAN 6 Surabaya digunakan sebagai media untuk memperkenalkan sekolah dan menyampaikan informasi kepada masyarakat. Website ini akan menampilkan informasi utama seperti profil sekolah, kegiatan siswa, prestasi, berita, galeri, serta informasi kontak sekolah.

Website dibuat dengan tampilan yang sederhana agar mudah digunakan dan tidak terlalu kompleks dalam pengembangannya.

### 3. Tujuan Produk
Website ini bertujuan untuk:
- Menampilkan profil dan identitas sekolah.
- Menampilkan sejarah serta visi dan misi sekolah.
- Menampilkan informasi kegiatan siswa.
- Menampilkan prestasi sekolah dan siswa.
- Menyampaikan berita atau informasi terbaru sekolah.
- Menampilkan dokumentasi kegiatan melalui galeri.
- Menyediakan informasi kontak sekolah.
- Memiliki tampilan yang dapat digunakan melalui laptop maupun smartphone.

### 4. Target Pengguna
**Pengunjung umum**
Mencari informasi mengenai sekolah, ekstrakulikuler, fasilitas, kegiatan, berita, dan kontak.

**Orang tua**
Mendapatkan informasi mengenai kegiatan dan perkembangan sekolah.

**Siswa**
Melihat berita, kegiatan, prestasi, dan dokumentasi sekolah.

### 5. Struktur Website
```
Website Profil Sekolah
│
├── Beranda
|   └── Prestasi 
│
├── Profil
│   ├── Sambutan Kepala Sekolah
│   ├── Visi & Misi
│   ├── Tentang Sekolah
│   └── Fasilitas
│
├── Kesiswaan
│   ├── Daftar Jurusan
│   ├── Ekstrakurikuler
│   ├── OSIS/MPK
│   └── Jumlah Siswa
│
├── Prestasi
|
├── Berita
│
└── Kontak
```

### 6. Functional Requirements
**FR 01 — Beranda**
Halaman utama menampilkan:
- Navbar/menu website.
- Nama dan foto sekolah.
- Motto singkat.
- Highlight prestasi terbaru.
- Berita terbaru.
- Footer.

**FR 02 — Profil Sekolah**
Halaman profil berisi:
- Identitas sekolah.
- Sejarah sekolah.
- Visi dan misi.
- Sambutan kepala sekolah.
- Fasilitas sekolah.

**FR 03 — Kesiswaan**
Isi:
- Jumlah siswa.
- Ekstrakurikuler.
- Daftar jurusan.
- Kegiatan OSIS/MPK

**FR 04 — Prestasi**
Informasi yang ditampilkan:
- Nama prestasi.
- Tahun.
- Tingkat prestasi.
- Nama siswa/tim jika diperlukan.
- Foto atau dokumentasi.

**FR 05 — Berita**
Setiap berita memiliki:
- Judul.
- Foto.
- Tanggal.
- Ringkasan.
- Isi berita.

**FR 06 — Kontak**
Menampilkan informasi:
- Nama sekolah.
- Alamat.
- Nomor telepon.
- Email.
- Jam operasional.
- Media sosial.
- Google Maps.
- Masukan

### 7. Admin / Content Management
```
Admin Dashboard
■
■■■ Dashboard
■■■ Profil Sekolah
■■■ Berita
■■■ Prestasi
■■■ Program Akademik
■■■ Pesan Kontak
■■■ User Management
```
Admin dapat melakukan operasi Create, Read, Update, dan Delete (CRUD) pada konten website.

### 8. Non-Functional Requirements
**Responsive**
Website dapat dibuka pada:
- Desktop/laptop.
- Tablet.
- Smartphone.

**Performance**
- Menggunakan gambar dengan ukuran yang tidak terlalu besar.
- Tidak menggunakan terlalu banyak animasi.
- Website tetap dapat dimuat dengan cepat.

**Accessibility**
- Warna teks mudah dibaca.
- Ukuran font cukup jelas.
- Setiap gambar memiliki alt.
- Navigasi mudah digunakan.

**Security**
- Tidak menampilkan data pribadi siswa.
- Form kontak melakukan validasi input dasar.

### 9. Teknologi yang Dapat Digunakan
```
HTML + CSS + JavaScript + Vercel
```

### 10. Struktur Database
users
schools
teachers
programs
extracurriculars
achievements
news
categories
contacts
Relasi utama: users → news; categories → news.

### 11. Prioritas Fitur
**MVP**
- Beranda	
- Profil	
- Kegiatan	
- Prestasi	
- Berita	
- Kontak	
- Responsive

**Pengembangan Berikutnya**
- Akademik	
- PPDB	
- Login	
- Admin Dashboard	
- Database	
- CRUD	
- Search	
- Pagination	
- Statistik pengunjung	
- API

### 12. User Flow
**Pengunjung**
```
Beranda
■
■■■ Profil
■■■ Kesiswaan
■■■ Prestasi
■■■ Berita
■■■ Kontak
```

### 13. Struktur Project
```
Website Profil Sekolah
│
├── README.md
|
├── images
│   ├── background.png
│   ├── berita1.png
|   ├── berita2.png
│   ├── berita3.png
│   ├── kepsek.png
│   ├── logo.png
|   ├── prestasi1.png
│   ├── prestasi2.png
│   ├── prestasi3.png
│   └── preview.png
│
├── berita.html
├── index.html
├── kesiswaan.html
├── kontak.html
├── prestasi.html
├── profil.html
├── script.js
└── style.css
```
