import { useContext, useEffect } from "react";
import noteContext from "../context/notes/noteContext";
import NoteForm from "./noteForm";
import NoteBook from "./noteBook";

function Home() {
    const a = useContext(noteContext);

    return (
        <div className="container" style={{ 'textAlign': 'left' }}>
            <NoteForm />
            <NoteBook />
        </div>
    )
}


export default Home;

//lazy loading
// useContext API
// REDUX