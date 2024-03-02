import { useContext, useState } from "react";
import articleContext from "../context/Articale/articleContext";

function CardArticle() {
    const a = useContext(articleContext);

    const handleDel = (id) => {
        a.ArticleDelete(id);
    }

    const handleEdit = (id) => {
        a.EditValues(id);
    }

console.log(a);

    return (
        <>
            {a.state.map((element, index) => {
                return (
                    <div className="col-md-3 mx-2 my-2" key={index}>
                        <div className="card" style={{ "width": "18rem" }}>
                            <div className="card-body">
                                <div style={{'position': 'absolute', 'right': '22px'}}>
                                    <i className="fa fa-edit" style={{cursor: 'pointer'}} onClick={() => handleEdit(element.id)}></i>&nbsp;
                                    <i className="fa fa-trash" style={{cursor: 'pointer'}} onClick={() => handleDel(element.id)}></i>
                                </div>
                                <h5 className="card-title">{element.title}</h5>
                                <p className="card-text">{element.description}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default CardArticle;