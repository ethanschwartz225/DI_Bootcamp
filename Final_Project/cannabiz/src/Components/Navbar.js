import './Navbar.css';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav>
                <h1 className={'nav-header'}>GreenSite</h1>
                <Link to={'/'} className={'link'}>Browse</Link>
                <Link to={'/discover'} className={'link'}>Discover</Link>
                <Link to={'/shop'} className={'link'}>Shop</Link>
            </nav>
        </>
    )
}
export default Navbar