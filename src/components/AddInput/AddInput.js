import React, { useState } from 'react'
import "./AddInput.css"
import { v4 } from "uuid"
import {Secao} from '../secao/Secao'

const arr = ['Dio','Personagem1','Personagem2','Personagem3','Personagem4','Personagem5']

function AddInput({
    setTodos, todos
}) {

    const [todo, setTodo] = useState("")

    const addTodo = () => {
        if(!todo) return
        let updatedTodos = [
            ...todos,
            {
                id: v4(),
                task: todo,
                completed: false
            }
        ]
        setTodos(updatedTodos);
        setTodo("")
    }

    return (
        <div className="input-container">
            <input 
                className="input" 
                value={todo} 
                onChange={(e) => setTodo(e.target.value)}
                placeholder="Add a new task here..."
            />
           
        <Secao texto="oi"/>
        <Secao texto="LOL"/>
        <Secao texto="sonegar imposto"/>
        <Secao texto="sonegar imposto"/>
        <Secao texto="sonegar imposto"/>
        <Secao texto="sonegar imposto"/>
        <Secao texto="sonegar imposto"/>
     
        </div>
    )
}

export default AddInput
