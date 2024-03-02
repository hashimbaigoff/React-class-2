import { useContext } from "react"; 
import noteContext from "../context/notes/noteContext";

function Card() {
    const a = useContext(noteContext);
    const handleDel = (id) => {
        a.del(id);
    }
    return (
        <>
            {a.state.map((element) => {
                return (
                    <div className="card col-md-3 mx-2 my-2" key={element.id}>
                        <div className="card-body">
                            <h5 className="card-title">{element.title}</h5>
                            <i className="fa fa-trash" onClick={() => handleDel(element.id)} style={{'cursor': 'pointer'}}></i>&nbsp;
                            <i className="fa fa-edit"  style={{'cursor': 'pointer'}}></i>
                            <p className="card-text">{element.description}</p>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default Card;