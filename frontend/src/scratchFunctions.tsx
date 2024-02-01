// //add to an array
// const addToDo = (todo) => {
//     const newTodoList = [...todos, todo]
//     setTodos(newTodoList)
// }

// //remove an element from an array
// const handleRemoveTodo = (id) => {
//     const newToDoList = todos.filter((todo) => { todo.id !== id })
//     setTodos(newToDoList)
// }

// //update an element in an array
// const handleCheckboxChange = (updatedToDoItem) => {
//     const newToDoList = todos.map((todo) => {
//         return todo.id === updatedToDoItem.id ? updatedToDoItem : todo
//     })
//     setTodos(newToDoList)
// }

// const handleUpdateLabel = (e) => {
//     //this makes a copy and then sets the label property on that copy to the new value
//     //this is necessary because whenever you update state
//     //the value you pass REPLACES the current state - partial updates don't merge with previous state!
//     setTodos({
//         ...todos,
//         label: e.target.value
//     })