import React, { useState, useEffect } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import styles from "../styles/TodoListPage.module.css";

const TodoListPage = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
        setTodos(savedTodos);
    }, []);

    const addTodo = (newTodo) => {
        const updatedTodos = [...todos, newTodo];
        setTodos(updatedTodos);
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
    };

    const deleteTodo = (id) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
    };

    const updateTodoStatus = (id, status) => {
        const updatedTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, status } : todo
        );
        setTodos(updatedTodos);
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
    };

    return (
        <div className={styles.todoListPage}>
            <h1>My ToDo List</h1>
            <TodoForm addTodo={addTodo} />
            <TodoList
                todos={todos}
                deleteTodo={deleteTodo}
                updateTodoStatus={updateTodoStatus}
            />
        </div>
    );
};

export default TodoListPage;
