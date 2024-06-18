import Header from './Components/Header'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import { Routes, Route } from 'react-router-dom'
import Articles from './Components/Articles'
import Article from './Components/Article'

function App() {


  return (
    <div>
    <Header/>
    <NavBar/>
    <Routes>
        <Route path="/" element={<Articles/>}/>
        <Route path="/articles/:article_id" element={<Article />}/>
    </Routes>
    <Footer/>
    </div>
  )
}

export default App
