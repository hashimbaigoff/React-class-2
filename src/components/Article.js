import { useContext } from "react";
import articleContext from "../context/Articale/articleContext";
import CardArticle from "./cardArticle";
import ArticleForm from "./articleForm";

function Article() {
    const a = useContext(articleContext);
    console.log(a);
    return (
        <div className="container">
            <div className="row my-2">
                <ArticleForm />
                <CardArticle />
            </div>
        </div>
    )
}

export default Article;