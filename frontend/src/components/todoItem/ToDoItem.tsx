import React, { useState } from 'react'
import './ToDoItem.css'
import { Avatar, Button, ButtonGroup, Card, FormGroup, IconButton, Typography } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import { blueGrey } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';

type ToDoProps = {
    todo: {
        id: number,
        label: string,
        completed: boolean
    },
    handleUpdateTodo: (e) => void,
    handleDeleteTodo: (id) => void
}

const ToDoItem: React.FC<ToDoProps> = ({ todo, handleUpdateTodo, handleDeleteTodo }) => {
    const [editing, setEditing] = useState(false);

    const handleEditClick = () => {
        setEditing(!editing)
    }

    const handleCheckboxChange = () => {
        handleUpdateTodo({
            ...todo,
            completed: !todo.completed
        })
    }

    const handleDeleteClick = () => {
        handleDeleteTodo(todo.id)
    }

    const handleUpdateLabel = (e) => {
        //this makes a copy and then sets the label property on that copy to the new value
        //this is necessary because whenever you update state
        //the value you pass REPLACES the current state - partial updates don't merge with previous state!
        handleUpdateTodo({
            ...todo,
            label: e.target.value
        })
    }

    return (
        <div className="toDoItem">
            <Card raised >
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: blueGrey[500] }} aria-label="To Do Item">
                            {todo.id}
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="To Do Item"
                    subheader="September 14, 2016"
                />
                <FormGroup>
                    <label htmlFor='checkbox'>
                        <div>

                            <input type="checkbox" id="checkbox" checked={todo.completed} onChange={handleCheckboxChange} />

                            {editing ? (<input type="text" value={todo.label} onChange={handleUpdateLabel} />) : (
                                todo.completed === false ? <span>{todo.label}</span> : <span><Typography sx={{
                                    textDecoration: 'line-through'
                                }}>{todo.label}</Typography></span>)
                            }

                        </div>
                    </label>
                    <ButtonGroup sx={{
                        width: '100%'
                    }}>
                        <Button onClick={handleEditClick} sx={{
                            width: '100%',
                            color: 'green',
                            borderColor: 'green'
                        }}>{editing ? "Save" : "Edit"}</Button>
                        <Button onClick={handleDeleteClick} sx={{
                            width: '100%',
                            color: 'red',
                            borderColor: 'red'
                        }}>Delete</Button>
                    </ButtonGroup>
                </FormGroup>
            </Card>
        </div>
    );
}

export default ToDoItem;