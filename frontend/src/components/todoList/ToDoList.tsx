import { useState } from "react";
import ToDoItem from "../todoItem/ToDoItem";
import TodoAddTask from "../todoAddTask/ToDoAddTask";

export default function ToDoList() {
    const [todos, setTodos] = useState([
        {
            id: 1,
            label: "CODE!",
            completed: false
        },
        {
            id: 2,
            label: "CODE!",
            completed: false
        },
        {
            id: 3,
            label: "CODE!",
            completed: false
        }
    ])

    const handleUpdateTodo = (updatedTodo) => {
        const newTodoList = todos.map((todo) => {
            return (todo.id === updatedTodo.id) ? updatedTodo : todo
        })
        setTodos(newTodoList)
    }

    const handleDeleteTodo = (id) => {
        const newTodos = todos.filter((todo) => todo.id !== id)
        setTodos(newTodos)
    }

    const handleAddTodo = (newTodo) => {
        const newTodos = [...todos, newTodo]
        setTodos(newTodos)
    }

    return (
        <ul>
            <TodoAddTask todos={todos} handleAddTodo={handleAddTodo} />
            {
                todos.map((todo) => {
                    return (
                        <ToDoItem
                            key={todo.id}
                            todo={todo}
                            handleUpdateTodo={handleUpdateTodo}
                            handleDeleteTodo={handleDeleteTodo}
                        />
                    )
                })}
        </ul>
    )
}

