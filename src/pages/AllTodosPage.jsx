import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/TodoItemPage.module.css";

const AllTodosPage = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
        setTodos(savedTodos);
    }, []);

    return (
        <div className={styles.allTodosPage}>
            <h1>All ToDo Items</h1>
            {todos.map((todo) => (
                <div key={todo.id}>
                    <h3>{todo.title}</h3>
                    <Link to={`/todo/${todo.id}`}>
                        <button>View Details</button>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default AllTodosPage;
