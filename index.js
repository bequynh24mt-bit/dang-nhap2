const correctUsername = "admin";
const correctPassword = "12345";

function checkLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if (username === correctUsername && password === correctPassword) {
  window.location.href = "tc.html"
} else {
    alert("Bạn nhập sai! Admin đang quan sát bạn 👀");
  }
}
