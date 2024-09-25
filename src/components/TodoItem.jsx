import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Button, Select, MenuItem } from "@mui/material";

const TodoItem = ({ todo, deleteTodo, updateTodoStatus }) => {
    const handleChange = (e) => {
        updateTodoStatus(todo.id, e.target.value);
    };

    return (
        <div>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
            <Select value={todo.status} onChange={handleChange}>
                <MenuItem value="pending">Pending</MenuItem>
                <MenuItem value="completed">Completed</MenuItem>
                <MenuItem value="not-completed">Not Completed</MenuItem>
            </Select>
            <Button onClick={() => deleteTodo(todo.id)} color="error">Delete</Button>
            <Link to={`/todo/${todo.id}`}>
                <Button>Edit</Button>
            </Link>
        </div>
    );
};

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    updateTodoStatus: PropTypes.func.isRequired,
};

export default TodoItem;
