import axios from 'axios'
import {useState, useEffect} from 'react' 
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {useParams, Link} from 'react-router-dom'




import Sortby from './Sortby'

function Articles() {
    const [articles, setArticles] = useState()
    const [isLoading, setIsLoading] = useState(true)

    let urlParams= useParams()
    
    useEffect(() => {
      axios
      .get('https://mr-news-api.herokuapp.com/api/articles', {params: {topic: urlParams.topic}})
      .then((response) => {
        setArticles(response.data.articles)
        setIsLoading(false)
      }, [])
    })
    
    if (isLoading){
      return <p>Loading...</p>
    }
    
    
   
      return (
    <div >
        <Sortby />
      <ul className='articleList'>
            {articles.map((article) => {
                return (
                    <li key={article.article_id}>
                    <Card className='articleCard' key={article.article_id} >
                      <Card.Img className='articleImg' variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRICHBL7gIbmeGhAFSAbUh-CVgCboh7xzYwgg&usqp=CAU" alt={article.article_id} />
                      <Card.Body>
                        <Card.Title>{article.title}</Card.Title>
                        <Card.Text>
                          {article.body.substring(0,63) + '...'}
                        </Card.Text>
                        <Link to= {`/article/${article.article_id}`}>
                        <Button variant="primary">Read</Button>
                        </Link>
                        <div className='articleMeta'>
                        <p>{article.author} | {article.created_at.substring(0,10)}  | votes:{article.votes} |  comments:{article.comment_count}</p>
                        </div>
                      </Card.Body>
                    </Card>
                    </li>
                )
            })}
       
      </ul>
    </div>
  )
}

export default Articles
