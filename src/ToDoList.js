import { act, useReducer, useState } from "react";

const initialState = []

function reducer(state,action){
    switch(action.type){
        case 'Add':
            return [...state, {id:Date.now() , text:action.payload, done:false}];
        case 'Delete':
            return state.filter(todo => todo.id !== action.payload)
        case 'Toggle':
            return state.map(todo => todo.id == action.payload ? {...todo, done: !todo.done} : todo)
    }
}

function ToDOList(){
    const [todos,dispatch] = useReducer(reducer,initialState)
    const [text,setText] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch({type:'Add',payload:text})
        setText("")
    }

    return (
        <div>
        <h2>TO-DO List</h2>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                value={text}
                onChange={e=>setText(e.target.value)}
                placeholder="Add a task"
                />
                <button type="submit">Add</button>
            </form>

            <ul>
                {todos.map( todo => (
        
                    <li style={{textDecoration: todo.done ? 'line-through':'none'}}>{todo.text} 
                    <button onClick={()=>dispatch({type:'Delete',payload:todo.id})}>X</button>
                    <button onClick={()=>dispatch({type:'Toggle',payload:todo.id})}>Toggle</button>
                    </li>

                ))}
            </ul>

        </div>
    )
}

export default ToDOList