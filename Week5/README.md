# Latihan CSS

- Nama: Mas Ayu Lana Afiah
- NRP: 5025251064
- Prodi: Teknik Informatika

## Dokumentasi dan Deployment
[Hasil Deployment](https://formcss.vercel.app/)

<img width="959" height="539" alt="image" src="https://github.com/user-attachments/assets/71d2b44f-54fe-4938-81ec-4b715719d7a6" />

Web di atas merupakan salah satu contoh penerapan css, yaitu Web Student Management untuk mengelola data mahasiswa. Dalam web tersebut, user dapat menambah, melihat, mengubah, menghapus, ataupun mencari data para mahasiswa. Web tersebut dibuat dengan penerapan HTML, CSS, dan JavaScript. Data yang sudah tercatat akan tersimpan dalam local storage user.


## Fitur
- Menambahkan mahasiswa melalui form (NIM, Nama, Jurusan, dan Email).
- Melihat data dalam tabel.
- Mengedit atau menghapus data.
- Mencari mahasiswa berdasarkan NIM, nama, email, atau jurusan.
- Pagination: hanya menampilkan 5 data per halaman.
- Adanya validasi form: semua kolom wajib diisi, format email harus benar, dan NIM tidak boleh ganda.
- Penyimpanan otomatis di browser supaya data tidak hilang.
- Responsive


## Penjelasan Kode
### [`index.html`](index.html)
- Navbar: judul "Student Management" dan link ke Form Student dan Data Mahasiswa.
- Kolom kiri: form input dengan field NIM, Nama Lengkap, Jurusan (dropdown),Email, area pesan error, serta tombol Simpan dan Reset. Ada juga hidden input yang menyimpan ID mahasiswa saat mode edit.
- Kolom kanan: judul, kotak pencarian, tabel (kolom No, NIM, Nama, Email, Jurusan, Aksi), dan area pagination.
- Toast: elemen kosong untuk notifikasi.
- Memuat style.css di bagian atas dan app.js di bagian bawah.

### [`style.css`](css/style.css)
Tampilan berisi:
- Reset dan style global
- CSS variables (warna, radius)
- Navbar
- Layout utama (grid 2 kolom)
- Card
- Form dan state focus
- Tombol 
- Header tabel dan kotak pencarian
- Tabel
- Tombol aksi edit dan hapus
- Pagination
- Toast
- Responsive

### [`app.js`](js/app.js)
Memuat isi sebagai berikut:
- Penyimpanan: `load()` membaca data dari localStorage dan save() menyimpannya kembali.
- Render: `render()` menggambar baris tabel sesuai halaman dan kata kunci pencarian, lalu `renderPagination()` untuk menggambar tombol halaman.
- Form: validasi, menambah data baru, dan update data lama (dibedakan dari nilai ID).
- Edit dan Hapus: satu user pada tabel terdapat dua tombol, menggunakan atribut `data-id` untuk mengetahui baris mana yang dipilih.
- Pencarian: memfilter data lalu kembali ke halaman 1.
- Keamanan: `escapeHtml()` mencegah teks yang diinput ikut dieksekusi sebagai HTML.


## Struktur File
```
Week5/
├── README.md
├── index.html
├── css/
│   └── style.css
└── js/
    └── app.js
```
