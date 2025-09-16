const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`
    <form method="POST" action="/login">
      <input name="username" placeholder="Username"><br>
      <input name="password" type="password" placeholder="Password"><br>
      <button type="submit">Login</button>
    </form>
  `);
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "AnhLong" && password === "1m6") {
    res.redirect("/tc.html"); 
  } else {
    res.send("Sai mật khẩu!");
  }
});

app.listen(3000, () => console.log("Server chạy tại http://localhost:3000"));
