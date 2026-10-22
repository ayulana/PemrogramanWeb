# Jawaban ETS - Studi Kasus Perpustakaan

- Nama: Mas Ayu Lana Afiah
- NRP: 5025251064
- Kelas: Pemrograman Web B

## 1. Buat deskripsi dan ruang lingkup pekerjaan yang akan dibuat

### Deskripsi
Disini saya akan membuat aplikasi web bernama LibraryReg. Aplikasi ini dibuat untuk mendaftarkan anggota perpustakaan. Hal ini didasari oleh banyaknya kendala yang terjadi ketika perpustakaan perguruan tinggi masih mendaftarkan anggotanya secara manual di kertas. Sehingga hal tersebut menimbulkan kendala seperti antrean pendaftaran yang membludak, kesalahan pencatatan data, kesulitan mencari informasi anggota, dan lambatnya pembuatan kartu anggota. Oleh karena itu, dibuatlah LibraryReg untuk mempermudah pengguna dan juga petugas dalam mengelola data anggota secara sistematis. 

LibraryReg bekerja dengan cara apabila user belum pernah mendaftar, maka user bisa mendaftarkan diri melalui aplikasi tersebut. Kemudian dari aplikasi tersebut data user akan dikelola sementara oleh JavaScript dan localStorage. Dari situ, petugas juga dapat mengelola data dengan lebih mudah dan meminimalisir kesalahan.

Aplikasi LibraryReg menampilkan informasi layanan perpustakaan, keunggulan, fasilitas, dan ilustrasi jumlah koleksi dan anggotanya. Terdapat juga contact person yang dapat dihubungi jika user ingin bertanya. User juga dapat langsung mendaftar sebagai anggota karena dalam webnya juga akan terdapat form untuk mendaftar. Apabila data berhasil ditambahkan, kartu anggota user akan diproses selanjutnya.

### Ruang lingkup pekerjaan
#### User/pengguna:
- Mendaftarkan diri sebagai anggota
- Melihat informasi terkait perpustakaan
- Mendapat contact person yang dapat dihubungi
- Melihat statistik jumlah anggota

#### Anggota:
- Melihat informasi terkait perpustakaan
- Mendapat contact person yang dapat dihubungi
- Melihat statistik jumlah anggota

#### Petugas:
- Login account
- Mengelola data anggota lewat interface web
- Melihat tabel daftar anggota.
- Mencari anggota berdasarkan nama atau NIM/NIP.
- Melihat detail anggota.
-	Mengedit data anggota.
-	Menghapus data dengan dialog konfirmasi.

## 2. Buat Rancangan Halaman dan Struktur Menu
Web ini akan menampilkan 6 menu utama, yaitu beranda, tentang, informasi layanan, pendaftaran, data anggota, dan login. Pada keenam halaman menu tersebut akan ada header dan footer yang selalu sama untuk tampilannya. Tiap halaman aplikasi web ini dirancang untuk responsive ketika dibuka di Desktop/laptop, Tablet, dan Smartphone. UI juga akan disesuaikan dengan menyesuaikan font, ukuran, maupun warna dari gambar maupun teks. Berikut merupakan deskripsi, struktur menu, dan keterangan pada masing-masing halaman beserta header dan footernya:

### Header
- Logo LibraryReg
- Navigation bar/menu
- Login

### Footer
- Informasi kontak
- Informasi sosial media
- Alamat lengkap perpustakaan

### Beranda 
Halaman utama menampilkan:
- Deskripsi singkat perpustakaan
- Preview perpustakaan sebagai latar belakang gambar
- Daftar anggota perpustakaan
- Koleksi perpustakaan
- Keunggulan perpustakaan

### Tentang
Menampilkan informasi mengenai perpustakaan. Menu yang ditampilkan sebagai berikut:
- Sejarah terbentuknya perpustakaan
- Deskripsi singkat mengenai perpustakaan
- Preview karya atau jurnal yang ada dalam perpustakaan

### Informasi Layanan
Halaman ini berisi daftar layanan apa saja yang ada di perpustakaan. Menunya adalah sebagai berikut:
- Meminjam buku & e-book
- Mengakses jurnal online
- Booking tempat belajar
- Jam operasional layanan
- Program kegiatan di perpustakaan
- Daftar ruangan dan fasilitas 

### Pendaftaran
Halaman pendaftaran akan memunculkan menu sebagai berikut:
- Nama Lengkap
- NIM/NRP
- Program Studi (dropdown)
- Jenis Keanggotaan (dropdown)
- Nomor telepon
- Email
- Alamat
- Daftar Sekarang
- Reset Data

### Data Anggota
Halaman ini akan menampilkan daftar data anggota khusus untuk petugas yang sudah login. Halaman ini akan menampilkan menu sebagai berikut:
- Mencari data berdasarkan nama atau NIM/NRP
- Memfilter data anggota
- Menambah anggota
- Mengedit anggota
- Menghapus anggota
- Melihat data anggota
- Logout

### Login Petugas
Halaman ini dibuat untuk login petugas. Data petugas sudah harus diinput melalui backend. Sehingga data petugas sudah tercatat sebelumnya. Menu yang ditampilkan sebagai berikut:
- Masukkan email
- Masukkan nama
- Masukkan password

## 3. Desain UI Landing Page

<img width="416" height="331" alt="image" src="https://github.com/user-attachments/assets/71f6265a-7867-4f70-81eb-3e3b83979aa3" />
<img width="453" height="342" alt="image" src="https://github.com/user-attachments/assets/24f72353-273d-4d32-b960-bf98b0078cd9" />

## 4. Implementasikan dan publis web yang dibuat

[**Link Deployment**](https://implementasiets.vercel.app/)

Pada implementasi tersebut, terdapat 8 file dengan 6 file `.html`, 1 file `.css`, dan 1 file `.js`. Menggunakan teknologi HTML5, CSS3, JavaScript, Bootstrap 5, dan localStorage sebagai penyimpanan data sementara.

### Struktur File Implementasi
```
Implementasi_WEB/
├── index.html          
├── tentang.html        
├── layanan.html        
├── pendaftaran.html    
├── data-anggota.html   
├── login.html          
├── css/style.css       
└── js/app.js           
```

### Fungsi file
| File | Fungsi |
|---|---|
| [index.html](Implementasi_WEB/index.html) | Beranda: hero, statistik, koleksi, keunggulan |
| [tentang.html](Implementasi_WEB/tentang.html) | Sejarah dan preview karya/jurnal |
| [layanan.html](Implementasi_WEB/layanan.html) | Daftar layanan dan contact person |
| [pendaftaran.html](Implementasi_WEB/pendaftaran.html) | Formulir pendaftaran anggota |
| [login.html](Implementasi_WEB/login.html) | Form login petugas |
| [data-anggota.html](Implementasi_WEB/data-anggota.html) | Tabel dan pengelolaan anggota (khusus petugas) |
| [css/style.css](Implementasi_WEB/css/style.css) | Warna tema, kartu, footer, dan penyesuaian responsif |
| [js/app.js](Implementasi_WEB/js/app.js) | Seluruh logika aplikasi |

### Fungsi Utama di `app.js`

| Fungsi / Bagian | Kegunaan |
|---|---|
| `db.get()` / `db.set()` | Membaca dan menyimpan data anggota (JSON) di localStorage |
| `user()` | Mengecek apakah petugas sedang login |
| `formHTML()` | Membuat isi formulir anggota, dipakai bersama oleh halaman Pendaftaran dan modal Tambah/Edit |
| `validate()` | Validasi kolom wajib, format email, format nomor telepon, dan NIM/NIP unik |
| `toast()` | Menampilkan notifikasi berhasil atau gagal |
| `cards()` / `bars()` | Membuat kartu dan grafik batang statistik secara otomatis dari data |
| `esc()` | Mengamankan teks agar tidak disisipi kode HTML berbahaya |
| `P.pendaftaran` | Menyimpan anggota baru dan menangani tombol Reset Data |
| `P.login` | Mencocokkan email, nama, dan password dengan data petugas |
| `P['data-anggota']` | Pencarian, filter, detail, tambah, edit, dan hapus dengan dialog konfirmasi |
