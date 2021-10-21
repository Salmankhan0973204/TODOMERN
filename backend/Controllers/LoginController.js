const Login = require("../Modules/Login");

//Registration
exports.Register = (req, res) => {
  var reqBody = req.body;
  const NewUser = new Login({
    email: reqBody.email,
    name: reqBody.name,
    password: reqBody.password,
    number: reqBody.number,
  });
  NewUser.save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "User added successfully!",
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: error,
      });
    });
};

//Login

exports.Login = (req, res) => {
  var userdata = req.body;
  Login.findOne({ email: userdata.email })
    .then((data) => {
      if (data) {
        if (data.password == userdata.password) {
          res.status(200).json({ message: "Login Successful!", data: data });
        } else {
          res.status(401).json({ message: "Incorrect Password", data: {} });
        }
      }
    })
    .catch((err) =>
      res.status(401).json({ message: "User not found", data: {} })
    );
};
