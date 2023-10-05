import { NavLink } from "react-router-dom"
import {useFetch} from "../../hooks/useFetch"


function Articles() {
const { data: articles, isPending, error } = useFetch('http://localhost:3000/articles')
  return (
    <div className="article-container">
        {isPending && <h3 className="text-center text-lime-600 pt-5">Loading...</h3>}
        {error && <h3 className="text-center text-lime-600 pt-5">{error}</h3>}

        {articles &&  articles.map((article) => {
            return (
                <div className="text-center pt-7" key={article.id}>
                    <h3 className="font-medium"> 
                        Title: {article.title}
                    </h3>
                    <p className="font-medium">
                        Author: <i>{article.author}</i>
                    </p>

                    <NavLink className="font-bold text-lime-600" to={`/articles/${article.id}`}>Read More</NavLink>
                </div>
            )
        })}
    </div>
  )
}

export default Articles