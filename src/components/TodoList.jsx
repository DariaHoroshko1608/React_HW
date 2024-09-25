import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, deleteTodo, updateTodoStatus }) => {
    return (
        <div>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    deleteTodo={deleteTodo}
                    updateTodoStatus={updateTodoStatus}
                />
            ))}
        </div>
    );
};

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    updateTodoStatus: PropTypes.func.isRequired,
};

export default TodoList;
