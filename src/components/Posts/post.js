import { useReducer, useRef, useState } from "react";
import { INITIAL_STATE, postReducer } from "./postReducer";
import { ACTIONTYPES } from "./postAction";

function Posts() {
    const [state, action] = useReducer(postReducer, INITIAL_STATE);

    const tarea = useRef();

    const handleAPI = () => {
        action({
            type: ACTIONTYPES.FETCH_START
        })
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                action({
                    type: ACTIONTYPES.FETCH_SUCESS,
                    payload: data
                })
            })
            .catch((err) => {
                action({
                    type: ACTIONTYPES.FETCH_ERROR
                })
            })
    }

    const handleInc = () => {
        action({
            type: ACTIONTYPES.INCREMENT
        })
    }

    const handleDec = () => {
        action({
            type: ACTIONTYPES.DECREMENT
        })
    }

    const handleInput = (e) => {
        action({
            type: 'INPUTVALUE',
            payload: {
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        action({
            type: 'FORMSUBMIT',
        })
    }

    const tags = () => {
        const v = tarea.current.value;
        const s = v.split(',');
        console.log(s);
        action({
            type: 'TAGS',
            payload: s
        })
    }


    return (
        <div>
            <button onClick={handleAPI}>FetchAPI</button>
            <p>{state.Loading ? "Loading.........." : ""}</p>
            <p>{state.post.length > 0 ? "Data Loaded" : ""}</p>
            <p>{state.error ? "Something went wrong........." : ""}</p>



            <p>Counter: {state.counter}</p>
            <button onClick={handleInc}>Increment</button>
            <button onClick={handleDec}>Decrement</button><br /><br />

            <form>
                <p>Name: <input type="text" name="name" onChange={handleInput} value={state.form.name}/></p>
                <p>Email: <input type="text" name="email" onChange={handleInput} value={state.form.email}/></p>
                <p>Password: <input type="text" name="password" onChange={handleInput} value={state.form.password}/></p>
                <button onClick={handleSubmit}>Submit</button>
            </form><br />
            <textarea ref={tarea} />
            <br />
            <button onClick={tags}>Tags</button><br /><br />
            {state.tags.length > 0 &&
                state.tags.map((element) => {
                    return (
                        <button key={element}>{element}</button>
                    )
                })
            }
            <br />
            {state.formSubmitted ? "formSubmitted" : "Enter all the values"}
        </div>
    )
}

export default Posts;