const IMG={
 hero:'https://pengadaan.penerbitdeepublish.com/wp-content/uploads/2023/04/ciri-fasilitas-perpustakaan-yang-baik.webp',
 koleksi:['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIJeuoPJPvzX6UefVyCsTm_M9QoZs4NGPrL5eCroqxQxylRAnvDls3Ynvo&s=10','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtQPsRDMD2-EX1GlGg4AkisaMic4jFJIWWk19uXWkD6g&s=10','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6tQH1SXaf0uYYVg4TVMvpCBrK-Zd4TKAoPAEYyFxOPA&s=10'],
 keunggulan:['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQma3ZJddPuOTMk6lQsl6UXX8lxA7Fi6joWO9hHrESvA&s=10','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS07Nmwi9haBt32qfW_lfMlVmjhVIuSf0sc1OeIg6XWfQ&s=10','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi8wHQPQ1yoQLkjZZJL67ewa4BQVGwcPHWIor5k8ULAw&s=10'],
 karya:['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuiedUwRaWh_i4g7qs0PbFoR_HGbgiELzit7HJBqTYNA&s=10','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLHgqGrA5LPMzDAApjkiWhse7vdUxyzNYcx6yLaJ0zPg&s=10','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo9O9sk39VIbyBBUOWcIf21mG6I_aRIs5rELiuxdE9hg&s=10'],
 layanan:['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdqCcPNT_o6vn5yRyLie-R05Xr_7QFcX0U87S_SRFC1Q&s=10','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy4liL9PFV5_SxjpCxpfS5IdXMHnhyB2mdL-bxKyskXw&s=10','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy3lHq5w_bT22hCtcofuYhlhVjvqNKqO1H_lcge_QxqQ&s=10',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcb-FeYH0FP9VM0msbUJMjH5VRh6NQKpdUQyvcMaXTjA&s=10','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHY7cCW0tRNhTjsj2JrRWLjyTep7uEY4JBYhxwy44VYg&s=10','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_F5PKPbCAO_JP6MN7o1gpuv-lcWkJ2dvI9nH2akHDsw&s=10']
};
const K={m:'lr_members',u:'lr_user',s:'lr_staff'};
const $=(s,e=document)=>e.querySelector(s);
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const PRODI=['Teknik Informatika','Sistem Informasi','Teknik Elektro','Manajemen','Akuntansi','Psikologi','Ilmu Hukum','Pendidikan Bahasa'];
const JENIS=['Mahasiswa','Dosen','Tenaga Kependidikan'];
const db={get:()=>JSON.parse(localStorage.getItem(K.m)||'[]'),set:v=>localStorage.setItem(K.m,JSON.stringify(v))};
const user=()=>JSON.parse(localStorage.getItem(K.u)||'null');
if(!localStorage.getItem(K.m))db.set([
['Andi Pratama','2110511001','Teknik Informatika','Mahasiswa','081234567001','andi@kampus.ac.id','Jl. Mawar 12, Surabaya'],
['Siti Rahmawati','2110511002','Sistem Informasi','Mahasiswa','081234567002','siti@kampus.ac.id','Jl. Melati 5, Sidoarjo'],
['Dr. Budi Santoso','198503122010','Teknik Elektro','Dosen','081234567003','budi@kampus.ac.id','Jl. Kenanga 8, Surabaya'],
['Rina Wulandari','2210511010','Manajemen','Mahasiswa','081234567004','rina@kampus.ac.id','Jl. Anggrek 3, Gresik'],
['Agus Salim','199001152015','Akuntansi','Tenaga Kependidikan','081234567005','agus@kampus.ac.id','Jl. Dahlia 20, Surabaya']
].map((a,i)=>({id:'s'+i,nama:a[0],nim:a[1],prodi:a[2],jenis:a[3],telp:a[4],email:a[5],alamat:a[6]})));

if(!localStorage.getItem(K.s))localStorage.setItem(K.s,JSON.stringify([{email:'petugas@libraryreg.ac.id',nama:'Petugas Perpustakaan',password:'admin123'}]));

const NAV=[['index.html','beranda','Beranda'],['tentang.html','tentang','Tentang'],['layanan.html','layanan','Informasi Layanan'],['pendaftaran.html','pendaftaran','Pendaftaran'],['data-anggota.html','data-anggota','Data Anggota']];
const page=document.body.dataset.page;
$('#site-header').innerHTML=`<nav class="navbar navbar-expand-lg bg-white"><div class="container">
<a class="navbar-brand d-flex align-items-center gap-2" href="index.html"><span class="brand-logo">LR</span><span class="lh-1"><small class="d-block text-secondary" style="font-size:.6rem">PERPUSTAKAAN</small><b>LibraryReg</b></span></a>
<button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nv"><span class="navbar-toggler-icon"></span></button>
<div class="collapse navbar-collapse" id="nv"><ul class="navbar-nav ms-auto align-items-lg-center gap-lg-1">
${NAV.map(n=>`<li class="nav-item"><a class="nav-link ${page===n[1]?'active':''}" href="${n[0]}">${n[2]}</a></li>`).join('')}
<li class="nav-item ms-lg-2">${user()?'<button class="btn btn-dark btn-sm js-logout">Logout</button>':'<a class="btn btn-dark btn-sm" href="login.html">Login</a>'}</li></ul></div></div></nav>`;
$('#site-footer').innerHTML=`<footer class="site-footer"><div class="container"><div class="row g-4">
<div class="col-lg-4"><div class="d-flex align-items-center gap-2 mb-2"><span class="brand-logo">LR</span><b class="text-white fs-5">LibraryReg</b></div><p>Aplikasi pendaftaran anggota perpustakaan perguruan tinggi.</p><div class="d-flex gap-2"><span class="brand-logo">IG</span><span class="brand-logo">FB</span><span class="brand-logo">YT</span></div></div>
<div class="col-6 col-lg-2"><h6>Jelajahi</h6>${NAV.map(n=>`<a href="${n[0]}">${n[2]}</a>`).join('')}</div>
<div class="col-6 col-lg-3"><h6>Hubungi kami</h6><p class="mb-1">Jl. Library, Surabaya, Indonesia</p><p class="mb-1">halo@libraryreg.example</p><p>(021) 0000 0000</p><p class="mb-0">Sosial media: @libraryreg</p></div>
<div class="col-lg-3"><h6>Jam layanan</h6><div class="d-flex justify-content-between"><span>Senin–Jumat</span><span>08.00–18.00</span></div><div class="d-flex justify-content-between"><span>Sabtu–Minggu</span><span>09.00–16.00</span></div></div></div>
<hr class="mt-4"><div class="d-flex flex-wrap justify-content-between"><span>© 2026 LibraryReg. Seluruh hak cipta dilindungi.</span><span>Aplikasi Pendaftaran Anggota Perpustakaan</span></div></div></footer>`;
document.addEventListener('click',e=>{if(e.target.closest('.js-logout')){localStorage.removeItem(K.u);location.href='index.html'}});

function toast(msg,type='success'){let c=$('#toasts');if(!c){c=document.createElement('div');c.id='toasts';c.className='toast-container position-fixed top-0 end-0 p-3';document.body.append(c)}
const t=document.createElement('div');t.className=`toast align-items-center text-bg-${type} border-0`;t.innerHTML=`<div class="d-flex"><div class="toast-body">${esc(msg)}</div><button class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button></div>`;c.append(t);const x=new bootstrap.Toast(t,{delay:3500});x.show();t.addEventListener('hidden.bs.toast',()=>t.remove())}
const cards=(a,imgs,cols='col-md-4')=>a.map((c,i)=>`<div class="${cols}"><div class="card-lr"><img class="card-img" src="${imgs[i]}" alt="${esc(c[0])}" loading="lazy" onerror="this.style.visibility='hidden'"><div class="p"><h3>${c[0]}</h3><p>${c[1]}</p>${c[2]?`<p class="mt-1">${c[2]}</p>`:''}</div></div></div>`).join('');
const bars=(rows)=>{const mx=Math.max(...rows.map(r=>r[1]),1);return rows.map(r=>`<div class="bar-row"><span>${r[0]}</span><div class="t"><i style="width:${r[1]/mx*100}%"></i></div><b>${r[1]}</b></div>`).join('')};
const opts=a=>'<option value="">Pilih...</option>'+a.map(x=>`<option>${x}</option>`).join('');
const formHTML=()=>`<div class="row g-3">
<div class="col-12"><label class="form-label">Nama Lengkap</label><input name="nama" class="form-control" required minlength="3"><div class="invalid-feedback">Nama lengkap wajib diisi (min. 3 karakter).</div></div>
<div class="col-md-6"><label class="form-label">NIM/NIP</label><input name="nim" class="form-control" required pattern="[0-9A-Za-z]{5,20}"><div class="invalid-feedback nim-fb">NIM/NIP wajib diisi (5–20 huruf/angka).</div></div>
<div class="col-md-6"><label class="form-label">Jenis Keanggotaan</label><select name="jenis" class="form-select" required>${opts(JENIS)}</select><div class="invalid-feedback">Pilih jenis keanggotaan.</div></div>
<div class="col-12"><label class="form-label">Program Studi</label><select name="prodi" class="form-select" required>${opts(PRODI)}</select><div class="invalid-feedback">Pilih program studi.</div></div>
<div class="col-md-6"><label class="form-label">Nomor Telepon</label><input name="telp" class="form-control" required pattern="[0-9+]{9,15}"><div class="invalid-feedback">Nomor telepon 9–15 digit.</div></div>
<div class="col-md-6"><label class="form-label">Email</label><input name="email" type="email" class="form-control" required><div class="invalid-feedback">Format email tidak valid.</div></div>
<div class="col-12"><label class="form-label">Alamat</label><textarea name="alamat" rows="2" class="form-control" required></textarea><div class="invalid-feedback">Alamat wajib diisi.</div></div></div>`;
function validate(f,ign){const nim=f.elements.nim;const dup=db.get().some(m=>m.nim.toLowerCase()===nim.value.trim().toLowerCase()&&m.id!==ign);
nim.setCustomValidity(dup?'dup':'');f.querySelector('.nim-fb').textContent=dup?'NIM/NIP sudah terdaftar.':'NIM/NIP wajib diisi (5–20 huruf/angka).';
f.classList.add('was-validated');if(!f.checkValidity())return null;return Object.fromEntries([...new FormData(f)].map(([k,v])=>[k,v.trim()]))}
const fillForm=(f,m)=>{for(const k in m)if(f.elements[k])f.elements[k].value=m[k]};

const P={};
P.beranda=()=>{
$('.hero-img').style.backgroundImage=`linear-gradient(rgba(30,27,75,.25),rgba(30,27,75,.25)),url(${IMG.hero})`;
$('#koleksi').innerHTML=cards([['Laut Bercerita','Leila S. Chudori','Fiksi · Novel'],['Filosofi Teras','Henry Manampiring','Nonfiksi · Pengembangan diri'],['Laskar Pelangi','Andrea Hirata','Fiksi · Sastra Indonesia']],IMG.koleksi);
$('#keunggulan').innerHTML=cards([['Ruang baca nyaman','Tempat duduk tenang, cahaya alami, dan suasana yang mendukung fokus.'],['Koleksi digital','Akses buku elektronik, artikel, dan sumber pengetahuan melalui perangkat pribadi.'],['Komunitas literasi','Diskusi buku, kelas literasi, dan kegiatan komunitas untuk semua usia.']],IMG.keunggulan);
const m=db.get();$('#totalAnggota').textContent=m.length;
$('#barsYear').innerHTML=bars([['2021',1200],['2022',1900],['2023',2600],['2024',3100],['2025',3500]]);
$('#barsType').innerHTML=bars(JENIS.map(j=>[j,m.filter(x=>x.jenis===j).length]))};
P.tentang=()=>{$('#karya').innerHTML=cards([['Jurnal Teknologi Informasi','Vol. 12 · Terbitan kampus','Open access'],['Prosiding Seminar Nasional','Kumpulan makalah ilmiah 2025','Karya dosen'],['Skripsi Terbaik','Karya tugas akhir mahasiswa','Repositori institusi']],IMG.karya)};
P.layanan=()=>{$('#layanan').innerHTML=cards([['Meminjam Buku & E-Book','Pinjam hingga 5 buku selama 14 hari, perpanjang secara online.'],['Akses Jurnal Online','Jurnal nasional dan internasional dari jaringan kampus.'],['Booking Tempat Belajar','Reservasi meja, kursi, dan ruang diskusi dengan mudah.'],['Jam Operasional','Senin–Jumat 08.00–18.00 · Sabtu–Minggu 09.00–16.00.'],['Program Kegiatan','Bedah buku, kelas literasi informasi, dan workshop referensi.'],['Ruangan & Fasilitas','Ruang baca, diskusi, multimedia, komputer, Wi-Fi, dan loker.']],IMG.layanan)};
P.pendaftaran=()=>{const f=$('#regForm');$('#fields').innerHTML=formHTML();
f.addEventListener('submit',e=>{e.preventDefault();const d=validate(f);if(!d)return toast('Periksa kembali isian formulir.','danger');
const m=db.get();m.push({id:'m'+Date.now(),...d});db.set(m);f.reset();f.classList.remove('was-validated');toast('Pendaftaran berhasil! Kartu anggota Anda akan segera diproses.')});
$('#btnReset').addEventListener('click',()=>{f.reset();f.classList.remove('was-validated')})};
P.login=()=>{if(user())return location.href='data-anggota.html';const f=$('#loginForm');
f.addEventListener('submit',e=>{e.preventDefault();f.classList.add('was-validated');if(!f.checkValidity())return;
const s=JSON.parse(localStorage.getItem(K.s)).find(x=>x.email===f.email.value.trim()&&x.nama.toLowerCase()===f.nama.value.trim().toLowerCase()&&x.password===f.password.value);
if(!s)return $('#loginErr').classList.remove('d-none');localStorage.setItem(K.u,JSON.stringify({email:s.email,nama:s.nama}));location.href='data-anggota.html'})};
P['data-anggota']=()=>{if(!user()){$('main').innerHTML=`<div class="form-card text-center py-5 mx-auto" style="max-width:560px"><div style="font-size:3rem">🔒</div><h1 class="h4 fw-bold mt-2">Akses Dibatasi</h1><p class="text-secondary">Data ini hanya bisa diakses oleh petugas. Mohon untuk login terlebih dahulu.</p><a class="btn btn-dark" href="login.html">Login Petugas</a></div>`;return}
const f=$('#mForm'),body=$('#tbody'),q=$('#q'),fl=$('#f');let editId=null,delId=null;$('#mFields').innerHTML=formHTML();$('#who').textContent=user().nama;
const modal=id=>bootstrap.Modal.getOrCreateInstance($(id));
const draw=()=>{const t=q.value.toLowerCase().trim(),j=fl.value;const r=db.get().filter(m=>(!j||m.jenis===j)&&(m.nama.toLowerCase().includes(t)||m.nim.toLowerCase().includes(t)));
body.innerHTML=r.length?r.map((m,i)=>`<tr><td>${i+1}</td><td>${esc(m.nama)}</td><td>${esc(m.nim)}</td><td>${esc(m.prodi)}</td><td><span class="badge text-bg-light border">${esc(m.jenis)}</span></td><td class="text-end text-nowrap"><button class="btn btn-sm btn-outline-dark" data-a="v" data-id="${m.id}">Detail</button> <button class="btn btn-sm btn-outline-dark" data-a="e" data-id="${m.id}">Edit</button> <button class="btn btn-sm btn-outline-danger" data-a="d" data-id="${m.id}">Hapus</button></td></tr>`).join(''):'<tr><td colspan="6" class="text-center text-secondary py-4">Data anggota tidak ditemukan.</td></tr>';
$('#count').textContent=r.length+' anggota'};
q.oninput=fl.onchange=draw;
$('#btnAdd').onclick=()=>{editId=null;f.reset();f.classList.remove('was-validated');$('#mTitle').textContent='Tambah Anggota';modal('#mModal').show()};
body.onclick=e=>{const b=e.target.closest('[data-a]');if(!b)return;const m=db.get().find(x=>x.id===b.dataset.id);
if(b.dataset.a==='v'){$('#dBody').innerHTML=[['Nama',m.nama],['NIM/NIP',m.nim],['Program Studi',m.prodi],['Jenis',m.jenis],['Telepon',m.telp],['Email',m.email],['Alamat',m.alamat]].map(r=>`<div class="row py-1 border-bottom"><div class="col-4 text-secondary">${r[0]}</div><div class="col-8">${esc(r[1])}</div></div>`).join('');modal('#dModal').show()}
if(b.dataset.a==='e'){editId=m.id;f.classList.remove('was-validated');fillForm(f,m);$('#mTitle').textContent='Edit Anggota';modal('#mModal').show()}
if(b.dataset.a==='d'){delId=m.id;$('#delName').textContent=m.nama;modal('#xModal').show()}};
f.onsubmit=e=>{e.preventDefault();const d=validate(f,editId);if(!d)return toast('Periksa kembali isian formulir.','danger');
const a=db.get();if(editId){a[a.findIndex(x=>x.id===editId)]={id:editId,...d};toast('Data anggota berhasil diperbarui.')}else{a.push({id:'m'+Date.now(),...d});toast('Anggota baru berhasil ditambahkan.')}
db.set(a);modal('#mModal').hide();draw()};
$('#btnDel').onclick=()=>{db.set(db.get().filter(x=>x.id!==delId));modal('#xModal').hide();toast('Data anggota berhasil dihapus.');draw()};
draw()};
P[page]&&P[page]();
