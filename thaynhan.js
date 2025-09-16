const correctUsername = "@##Long##@Viet@##Duy@###Nhan";
const correctPassword = "thaynhan1m6";

function checkLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if (username === correctUsername && password === correctPassword) {
    window.location.href = "tc.html";
  } else {
    alert("Bạn nhập sai! Admin đang quan sát bạn 👀");
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I")) {
    e.preventDefault();
  }
});

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});