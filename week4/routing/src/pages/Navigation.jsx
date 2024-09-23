import {Link, Outlet} from "react-router-dom"

const Navigation = () => {
    return ( 
        <>
        <nav>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>

        <Outlet/>
        </>
     );
}
 
export default Navigation;