import {render, screen, fireEvent} from '@testing-library/react';
import AddInput from '../AddInput';


describe("AddInput", ()=>{
    it('should render our component', ()=>{
        render(<AddInput 
            todos={[]}
            setTodos={jest.fn()}
            />);
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        expect(inputElement).toBeInTheDocument()
    });
    it('should be able to type into the component', ()=>{
        render(<AddInput 
            todos={[]}
            setTodos={jest.fn()}
            />);
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        fireEvent.change(inputElement, {target: {value: "go grocery shopping"}})
        expect(inputElement.value).toBe("go grocery shopping")
    });

    it('should have empty value', ()=>{
        render(<AddInput 
            todos={[]}
            setTodos={jest.fn()}
            />);
        const buttonElement = screen.getByRole('button', {name: /Dio Brando/i});
        fireEvent.click(buttonElement);
        expect(buttonElement.value).toBe('')
    });
})
