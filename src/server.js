import axios from "axios"

export function getAllArticles() {
    return axios.get("https://myncnewsproject.onrender.com/api/articles").then(({data})=> {
        return data
    })
}

