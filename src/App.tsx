import { Routes, Route } from "react-router-dom";
import { List } from "./pages/List";
import { Home } from "./pages/Home";
import { TodoProvider } from "./context/todo-context";

export function App() {
  return (
    <TodoProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </TodoProvider>
  );
}
