import { useEffect, useState } from 'react'



export default function ToDoItem({ text, completed, important }) {
    const [textState, setTextState] = useState(text);
    const [importantState, setImportantState] = useState(important);

    useEffect(() => {
        setTextState(`${text} ${new Date().toLocaleDateString()}`)
        setImportantState(importantState)
    }, [importantState])



    return (
        <>
            <div>
                <h1>Hiya from ToDoItem!</h1>
                <div className={completed ? "completed" : ""} onClick={() => {

                    setTextState("You clicked?")
                    setImportantState(!importantState)
                }}>{importantState ? "*" : ""}{textState}</div>
            </div>
        </>
    );
}