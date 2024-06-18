import {Link} from 'react-router-dom';
function NavBar() {
    return (<div className = "navbar">
        <Link to="/"><button>All Articles</button></Link>
        <button>Topics</button>
        <button className="rightButton">Log In</button>
    </div>)
}
export default NavBar