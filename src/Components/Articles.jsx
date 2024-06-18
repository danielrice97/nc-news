import { useState } from "react"
import axios from "axios"
import { useEffect } from "react"
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Articles() {
    
    const [articles, setArticles] = useState("")

    useEffect(() => {
        axios.get("https://myncnewsproject.onrender.com/api/articles").then(({data})=> {

        const articlesHtml = data.map((article)=> {
                return (<Link to={`/articles/${article.article_id}`}><Card key={article.article_id} className="articleCard">
                        <Card.Body>
                      <Card.Title className="articleText">
                        {article.title}
                      </Card.Title>
                      <Card.Img className="articleImage"
                variant="top"
                src={article.article_img_url}
              />
                 <Card.Text className="articleText">
                By {article.author}
             </Card.Text>
                      </Card.Body>
                  </Card></Link>)
            })
            setArticles(articlesHtml)
        })
    }, [])
    
    return (<div className="articles">
        <div className="AllArticlesContainer">{articles}</div>
    </div>)
}

export default Articles