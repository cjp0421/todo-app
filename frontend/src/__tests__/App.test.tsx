import '@testing-library/jest-dom'
import { getByRole, render, screen } from "@testing-library/react"
import App from "../App"


describe('Practice tests', () => {
    test('demo', () => {
        expect(true).toBe(true)
    })

    test("Renders the main page", () => {
        render(<App />)
        expect(true).toBeTruthy()
    })

    test("Finds an h1", () => {
        render(<App />)
        const headerOne = screen.getByRole('header')
        expect(headerOne).toBeInTheDocument()
    })

})


