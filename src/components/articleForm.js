import { useContext, useEffect, useState } from "react";
import articleContext from "../context/Articale/articleContext";

function ArticleForm() {
    const a = useContext(articleContext);
    const [allValues, setAllvalues] = useState({
        title: '',
        description: ''
    })

    const [ editV, setEditValues ] = useState({
        id: '',
        title: '',
        description: ''
    });

    const handleInput = (e) => {
        setAllvalues({ ...allValues, [e.target.name]: e.target.value })
    }

    const handleEditInput = (e) => {
        setEditValues({...editV, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        a.ArticleAdd(allValues);
    }

    useEffect(() => {
        setEditValues(a.editvalues);
    },[a.editvalues])

    const handleUpdate = (e) => {
        e.preventDefault();
        console.log(editV);
        a.EditArticle(editV);
    }

    console.log(editV);

    return (
        <div>
            {a.edit ?
                (
                    <form className="row row-cols-lg-auto g-3 text-left" style={{ 'textAlign': 'left' }}>
                        <div className="col-12">
                            <label htmlFor="inlineFormInputGroupUsername">Title</label>
                            <div className="input-group">
                                <input type="text" name="title" className="form-control" placeholder="Title" value={editV.title} onChange={handleEditInput} />
                            </div>
                        </div>

                        <div className="col-12">
                            <label htmlFor="inlineFormInputGroupUsername">Description</label>
                            <div className="input-group">
                                <input type="text" name="description" className="form-control" value={editV.description} placeholder="Description" onChange={handleEditInput} />
                            </div>
                        </div>

                        <div className="col-12">
                            <button type="submit" className="btn btn-primary" onClick={handleUpdate}>Update</button>
                        </div>
                    </form>
                )
                :
                (
                    <form className="row row-cols-lg-auto g-3 text-left" style={{ 'textAlign': 'left' }}>
                        <div className="col-12">
                            <label htmlFor="inlineFormInputGroupUsername">Title</label>
                            <div className="input-group">
                                <input type="text" name="title" className="form-control" placeholder="Title" value={allValues.title} onChange={handleInput} />
                            </div>
                        </div>

                        <div className="col-12">
                            <label htmlFor="inlineFormInputGroupUsername">Description</label>
                            <div className="input-group">
                                <input type="text" name="description" className="form-control" value={allValues.description} placeholder="Description" onChange={handleInput} />
                            </div>
                        </div>

                        <div className="col-12">
                            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                        </div>
                    </form>
                )
            }
        </div>
    )

}

export default ArticleForm;