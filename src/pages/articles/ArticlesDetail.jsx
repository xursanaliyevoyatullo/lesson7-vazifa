import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'

function ArticlesDetail() {
    const { id } = useParams()
    const url = 'http://localhost:3000/articles/' + id
    const { data: article, error, isPending } = useFetch(url)
    return (
        <div>
            {isPending && <h3 className="text-center text-lime-600 pt-5">Loading...</h3>}
            {error && <h3 className="text-center text-lime-600 pt-5">{error}</h3>}

            {article && <>
                <img 
                    src={article.image} 
                    alt={article.title} 
                    height="300" 
                />
                <h2 className='text-center pt-3 font-medium pb-3'>
                    Title: {article.title}
                </h2>
                <p className='font-medium text-center pb-3'>
                    Author: <i>{article.author}</i>
                </p>
                <p className='text-center pb-7'>
                    {article.body}
                </p>
            </>}
        </div>
    )
}

export default ArticlesDetail