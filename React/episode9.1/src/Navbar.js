import { Link } from 'react-router-dom'
export const Navbar = () => {
    return (
        <div>
            {/* This is nav bar and this won't change when you change the link */}
            {/* Link is part of router dom */}
            <Link to="/">Home </Link>
            <Link to="/menu">Menu </Link>
            <Link to="/contact">Contact</Link>
        </div>
    )

}