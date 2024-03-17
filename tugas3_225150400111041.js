const button = document.querySelector("#submit");

button.addEventListener("click", () => {
  const dataFormulir = new FormData(document.getElementById("formulir"));

  axios.post("tugas3_225150400111041.php", dataFormulir).then((response) => {
    if (validasiForm()) {
      alert("Harap mengisi seluruh formulir!");
      return;
    }
    document.getElementById("hasil").innerHTML = response.data;
  });
});

function validasiForm() {
  const nama = document.getElementById("nama").value;
  const nim = document.getElementById("nim").value;
  const jenisKelamin = document.querySelector('input[name="jenisKelamin"]:checked');
  const tanggalLahir = document.getElementById("tanggalLahir").value;
  const programStudi = document.getElementById("programStudi").value;

  if (
    nama == "" ||
    nim === "" ||
    !jenisKelamin ||
    tanggalLahir === "" ||
    programStudi === ""
  ) {
    return true;
  } else {
    return false;
  }
}