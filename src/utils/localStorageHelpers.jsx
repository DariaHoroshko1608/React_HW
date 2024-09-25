export const getTodosFromStorage = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
};

export const saveTodosToStorage = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos));
};
