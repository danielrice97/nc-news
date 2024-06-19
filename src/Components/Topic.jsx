import { useParams } from "react-router-dom"
import { fetchAllArticles } from "../api"
import { useState, useEffect } from "react"
import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"
function Topic() {
    const { topic_name } = useParams()
    const capitalised_topic_name = topic_name[0].toUpperCase() + topic_name.slice(1)

    const [order, setOrder] = useState("⬆️")
    const [firstTime, setFirstTime] = useState("none")
    const [sort_by, setSort_by] = useState("none")

    let topic_name_with_emoji
    if(topic_name === "football") {
        topic_name_with_emoji = capitalised_topic_name + " ⚽"
    } else if (topic_name === "cooking") {
        topic_name_with_emoji = capitalised_topic_name + " 🍰"
    } else if (topic_name === "coding") {
        topic_name_with_emoji = capitalised_topic_name + " 🖥️"
    }

    const [articles, setArticles] = useState("")

    useEffect(() => {
        if (firstTime === false) {
       fetchAllArticles(sort_by, order).then((data)=> {
         const articlesarr = data.articles
        const articlesHtml = articlesarr.map((article)=> {
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
    } else {
        fetchAllArticles(sort_by, "none").then((data)=> {
            const articlesarr = data.articles
           const articlesHtml = articlesarr.map((article)=> {
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
    }
    }, [sort_by, order])

    function handleSortByChange(event) {

        const sort_by = event.target.value

        setSort_by(sort_by)

    }

    function handleOrderClick(event) {
        event.preventDefault()

        setFirstTime(false)

        const order = event.target.value

        if (order === "⬆️") {
            setOrder("⬇️")
        } else if (order === "⬇️") {
            setOrder("⬆️")
        }
    }
    

   return <div key={topic_name_with_emoji} className="topics">
   <br></br>
   <h1>{topic_name_with_emoji}</h1>
   <select className="sortby" onChange={handleSortByChange} name="category" id="">
  <option>--Sort By--</option>
  <option key= {"Date"} value={"created_at"}>Date</option>
  <option key= {"Comment Count"} value={"comment_count"}>Comment count</option>
  <option key= {"Votes"} value={"votes"}>Votes</option>
  </select>

  <button value={order}onClick={handleOrderClick}><span className="arrow">{order}</span></button>
<br></br>
   <div className="AllArticlesContainer">{articles}</div>
   <br></br>
   <br></br>

</div>
}

export default Topic