import React, { useEffect, useState } from 'react'
import './ToDoItem.css'
import { Avatar, Card, Checkbox, FormControlLabel, FormGroup, IconButton, Typography } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import { blueGrey, red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const ToDoItem: React.FC = () => {
    const [completed, setCompleted] = useState(false);
    const handleCheckboxChange = () => {
        setCompleted(!completed)
    }

    return (
        <>

            <div className="toDoItem">
                <Card raised >

                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: blueGrey[500] }} aria-label="To Do Item">

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
                                <input type="checkbox" id="checkbox" checked={completed} onChange={handleCheckboxChange} />
                                {completed === false ? <span> CODE!</span> : <span><Typography sx={{
                                    textDecoration: 'line-through'
                                }}> CODE!</Typography></span>}
                            </div>
                        </label>
                    </FormGroup>

                </Card>



            </div>
        </>
    );
}

export default ToDoItem;