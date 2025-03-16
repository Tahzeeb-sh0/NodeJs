const express = require("express");
const mongoose = require("mongoose");
const fs = require("fs");
PORT = 7000;

const app = express();

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },

  lastname: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  ip: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);
mongoose
  .connect("mongodb://127.0.0.1:27017/users")
  .then(() => {
    console.log("Mongoose connected successfully");
  })
  .catch((err) => console.log(err));

app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log("hello from middleware");
  next();
});

app.get("/userdetail", async (req, res) => {
  const allusers = await User.find({});
  const html = `
    <ol>
    ${allusers.map((users) => `<li>${users.firstname}</li>`).join("\n")}
    </ol>
    `;
  res.send(html);
});
app.patch("/update", (req, res) => {
  return res.json({ status: "pending" });
});
app.delete("/delete", (req, res) => {
  return res.json({ status: "pending" });
});
app.post("/register", (req, res) => {
  const body = req.body;
  if (!body.email || !body.first_name || !body.last_name || !body.gender) {
    return res.status(400).json({ message: "bad request" });
  } else {
    users.push({ ...body, id: users.length + 1 });
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
      if (err) throw err;
      console.log("Data written to file");
      User.create({
        firstname: req.body.first_name,
        lastname: req.body.last_name,
        email: req.body.email,
        ip: req.ip,
      });
      console.log("entery inserted");
      res.status(201).json({ status: "success" });
    });
  }
});

app.listen(PORT, () => console.log(`App is listening on this port: ${PORT}`));
