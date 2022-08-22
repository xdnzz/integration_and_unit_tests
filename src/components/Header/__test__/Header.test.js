import {render, screen} from '@testing-library/react';
import Header from '../Header';


// it('should render react TODO', ()=>{
//     render(<Header title="my header"/>);
//     const headingElement = screen.getByText(/my header/i);
//     expect(headingElement).toBeInTheDocument()
// })


// it('should render react TODOss', ()=>{
//     render(<Header title="My header"/>);
//     const headingElement = screen.getByRole("heading");
//     expect(headingElement).toBeInTheDocument()
// })

it('should render react header', ()=>{
    render(<Header title="My header"/>);
    const headingElement = screen.getByTitle("header");
    expect(headingElement).toBeInTheDocument()
})



it('should render the ID from p element', ()=>{
    render(<Header title="My header"/>);
    const headingElement = screen.getByTestId("header2");
    expect(headingElement).toBeInTheDocument()
})

it('should find the element by id', async ()=>{
    render(<Header title="My header"/>);
    const headingElement = await screen.findByTestId("header2");
    expect(headingElement).toBeInTheDocument()
})

it('should find an item by text', async ()=> {
    render(<Header title="my headerr"/>);
    const findText = await screen.findByText(/my headerr/i)
    expect(findText).toBeInTheDocument()
})

//QUERY METHODS

it('should find an item by texts', async ()=> {
    render(<Header title="my headerr"/>);
    const findText = screen.queryByText(/dogs/i)
    expect(findText).not.toBeInTheDocument()
})

it('should find an item by textss', async ()=> {
    render(<Header title="my header"/>);
    const headingElements = screen.getAllByRole("heading")
    expect(headingElements.length).toBe(10-8)
})

it('should be truthy', async ()=> {
    render(<Header title="my header"/>);
    const headingElements = screen.getAllByRole("heading")
    expect(headingElements).toBeTruthy()
})

it('shouldnt be truthy', async ()=> {
    render(<Header title="my header"/>);
    const headingElements = screen.getAllByRole("heading")
    expect(headingElements).not.toBeFalsy()
})

