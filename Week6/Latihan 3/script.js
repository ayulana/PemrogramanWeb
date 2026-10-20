var email = document.getElementById("email");
var password = document.getElementById("password");

var polaEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function cekEmail() {
  var pesan = document.getElementById("errEmail");
  if (email.value === "") {
    pesan.textContent = "Email tidak boleh kosong";
    email.className = "salah";
    return false;
  }
  if (!polaEmail.test(email.value)) {
    pesan.textContent = "Format email tidak valid";
    email.className = "salah";
    return false;
  }
  pesan.textContent = "";
  email.className = "benar";
  return true;
}

function cekPassword() {
  var pesan = document.getElementById("errPassword");
  if (password.value.length < 6) {
    pesan.textContent = "Password minimal 6 karakter";
    password.className = "salah";
    return false;
  }
  pesan.textContent = "";
  password.className = "benar";
  return true;
}

email.onblur = cekEmail;
password.onblur = cekPassword;

document.getElementById("formLogin").onsubmit = function (e) {
  e.preventDefault();
  var emailOk = cekEmail();
  var passOk = cekPassword();
  if (emailOk && passOk) {
    document.getElementById("sukses").textContent = "Validasi berhasil, data valid!";
  } else {
    document.getElementById("sukses").textContent = "";
  }
};