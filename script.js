document.addEventListener("DOMContentLoaded", function() {
    console.log("Selamat datang di RuselGenius!");
  
    const form = document.getElementById("registrationForm");
    if (form) {
      form.addEventListener("submit", function(e) {
        e.preventDefault();
       
        let nama = document.getElementById("nama").value.trim();
        let email = document.getElementById("email").value.trim();
        let lomba = document.getElementById("lomba").value;
       
        let registrationDate = new Date();
        let registrationTime = registrationDate.toLocaleString();
        alert(`Terima kasih ${nama}!\nPendaftaran untuk ${lomba} berhasil pada ${registrationTime}.\nKonfirmasi telah dikirim ke email ${email}.\nKeterangan: Anda sudah mendaftar.`);
       
        form.reset();
        return true;
      });
    }
  });  