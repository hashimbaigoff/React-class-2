import { useState, useContext } from "react";
import noteContext from "../context/notes/noteContext";

function NoteForm() {
    const [ allValues, setAllvalues ] = useState({});
    const a = useContext(noteContext)

    const handleInput = (e) => {
        setAllvalues({...allValues, [e.target.name]: e.target.value});
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        a.addCard(allValues);
    }
    

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label ">Title</label>
                <input type="text" name="title" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleInput} />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                <input type="text" name="description" className="form-control" id="exampleInputPassword1" onChange={handleInput}/>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary" >Submit</button>
        </form>
    )
}

export default NoteForm;