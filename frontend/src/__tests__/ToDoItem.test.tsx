import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"
import ToDoItem from "../components/todoItem/ToDoItem";

describe("ToDo Item", () => {
    it("renders ToDo Item component", () => {
        render(<ToDoItem />)

        const todoText = screen.getByText('Test Todo')
        expect(todoText).toBeVisible();
    })
})