import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Select, MenuItem } from "@mui/material";
import styles from "../styles/TodoItemPage.module.css";

const TodoItemPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [todo, setTodo] = useState(null);

    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem("todos")) || [];
        const currentTodo = todos.find((item) => item.id === id);
        if (currentTodo) {
            setTodo(currentTodo);
        }
    }, [id]);

    const handleDelete = () => {
        const todos = JSON.parse(localStorage.getItem("todos")) || [];
        const updatedTodos = todos.filter((item) => item.id !== id);
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
        navigate("/");
    };

    const handleStatusChange = (status) => {
        const todos = JSON.parse(localStorage.getItem("todos")) || [];
        const updatedTodos = todos.map((item) =>
            item.id === id ? { ...item, status } : item
        );
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
        setTodo({ ...todo, status });
    };

    const handleEdit = () => {
        // Редагування title та description
    };

    return (
        <div className={styles.todoItemPage}>
            {todo && (
                <div>
                    <h1>{todo.title}</h1>
                    <p>{todo.description}</p>
                    <Select
                        value={todo.status}
                        onChange={(e) => handleStatusChange(e.target.value)}
                    >
                        <MenuItem value="pending">Pending</MenuItem>
                        <MenuItem value="completed">Completed</MenuItem>
                        <MenuItem value="not-completed">Not Completed</MenuItem>
                    </Select>
                    <Button onClick={handleEdit}>Edit</Button>
                    <Button onClick={handleDelete} color="error">
                        Delete
                    </Button>
                </div>
            )}
        </div>
    );
};

export default TodoItemPage;
