# Latihan Bootstrap

- Nama: Mas Ayu Lana Afiah
- NRP: 5025251064
- Prodi: Teknik Informatika

---

### Link Deployment
[app](https://week7bootstrap.netlify.app/)


## Penjelasan Bootstrap

Bootstrap adalah *front-end framework* open source (awalnya dibuat di Twitter) berisi kumpulan **class CSS** dan **komponen JavaScript** siap pakai. Developer tidak menulis CSS dari nol, cukup menambahkan nama class pada elemen HTML, misalnya `btn btn-primary` untuk tombol biru.

Fitur utama:

| Fitur | Keterangan |
|---|---|
| Grid system | Layout 12 kolom (`container`, `row`, `col-*`) dengan breakpoint `sm`, `md`, `lg`, `xl`, `xxl` |
| Komponen | Card, button, form, navbar, badge, alert, modal, dsb. |
| Utilities | Class kecil untuk spacing (`mb-3`, `py-5`), warna (`bg-dark`, `text-white`), flex (`d-flex`), dll. |
| Mobile-first | Tampilan dirancang untuk HP dulu, lalu melebar ke layar besar |
| JavaScript bundle | Komponen interaktif (dropdown, modal, collapse) via `bootstrap.bundle.min.js` |


## Tujuan Pembelajaran

1. Memahami konsep dan cara kerja Bootstrap sebagai framework CSS/JS.
2. Mampu memakai grid system untuk membuat layout responsif.
3. Mampu memakai komponen (card, button, form, badge) dan utility class.
4. Mampu membuat halaman login dan register dengan validasi form dasar.
5. Mampu menyusun struktur file proyek dan men-deploy-nya sebagai website statis.

## Latihan Soal

<img width="959" height="436" alt="image" src="https://github.com/user-attachments/assets/10df1ad7-1e4f-45ff-9e19-479ba5f1c161" />


Halaman menu tersebut diimplementasikan dalam file [index.html](index.html). Pada file tersebut halaman menu menuju tampilan hasil semua latihan.


### Latihan 1 – Membuat halaman konten [index.html](latihan-1/index.html)

<img width="959" height="436" alt="image" src="https://github.com/user-attachments/assets/91198116-ddce-4494-8677-ea3a1f867916" />

**Soal:** membuat halaman dengan Header (menu), Sidebar, Konten (fitur + artikel), dan Footer memakai Bootstrap.

**Cara kerja:** 
- `container` membatasi lebar konten
- `row` membuat baris, dan `col-md-3` + `col-md-9` membagi 12 kolom menjadi sidebar (3) dan konten (9). Di layar ≥768px keduanya berdampingan
- Di HP otomatis bertumpuk. Di dalam konten terdapat `row` baru berisi dua `col-md-6` (Feature 1 dan 2), lalu satu card Main Article di bawahnya.

**Penjelasan kode:**

| Bagian | Class penting | Fungsi |
|---|---|---|
| `<body>` | `bg-light d-flex flex-column min-vh-100` | Latar abu muda; body jadi flex vertikal setinggi layar agar footer menempel di bawah |
| Header | `bg-primary text-white p-3` | Latar biru, teks putih, padding |
| Menu | `btn btn-light`, `btn-outline-light`, `me-2` | Tombol navigasi dengan jarak kanan |
| Sidebar | `col-md-3 mb-3` + `card`, `card-body`, `card-title`, `card-text` | Tiga card menu |
| Konten | `col-md-9`, `fw-bold` | Area utama, judul tebal |
| Card fitur | `card bg-dark text-white h-100` | Card gelap; `h-100` membuat tinggi kedua card sama |
| Footer | `bg-dark text-white py-3 mt-auto`, `d-flex justify-content-between` | Footer gelap, isi kiri-kanan; `mt-auto` mendorongnya ke dasar |


### Latihan 2 – Halaman Login dan Register `latihan-2/`

<img width="959" height="433" alt="image" src="https://github.com/user-attachments/assets/88911452-609b-49ad-af1b-5c49fe6179ce" />

<img width="959" height="436" alt="image" src="https://github.com/user-attachments/assets/6b3fafaf-201d-4b2f-8398-423528bfdaac" />


**Soal:** 
membuat halaman login atau register memakai Bootstrap. Dikerjakan keduanya: `login.html` (tampilan *split screen* dengan gambar pegunungan) dan `register.html` (formulir pendaftaran dengan garis pelangi).

**A. Login**

[login.html](latihan-2/login.html)

[style.css](latihan-2/style.css)

*Cara kerja:* halaman dibagi dua kolom tanpa jarak (`row g-0`). Kolom kiri (`bg-image`) menampilkan gambar dan disembunyikan di HP lewat `d-none d-md-flex`. Kolom kanan berisi formulir yang diposisikan di tengah vertikal dengan `d-flex align-items-center` dan `min-height: 100vh`.

| Kode | Fungsi |
|---|---|
| `container-fluid ps-md-0` | Container selebar layar, tanpa padding kiri di layar md ke atas |
| `col-md-4 col-lg-6` / `col-md-8 col-lg-6` | Lebar gambar vs form berubah menurut ukuran layar |
| `form-floating` | Label berada di dalam input dan naik saat diisi |
| `form-check` | Checkbox "Remember password" |
| `d-grid` + `btn-lg` | Tombol selebar form |
| `text-uppercase fw-bold` | Teks tombol kapital dan tebal |
| `.btn-login` (CSS) | Ukuran huruf, jarak huruf, dan padding tombol |
| `.bg-image` (CSS) | Gambar latar `cover` dan `center` |

**B. Register [register.html](latihan-2/register.html)**

*Cara kerja:* Nama depan/belakang dan password/konfirmasi masing-masing `col-md-6` (berdampingan), sisanya selebar penuh. Tombol **I Agree** memakai `btn-check` + `label.btn`, yaitu checkbox yang tampil seperti tombol toggle. Dua garis warna-warni dibuat dengan `linear-gradient` 8 segmen di class `.rainbow-bar`. Tombol Register (biru) mengirim form, Sign In (hijau) menuju `login.html`.

| Kode | Fungsi |
|---|---|
| `display-6`, `text-secondary fs-4` | Judul besar dengan subjudul abu-abu |
| `badge text-bg-primary` | Label "Register" kecil dalam kalimat persetujuan |
| `g-3` | Jarak antar kolom/baris grid |
| `invalid-feedback` | Pesan error "Password tidak sama." |

## Struktur File

```
latihan-bootstrap/
├── index.html            # halaman menu menuju semua latihan
├── README.md             # laporan ini
├── latihan-1/
│   └── index.html        # Latihan 1: halaman konten
└── latihan-2/
    ├── login.html        # Latihan 2: halaman login
    ├── register.html     # Latihan 2: halaman register
    ├── style.css         # CSS khusus login dan register
    └── img/
        └── mountain.svg  # gambar latar halaman login
```

## Kesimpulan

Bootstrap mempercepat pembuatan antarmuka karena layout, komponen, dan responsivitas sudah disediakan lewat class. Dengan grid, card, form, dan utility class, halaman konten, login, dan register dapat dibuat dengan kode ringkas dan tampil baik di HP maupun desktop.
