import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Todo from "../Todo";

const MockTodo = () => {
    return (
        <BrowserRouter>
            <Todo/>
        </BrowserRouter>
    )
}
const addTasks = (tasks) => {
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const btnElement = screen.getByRole('button', {name: 'Dio Brando'});
    tasks.forEach(task => {
        
        fireEvent.change(inputElement, {target: {value: task}});
        fireEvent.click(btnElement);
    })
}

describe('TODO integration test', ()=>{
    // it("should render our component passed into another component", async () => {
    //     render(<MockTodo/>);
    //     const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    //     const btnElement = screen.getByRole('button', {name: 'Dio Brando'});
    //     fireEvent.change(inputElement, {target: {value: 'go grocery shop'}});
    //     fireEvent.click(btnElement);
    //     const divElement = screen.getByText(/go grocery shop/i);
    //     expect(divElement).toBeInTheDocument()
    //   });

      it("should render our component passed into another component but with multiple elements", async () => {
        render(<MockTodo/>);
        addTasks(["go grocery shop", "pet my cat", "wash my hands"])
        const divElements = screen.getAllByTestId(/task-container/i);
        expect(divElements.length).toBe(3)
      });

      it("should not have the class todo-item-active", async () => {
        render(<MockTodo/>);
        addTasks(["go grocery shop"])
        const divElement = screen.getByText(/go grocery shop/i);
        expect(divElement).not.toHaveClass('todo-item-active')
      });

      it("should have the class todo-item-active", async () => {
        render(<MockTodo/>);
        addTasks(["go grocery shop"])
        const divElement = screen.getByText(/go grocery shop/i);
        fireEvent.click(divElement)
        expect(divElement).toHaveClass('todo-item-active')
      });
})
