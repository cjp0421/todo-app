import React, { useEffect, useState } from 'react'
import './ToDoItem.css'
import { Avatar, Card, Checkbox, FormControlLabel, FormGroup, IconButton } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import { blueGrey, red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface ToDoItemProps {
    id: number;
    text: string;
    completed: boolean;
    important: boolean;
    onToggle: () => void;
}

const ToDoItem: React.FC<ToDoItemProps> = ({ id, text, completed, important, onToggle }) => {


    return (
        <>

            <div className="toDoItem">
                <Card raised >

                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: blueGrey[500] }} aria-label="To Do Item">
                                {id}
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
                    {text}

                    <FormGroup>
                        <div>
                            {completed ? <FormControlLabel control={<Checkbox defaultChecked role="checkbox" />} label="Completed?" /> : <FormControlLabel control={<Checkbox role="checkbox" />} label="Completed?" />}
                            {important ? <FormControlLabel control={<Checkbox defaultChecked role="checkbox" />} label="Important?" /> : <FormControlLabel control={<Checkbox role="checkbox" />} label="Important?" />}
                        </div>
                    </FormGroup>

                </Card>



            </div>
        </>
    );
}

export default ToDoItem;