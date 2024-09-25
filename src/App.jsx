import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TodoListPage from "./pages/TodoListPage";
import TodoItemPage from "./pages/TodoItemPage";
import AllTodosPage from "./pages/AllTodosPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<TodoListPage />} />
                <Route path="/todo/:id" element={<TodoItemPage />} />
                <Route path="/all-todos" element={<AllTodosPage />} />
            </Routes>
        </Router>
    );
}

export default App;



