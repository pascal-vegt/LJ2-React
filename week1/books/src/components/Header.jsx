const Header = ({image, title, text1, text2, text3}) => {
    return (
        <nav>
            <img src="" alt={image} />
            <h1>{title}</h1>
            <ul>
                <li><a href="#">{text1}</a></li>
                <li><a href="#">{text2}</a></li>
                <li><a href="#">{text3}</a></li>
            </ul>
        </nav>
     );
}
 
export default Header;