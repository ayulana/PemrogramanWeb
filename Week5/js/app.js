(function () {
    "use strict";

    var STORAGE_KEY = "student-management:students";
    var PAGE_SIZE = 5;

    var students = load();
    var keyword = "";
    var page = 1;

    var form = document.getElementById("student-form");
    var fId = document.getElementById("student-id");
    var fNim = document.getElementById("nim");
    var fNama = document.getElementById("nama");
    var fJurusan = document.getElementById("jurusan");
    var fEmail = document.getElementById("email");
    var formTitle = document.getElementById("form-title");
    var formError = document.getElementById("form-error");
    var btnSave = document.getElementById("btn-save");
    var btnReset = document.getElementById("btn-reset");
    var searchInput = document.getElementById("search");
    var btnSearch = document.getElementById("btn-search");
    var tbody = document.getElementById("student-body");
    var pagination = document.getElementById("pagination");
    var toastEl = document.getElementById("toast");

    function load() {
        try {
            var raw = localStorage.getItem(STORAGE_KEY);
            if (raw) return JSON.parse(raw);
        } catch (e) {}
        return [
            { id: uid(), nim: "231001", nama: "Andi Pratama", jurusan: "Teknik Informatika", email: "andi@mail.com" },
            { id: uid(), nim: "231002", nama: "Siti Rahma", jurusan: "Sistem Informasi", email: "siti@mail.com" },
            { id: uid(), nim: "231003", nama: "Budi Santoso", jurusan: "Teknik Komputer", email: "budi@mail.com" }
        ];
    }

    function save() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(students));
        } catch (e) {
            toast("Gagal menyimpan data ke browser");
        }
    }

    function uid() {
        return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
    }

    function escapeHtml(str) {
        return String(str).replace(/[&<>"']/g, function (c) {
            return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
        });
    }

    function toast(msg) {
        toastEl.textContent = msg;
        toastEl.classList.add("show");
        clearTimeout(toast.t);
        toast.t = setTimeout(function () { toastEl.classList.remove("show"); }, 2200);
    }

    function filtered() {
        var k = keyword.trim().toLowerCase();
        if (!k) return students;
        return students.filter(function (s) {
            return [s.nim, s.nama, s.email, s.jurusan].some(function (v) {
                return v.toLowerCase().indexOf(k) !== -1;
            });
        });
    }

    function render() {
        var data = filtered();
        var totalPages = Math.max(1, Math.ceil(data.length / PAGE_SIZE));
        if (page > totalPages) page = totalPages;

        var start = (page - 1) * PAGE_SIZE;
        var rows = data.slice(start, start + PAGE_SIZE);

        if (!rows.length) {
            tbody.innerHTML = '<tr><td colspan="6" class="empty">Belum ada data mahasiswa.</td></tr>';
        } else {
            tbody.innerHTML = rows.map(function (s, i) {
                return '<tr>' +
                    '<td>' + (start + i + 1) + '</td>' +
                    '<td>' + escapeHtml(s.nim) + '</td>' +
                    '<td>' + escapeHtml(s.nama) + '</td>' +
                    '<td>' + escapeHtml(s.jurusan) + '</td>' +
                    '<td>' + escapeHtml(s.email) + '</td>' +
                    '<td><div class="actions">' +
                        '<button class="action edit" data-act="edit" data-id="' + s.id + '" aria-label="Edit">&#9998;</button>' +
                        '<button class="action delete" data-act="delete" data-id="' + s.id + '" aria-label="Hapus">&#128465;</button>' +
                    '</div></td>' +
                '</tr>';
            }).join("");
        }
        renderPagination(totalPages);
    }

    function renderPagination(totalPages) {
        var html = '<button data-page="' + (page - 1) + '"' + (page === 1 ? " disabled" : "") + '>&laquo;</button>';
        for (var p = 1; p <= totalPages; p++) {
            html += '<button data-page="' + p + '"' + (p === page ? ' class="active"' : "") + '>' + p + '</button>';
        }
        html += '<button data-page="' + (page + 1) + '"' + (page === totalPages ? " disabled" : "") + '>&raquo;</button>';
        pagination.innerHTML = html;
    }

    function resetForm() {
        form.reset();
        fId.value = "";
        formError.textContent = "";
        formTitle.textContent = "Form Student";
        btnSave.textContent = "Simpan";
    }

    function validate(data) {
        if (!data.nim || !data.nama || !data.email || !data.jurusan) {
            return "Semua kolom wajib diisi.";
        }
        if (!/^\S+@\S+\.\S+$/.test(data.email)) {
            return "Format email tidak valid.";
        }
        var dup = students.some(function (s) {
            return s.nim === data.nim && s.id !== fId.value;
        });
        if (dup) return "NIM sudah terdaftar.";
        return "";
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        var data = {
            nim: fNim.value.trim(),
            nama: fNama.value.trim(),
            jurusan: fJurusan.value.trim(),
            email: fEmail.value
        };
        var err = validate(data);
        if (err) { formError.textContent = err; return; }

        if (fId.value) {
            students = students.map(function (s) {
                return s.id === fId.value ? Object.assign({ id: s.id }, data) : s;
            });
            toast("Data mahasiswa diperbarui");
        } else {
            students.push(Object.assign({ id: uid() }, data));
            toast("Data mahasiswa ditambahkan");
            page = Math.ceil(filtered().length / PAGE_SIZE);
        }
        save();
        resetForm();
        render();
    });

    btnReset.addEventListener("click", resetForm);

    tbody.addEventListener("click", function (e) {
        var btn = e.target.closest("button[data-act]");
        if (!btn) return;
        var id = btn.getAttribute("data-id");
        var student = students.filter(function (s) { return s.id === id; })[0];
        if (!student) return;

        if (btn.getAttribute("data-act") === "edit") {
            fId.value = student.id;
            fNim.value = student.nim;
            fNama.value = student.nama;
            fJurusan.value = student.jurusan;
            fEmail.value = student.email;
            formError.textContent = "";
            formTitle.textContent = "Edit Student";
            btnSave.textContent = "Update";
            document.getElementById("form-student").scrollIntoView({ behavior: "smooth" });
            fNim.focus();
        } else if (confirm('Hapus data "' + student.nama + '"?')) {
            students = students.filter(function (s) { return s.id !== id; });
            save();
            if (fId.value === id) resetForm();
            render();
            toast("Data mahasiswa dihapus");
        }
    });

    function doSearch() {
        keyword = searchInput.value;
        page = 1;
        render();
    }
    searchInput.addEventListener("input", doSearch);
    btnSearch.addEventListener("click", doSearch);

    pagination.addEventListener("click", function (e) {
        var btn = e.target.closest("button[data-page]");
        if (!btn || btn.disabled) return;
        page = parseInt(btn.getAttribute("data-page"), 10);
        render();
    });

    render();
})();
