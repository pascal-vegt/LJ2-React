const Header = ({text1, text2, text3}) => {
    return (
        <nav>
            <ul className="container">
                <li><a href="#">{text1}</a></li>
                <li><a href="#">{text2}</a></li>
                <li><a href="#">{text3}</a></li>
            </ul>
        </nav>
     );
}
 
export default Header;