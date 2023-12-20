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
