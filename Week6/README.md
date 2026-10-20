# Latihan JavaScript

- Nama: Mas Ayu Lana Afiah
- NRP: 5025251064
- Prodi: Teknik Informatika

---

Materi minggu ini membahas mengenai JavaScript sebagai bahasa pemrograman client-side yang dijalankan melalui web browser, berbeda dengan bahasa pemrograman server-side seperti PHP yang diproses di server. JavaScript dapat digunakan dengan bantuan text editor dan web browser serta memiliki karakteristik sebagai bahasa pemrograman tingkat tinggi, loosely typed, dan berorientasi objek. Selain itu, materi ini membahas fungsi JavaScript dalam pemrograman web, terutama untuk membuat halaman web lebih interaktif, melakukan validasi form secara langsung tanpa harus menunggu proses dari server, serta membuat berbagai fitur seperti animasi, fitur chatting, efek visual, dan permainan.

## Soal 1. Form Registrasi dengan Rekomendasi Nama

<img width="314" height="411" alt="Screenshot 2026-10-20 222545" src="https://github.com/user-attachments/assets/b8180a39-7c96-441a-a84a-e0198753d956" />

### Link Deployment
[Soal 1](https://formregistrasi-rust.vercel.app/)

### Tujuan program
Membuat form registrasi mahasiswa yang berisi nama, NIM, mata kuliah, dan dosen. Aturan khususnya: saat pengguna mengetik huruf pada kolom nama, muncul daftar rekomendasi nama yang diawali huruf tersebut (autosuggest). Tampilan form mengikuti contoh Registration Form pada soal. Pada pilihan mata kuliah terdapat pilihan dropdown.

### Cara kerja
1. Pengguna mengetik huruf di kolom nama, misalnya "Lana".
2. Setiap huruf akan membandingkan huruf dengan daftar nama yang sudah disimpan di dalam program atau local search device masing-masing pengguna.
3. Jika salah satu rekomendasi diklik, nama tersebut otomatis terisi ke kolom nama.
4. Setelah semua kolom diisi dan tombol kirim ditekan, data ditampilkan di bawah form. Jika ada yang kosong, muncul pesan peringatan "Semua data harus diisi!".

### Penjelasan kode

**index.html**
- `<input id="nama">` adalah kolom yang diketik pengguna, dan `<ul id="saran">` adalah tempat daftar rekomendasi muncul.
- `<select id="matkul">` adalah pilihan mata kuliah, sedangkan NIM dan dosen berupa input teks biasa.

**style.css**
- `#saran` disembunyikan di awal (`display: none`) dan baru ditampilkan lewat JavaScript saat ada rekomendasi.
- `#saran li:hover` memberi warna biru muda pada rekomendasi yang sedang ditunjuk kursor.

**script.js**
- `namaBawaan` adalah fungsi yang berisi daftar contoh nama yang akan muncul sejak huruf pertama diketikkan
-  `namaTersimpan` adalah fungsi yang berisi daftar nama yang tersimpan dari local storage user
- `daftarNama` adalah array berisi nama-nama yang menjadi bahan rekomendasi.
- `inputNama.addEventListener("input", ...)` menjalankan fungsi setiap kali isi kolom nama berubah.
- `toLowerCase()` mengubah huruf menjadi kecil agar pencarian tidak membedakan huruf besar dan kecil.
- `indexOf(kata) === 0` memeriksa apakah nama diawali oleh huruf yang diketik.
- `document.createElement("li")` membuat elemen daftar baru untuk setiap nama yang cocok, lalu `appendChild` memasukkannya ke `<ul>`.
- `pilihNama()` dipanggil ketika rekomendasi diklik. Fungsi ini memindahkan teks rekomendasi ke kolom nama dan menyembunyikan daftar.
- `addEventListener("submit", ...)` menangani pengiriman form. `e.preventDefault()` mencegah halaman dimuat ulang, lalu program mengecek kolom yang kosong dan menampilkan hasilnya lewat `innerHTML`.

---

## Soal 2. Pencarian Kode Pos Indonesia

<img width="422" height="439" alt="Screenshot 2026-10-20 225320" src="https://github.com/user-attachments/assets/6b44c527-747e-4042-9a54-00f80ee26cc8" />

### Link Deployment
[Soal 2](https://pencariankodepos.vercel.app/)

### Tujuan program
Membuat pencarian kode pos dengan masukan provinsi, kabupaten/kota, dan kecamatan. Keluarannya adalah kode pos beserta informasi daerahnya.

### Cara kerja
1. Saat halaman dibuka, terdapat dropdown provinsi.
2. Setelah provinsi dipilih, dropdown kabupaten/kota hanya berisi kota milik provinsi tersebut.
3. Setelah kota dipilih, dropdown kecamatan hanya berisi kecamatan milik kota tersebut.
4. Tombol Cari menampilkan kode pos, koordinat, kecamatan, kelurahan, kabupaten/kota, dan provinsi yang dipilih.

### Penjelasan kode

**index.html**
- `<label>` memberikan nama pada input.
- `<select>` membuat dropdown atau pilihan.
- `id="provinsi"` menjadi identitas elemen agar bisa diakses oleh JavaScript.
- `<option>` menjadi pilihan yang ditampilkan di dropdown.

**style.css**
- `#hasil` memilih elemen dengan ID hasil.
- `margin-top: 16px` memberikan jarak atas sebesar 16 piksel.
- `font-size: 16px` - mengatur ukuran teks menjadi 14 piksel.

**script.js**
- `async function` membuat fungsi yang dapat menunggu proses asynchronous.
- `fetch(url)` meminta data dari API.
- `await` menunggu respons sebelum melanjutkan proses.
- `response.json()` mengubah respons menjadi data JavaScript.
- `return json.data` mengembalikan bagian data yang akan digunakan program.
- `throw new Error()` digunakan untuk menangani respons yang gagal.

---

## Soal 3. Email Validation

<img width="275" height="436" alt="Screenshot 2026-10-20 232430" src="https://github.com/user-attachments/assets/f019bc8d-591c-4393-91cd-36b243929519" />

### Link Deployment
[Soal 3](https://emailvalidation-eta.vercel.app/)

## Tujuan Program
Program ini membuat form registrasi yang meminta nama lengkap, alamat, email, password, course, nama universitas, dan persetujuan pengguna. JavaScript memeriksa input sebelum form dinyatakan berhasil.

## Cara Kerja
1. Pengguna mengisi form.
2. Saat pengguna berpindah dari kolom atau mengubah isinya, program memeriksa kolom tersebut.
3. Saat tombol Submit ditekan, semua kolom diperiksa.
4. Jika ada yang kosong, email tidak sesuai format, password kurang dari 6 karakter, atau persetujuan belum dicentang, pesan error akan ditampilkan.
5. Jika semua valid, muncul pesan `Registration validated successfully.`
6. Tombol Reset mengosongkan form dan menghapus pesan validasi.

## Penjelasan Kode

**index.html**
- Untuk menyusun struktur form dan kolom yang diisi pengguna.

**style.css**
- Menyusun tampilan form, kolom input, tombol, dan pesan error.

**script.jss**
- `"use strict"`: mengaktifkan mode JavaScript yang lebih ketat.
- `querySelector()` dan `querySelectorAll()`: mengambil elemen HTML yang dibutuhkan.
- `emailPattern`: pola sederhana untuk memeriksa format email.
- `validateField(field)`: memeriksa satu kolom dan mengembalikan `true` jika valid.
- `addEventListener("blur")`: memeriksa kolom saat pengguna meninggalkannya.
- `addEventListener("input")` dan `addEventListener("change")`: memperbarui validasi saat nilai berubah.
- `preventDefault()`: mencegah form terkirim dan halaman dimuat ulang.
- `map(validateField).every(Boolean)`: memeriksa semua kolom dan memastikan semuanya valid.
- `focus()`: mengarahkan kursor ke kolom pertama yang salah.
- `textContent`: menampilkan atau menghapus pesan.
- `addEventListener("reset")`: membersihkan status validasi ketika form di-reset.

---

## Soal 4. Dropdown Dinamis

<img width="341" height="175" alt="Screenshot 2026-10-20 231319" src="https://github.com/user-attachments/assets/988b3e57-7437-4b54-b06b-3e851b562088" />

### Link Deployment
[Soal 4](https://dropdowndinamis.vercel.app/)

### Tujuan program
Membuat dua dropdown yang saling terhubung. Dropdown pertama berisi jenis produk (Desktop, Laptop, Smartphone), dan dropdown kedua berisi merk yang isinya berubah sesuai jenis produk yang dipilih, seperti pada contoh gambar soal.

### Cara kerja
1. Pengguna memilih jenis produk, misalnya Smartphone.
2. Dropdown merk langsung terisi merk smartphone (Samsung, Xiaomi, Oppo, iPhone).
3. Jika jenis produk diganti, isi dropdown merk ikut berganti.
4. Setelah merk dipilih, tampil kalimat hasil pilihan di bawahnya.

### Penjelasan kode

**index.html**
- Dropdown `jenis` sudah berisi pilihan tetap, sedangkan dropdown `merk` hanya berisi "Pilih Merk" dan akan diisi oleh JavaScript.

**style.css**
- Mengatur font, ukuran, dan jarak antar elemen.

**script.js**
- `dataMerk` adalah objek yang menyimpan daftar merk untuk tiap jenis produk. Kuncinya sama dengan `value` pada dropdown jenis.
- `jenis.onchange` berjalan saat jenis produk diganti.
- `merk.length = 1` membuang semua pilihan merk dan menyisakan pilihan pertama ("Pilih Merk").
- `dataMerk[jenis.value]` mengambil daftar merk sesuai jenis yang dipilih. Jika belum ada yang dipilih, hasilnya `undefined` dan pengisian dilewati.
- `new Option(teks, nilai)` membuat pilihan baru yang ditambahkan ke dropdown merk lewat `merk.options`.
- `merk.onchange` menampilkan kalimat hasil pilihan, memakai `selectedIndex` untuk mengambil teks jenis produk yang terpilih.
