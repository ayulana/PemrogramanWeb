const baseURL = "https://www.emsifa.com/api-wilayah-indonesia/v2";

const provinsi = document.getElementById("provinsi");
const kabupaten = document.getElementById("kabupaten");
const kecamatan = document.getElementById("kecamatan");
const cari = document.getElementById("cari");
const hasil = document.getElementById("hasil");

async function ambilData(url) {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Data gagal diambil");
    }

    const json = await response.json();
    return json.data;
}

function isiPilihan(select, data, teks) {
    select.innerHTML = `<option value="">${teks}</option>`;

    data.forEach(item => {
        const option = document.createElement("option");
        option.value = item.id;
        option.textContent = item.name;
        select.appendChild(option);
    });

    select.disabled = false;
}

async function muatProvinsi() {
    try {
        const data = await ambilData(`${baseURL}/provinces.json`);
        isiPilihan(provinsi, data, "Pilih Provinsi");
    } catch (error) {
        hasil.textContent = "Gagal memuat provinsi. Coba muat ulang halaman.";
    }
}

provinsi.addEventListener("change", async function () {
    kabupaten.innerHTML =
        '<option value="">Pilih Kabupaten / Kota</option>';
    kecamatan.innerHTML =
        '<option value="">Pilih Kecamatan</option>';

    kabupaten.disabled = true;
    kecamatan.disabled = true;
    cari.disabled = true;
    hasil.innerHTML = "";

    if (!this.value) return;

    try {
        const data = await ambilData(
            `${baseURL}/regencies/${this.value}.json`
        );

        isiPilihan(kabupaten, data, "Pilih Kabupaten / Kota");
    } catch (error) {
        hasil.textContent = "Gagal memuat kabupaten/kota.";
    }
});

kabupaten.addEventListener("change", async function () {
    kecamatan.innerHTML =
        '<option value="">Pilih Kecamatan</option>';

    kecamatan.disabled = true;
    cari.disabled = true;
    hasil.innerHTML = "";

    if (!this.value) return;

    try {
        const data = await ambilData(
            `${baseURL}/districts/${this.value}.json`
        );

        isiPilihan(kecamatan, data, "Pilih Kecamatan");
    } catch (error) {
        hasil.textContent = "Gagal memuat kecamatan.";
    }
});

kecamatan.addEventListener("change", function () {
    cari.disabled = !this.value;
    hasil.innerHTML = "";
});

cari.addEventListener("click", async function () {
    hasil.textContent = "Sedang mencari data...";

    try {
        const data = await ambilData(
            `${baseURL}/villages/${kecamatan.value}.json`
        );

        hasil.innerHTML = "";

        if (data.length === 0) {
            hasil.textContent = "Data kelurahan tidak ditemukan.";
            return;
        }

        data.forEach(item => {
            const kotak = document.createElement("div");
            kotak.className = "item";

            const nama = document.createElement("strong");
            nama.textContent = item.name;

            const kode = document.createElement("div");
            kode.className = "kodepos";
            kode.textContent = item.postal_code || "Kode pos tidak tersedia";

            const info = document.createElement("div");
            info.textContent =
                `Provinsi: ${provinsi.selectedOptions[0].text} | ` +
                `Kabupaten/Kota: ${kabupaten.selectedOptions[0].text} | ` +
                `Kecamatan: ${kecamatan.selectedOptions[0].text}`;

            const koordinat = document.createElement("div");
            koordinat.textContent =
                item.lat != null && item.lng != null
                    ? `Koordinat: ${item.lat}, ${item.lng}`
                    : "Koordinat tidak tersedia";

            kotak.append(nama, kode, info, koordinat);
            hasil.appendChild(kotak);
        });
    } catch (error) {
        hasil.textContent = "Gagal mencari data. Silakan coba lagi.";
    }
});

muatProvinsi();