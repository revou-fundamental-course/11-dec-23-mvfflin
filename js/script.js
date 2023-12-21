function enableNavbar() {
  const button = document.getElementById("enable-navigation");
  if (button.checked) {
    alert("checked");
  } else {
    alert("not checked");
  }
}

function menuClick() {
  const checkbox = document.getElementById("enable-navigation");
  checkbox.checked = false;
}

function submitMessage() {
  const name = document.getElementById("name");
  const birth = document.getElementById("birth");
  const gender = document.querySelector("input[name='gender']:checked");
  const pesan = document.getElementById("pesan");

  if (!name.value || !birth.value || !gender.value || !pesan.value) {
    alert("Tolong isi semua field/kolom yang ada.");
  } else {
    const time = document.getElementById("current-date");
    const nameResult = document.getElementById("name-result");
    const birthResult = document.getElementById("gender-result");
    const pesanResult = document.getElementById("pesan-result");
    const now = new Date();

    time.innerHTML = `Current Date : ${new Intl.DateTimeFormat("id", {
      dateStyle: "full",
      timeStyle: "full",
    }).format(now)}`;
    nameResult.innerHTML = `Nama : ${name.value}`;
    birthResult.innerHTML = `Tanggal lahir : ${birth.value}`;
    pesanResult.innerHTML = `Pesan : ${pesan.value}`;
  }
}
