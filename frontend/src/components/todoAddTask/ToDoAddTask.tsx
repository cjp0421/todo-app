import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import FormGroup from "@mui/material/FormGroup";
import React, { ChangeEvent } from "react";
import { FC, useState } from "react";


interface TodoAddTaskProps {
    todos: [],
    handleAddTodo: ({ }) => void,
}

const TodoAddTask: React.FC<TodoAddTaskProps> = ({ todos, handleAddTodo }) => {
    const [label, setLabel] = useState("")
    const handleUpdateLabel = (e: ChangeEvent<HTMLInputElement>) => setLabel(e.target.value)

    //this function would typically be on the server
    function createTodo(label: string) {
        return {
            id: todos.length + 1,
            label,
            completed: false
        }
    }

    const handleAddTodoClick = () => {
        const todo = createTodo(label)
        handleAddTodo(todo)
        setLabel("")
    }


    return (
        <Card raised >
            <CardHeader style={{
                width: '100%',
                display: 'block',
                textAlign: 'center'
            }}
                title="Add To Do Item"
            />
            <FormGroup sx={{
                width: '100%'
            }}>
                <label >
                    <input style={{
                        width: '100%'
                    }}
                        type="text"
                        value={label}
                        onChange={handleUpdateLabel}
                    />
                </label>
                <ButtonGroup sx={{
                    width: '100%'
                }}>
                    <Button disabled={label.length === 0} onClick={handleAddTodoClick} sx={{
                        width: '100%'
                    }}>Add Task</Button>
                </ButtonGroup>
            </FormGroup>
        </Card>
    )
}

export default TodoAddTask;