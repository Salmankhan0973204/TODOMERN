const ToDo = require("../Modules/Todo");

exports.ToDoList = (req, res) => {
  var reqBody = req.body;
  console.log(reqBody);
  const NewToDo = new ToDo({
    todo: reqBody.todo,
  });
  NewToDo.save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "ToDo item added successfully!",
        data: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: error,
      });
    });
};

exports.GetToDo = (req, res) => {
  ToDo.find({})
    .then((data) => {
      res.status(201).json({
        message: "Get Data",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: error,
      });
    });
};

exports.ToDoDelete=(req, res) => {
  var Data = req.body;
  console.log(Data)
   ToDo.findByIdAndRemove(Data._id).then((data) => {
     res.status(200).json({ message: "Value Deleted" });
    
   });
  
}

exports.edititem = (req, res) => {
  var Data = req.body;
  ToDo.findOne({_id: Data._id }).then(ress => {
    res.status(200).json({ message: "item edit", data: ress })
  })
}
