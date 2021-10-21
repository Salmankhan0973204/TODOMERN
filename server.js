const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = 8000;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

const DB =
  "mongodb+srv://saloobhai:saloobhai@cluster0.uaadm.mongodb.net/saloobhai?retryWrites=true&w=majority";
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDBconnected");
  })
  .catch(() => {
    console.log("Mongo Connection Failed");
  });

const LoginController = require("./backend/Controllers/LoginController");
const ToDoController = require("./backend/Controllers/ToDoController");

//  Login API
app.post("/Register", LoginController.Register);
app.post("/Login", LoginController.Login);

//ToDo API
app.post("/ToDo", ToDoController.ToDoList);
app.get("/GetToDo", ToDoController.GetToDo);

app.listen(port, () => {
  console.log(`App listen port ${port}`);
});
