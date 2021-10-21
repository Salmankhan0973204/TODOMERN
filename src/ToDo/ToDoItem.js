import React from "react";
import { Button } from "react-bootstrap";

function ToDoListItem(props) {
  return (
    <>
      <div classNmae="container">
        <div class="row" style={{ marginTop: "20px" }}>
          <div className="col">
            <li>{props.item}</li>
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
        </div>
      </div>
    </>
  );
}

export default ToDoListItem;
