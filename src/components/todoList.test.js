import { screen, render } from "@testing-library/react";
import TodoList, { todoUrl } from "./todoList";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { HashRouter as BrowserRouter } from "react-router-dom";

const todoResponse = rest.get(todoUrl, (req, res, ctx) => {
  return res(
    ctx.json([
      {
        name: "clean room",
        completed: true,
        id: "a6b0d7c1-8717-4d83-8cfb-c08c875caba2",
      },
    ])
  );
});
const todoErrorResponse = rest.get(todoUrl, (req, res, ctx) => {
  return res(ctx.status(500));
});
const handlers = [todoResponse];
const server = new setupServer(...handlers);
beforeAll(() => {
  server.listen();
});

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

test("Get Todos", async () => {
  render(
    <BrowserRouter>
      <TodoList />
    </BrowserRouter>
  );
  const todoItem = await screen.findByText("clean room");
  expect(todoItem).toBeVisible();
});
test("Error then get todos ", async () => {
  server.use(todoErrorResponse);
  render(<TodoList />);
  const todoItem = await screen.findByText("Error");
  expect(todoItem).toBeVisible();
});
