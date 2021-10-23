import React from "react";
import { Button } from "react-bootstrap";

function ToDoListItem(props) {
  return (
    <>
      <div className="container">
        <div class="row">
        <li>  <div className="col">
            {props.item}
          </div>
          <div className="col">
            <Button
              variant="danger"
              size="sm"
              onClick={() => {
              props.deleteItem(props.id);
              }}
            >
              Delete
            </Button>
          </div>
       </li> </div>
      </div>
    </>
  );
}

export default ToDoListItem;
