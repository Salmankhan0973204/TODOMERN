import React, { useState } from "react";
import ToDoListItem from "./ToDoItem";

import { Button } from "react-bootstrap";
import axios from "axios";
import "../ToDo/ToDo.css";

function ToDoList() {
  const [inputlist, setInputlist] = useState({
    todo: "",
  });
  const [items, setItems] = useState([]);

  const itemEvent = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputlist({ [name]: value });
  };

  const listItem = () => {
    axios.post("http://localhost:8000/ToDo", inputlist).then(
      (res) => console.log(),
      (error) => {
        console.log("Failed");
      }
    );

    axios.get("http://localhost:8000/GetToDo").then(
      (res) => {
        const Data = res.data.data;
            setItems(Data);
            console.log(items)
      },
      (error) => {
        console.log("Failed");
      }
    );

    

    setInputlist("");
  };

  const deleteItem = (id) => {
    setItems((olddata) => {
      return olddata.filter((arr, index) => {
        return index !== id;
      });
    });
  };
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
              
        
         {Object.keys(items).map((item, index) => {
           return (
             <ol> 
            <ToDoListItem
                key={index}
                id={index}
                item={item}
              deleteItem={deleteItem}
                    
               />
               </ol>
       
            );
          })}
         
      
      </div>
    </div>
  );
}

export default ToDoList;
