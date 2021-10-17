import "./App.css";
import TodoList from "./components/todoList";
import { Route, Switch } from "react-router-dom";
import EditTodo from "./components/edit/edit";
import PropTypes from "prop-types";

function App({ location }) {
  return (
    <div className="App">
      <Switch location={location}>
        <Route exact path="/home" component={TodoList} />
        <Route path="/edit/:id" component={EditTodo} />
        <Route component={TodoList} />
      </Switch>
    </div>
  );
}
App.propTypes = {
  location: PropTypes.object,
};
export default App;
