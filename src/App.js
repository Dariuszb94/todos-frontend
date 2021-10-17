import "./App.css";
import TodoList from "./components/todoList";
import { Route, Switch } from "react-router-dom";
import EditTodo from "./components/edit/edit";
import PropTypes from "prop-types";
import { Container } from "./appStyle.js";
import Header from "./components/header/header";

function App({ location }) {
  return (
    <Container>
      <Header />
      <Switch location={location}>
        <Route exact path="/home" component={TodoList} />
        <Route path="/edit/:id" component={EditTodo} />
        <Route component={TodoList} />
      </Switch>
    </Container>
  );
}
App.propTypes = {
  location: PropTypes.object,
};
export default App;
