
const Navbar = () => {
    return (  
        <nav className="navbar">
            <div>
                <h1>Owens Blog</h1>
                <p>Made By Ownecodes in React</p>
            </div>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">New Blog</a>
            </div>
        </nav>
    );
}
 
export default Navbar