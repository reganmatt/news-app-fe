import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'

function SingleArticle() {
    let params = useParams()
    const [article, setArticle] = useState()
    const [isLoading, setIsLoading] = useState(true)

  

    useEffect(() => {
        axios
        .get(`https://mr-news-api.herokuapp.com/api/articles/${params.article_id}`)
        .then((response) => {
          setArticle(response.data.article)
          setIsLoading(false)
        })
      }, [params.article_id])
      
      if (params.article_id > 36) {
          return <p>Article Not Found!</p>
      }
      
      if (isLoading){
        return <p>Loading...</p>
    }
    

  return (
    <article className='singleArticle'>
      <h2>{article.title}</h2>
      <p className='articleBody'>{article.body}</p>
      <div className='singleMeta'>
      <p>Author: {article.author}</p>
      <p>Comments: {article.comment_count}</p>
      <p>{article.created_at.substring(0,10)}</p>
      <p>Topic: {article.topic}</p>
      <p>Votes: {article.votes}</p>
      </div>
      <img src='https://pbs.twimg.com/profile_images/1333392601450426370/x_DT51WI_400x400.jpg' alt='northcoders' />
    </article>
  )
}

export default SingleArticle
