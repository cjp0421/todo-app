import React from "react";


export default function ToDoItem() {
    const text = "Wash clothes";
    const completed = false;
    return (
        <>
            <div>
                <h1>Hiya from ToDoItem!</h1>
                <div className={completed ? "completed" : ""}>{text}</div>
            </div>
        </>
    );
}