import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>m. currier</h1>
            <div className='links'>
                <Link to="/">Home</Link>
                <Link to="/portfolio">Portfolio</Link>
            </div> 
        </nav>
    )
}

export default Navbar;