import axios from 'axios'
import {useState, useEffect} from 'react' 
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


import Sortby from './Sortby'

function Articles() {
    const [articles, setArticles] = useState()
    // const [topic, setTopic] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios
        .get('https://mr-news-api.herokuapp.com/api/articles')
        .then((response) => {
         
            setArticles(response.data.articles)
            setIsLoading(false)
        })
    }, [])

    if (isLoading){
        return <p>Loading...</p>
    }

  return (
    <div >
        <Sortby />
      <ul className='articleList'>
            {articles.map((article) => {
                return (
                    <li >
                    <Card className='articleCard' key={article.article_id} >
                      <Card.Img className='articleImg' variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRICHBL7gIbmeGhAFSAbUh-CVgCboh7xzYwgg&usqp=CAU" alt={article.article_id} />
                      <Card.Body>
                        <Card.Title>{article.title}</Card.Title>
                        <Card.Text>
                          {article.body.substring(0,63) + '...'}
                        </Card.Text>
                        <Button variant="primary">Read</Button>
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
