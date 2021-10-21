import Header from "./Header";
import "./App.css";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ToDoList from "./ToDo/ToDoList";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Route exact path="/" component={Login} />
        <Route path="/ToDoList" component={ToDoList} />
        <Route path="/Register" component={Register} />
      </Router>
    </div>
  );
}

export default App;
