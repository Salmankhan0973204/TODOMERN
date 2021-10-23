import React, { useState, useEffect } from "react";
import ToDoListItem from "./ToDoItem";

import { Button } from "react-bootstrap";
import axios from "axios";
import "../ToDo/ToDo.css";

function ToDoList() {
  const [inputlist, setInputlist] = useState({
    todo: "",
  });
  const [items, setItems] = useState([]);
  console.log(items);

  const itemEvent = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputlist({ [name]: value });
  };

  const deleteItem = async (index) => {
    console.log(index);
    await axios.post("http://localhost:8000/ToDoDelete", { _id: index }).then(
      (res) => {
        GetData();
      },
      (error) => {
        console.log("Failed");
      }
    );
  };
  const listItem = async () => {
    await axios.post("http://localhost:8000/ToDo", inputlist).then(
      (res) => console.log("sdafds"),
      (error) => {
        console.log("Failed");
      }
    );
    GetData();
  };

  const GetData = () => {
    axios.get("http://localhost:8000/GetToDo").then((res) => {
      const Data = res.data.data;
      setItems(Data);
    });
  };
  const editItem = (index) => {
    let newEdit = items.find((item) => {
      return item._id === index
      
    })
    console.log(newEdit)
    setInputlist(newEdit)

   
  }
      
       
       
   
 

  return (
    <div className="main_div">
      <div className="centre_div">
        <br />
        <h1>ToDo List</h1>
        <br />
        <input
          type="text"
          placeholder="Enter your work"
          onChange={itemEvent}
          value={inputlist.todo}
          name="todo"
        />
        <Button onClick={listItem} variant="primary" size="sm">
          +
        </Button>
        {items ? (
          <>
            {items.map((item, index) => {
              return (
                <ol>
                  <ToDoListItem
                    key={index}
                    id={item._id}
                    item={item.todo}
                    deleteItem={deleteItem}
                    editItem={editItem}
                  />
                </ol>
              );
            })}
          </>
        ) : (
          <h1>Loading</h1>
        )}
      </div>
    </div>
  );
}

export default ToDoList;
