import { useContext, useState } from "react";
import { MenuContext } from "./MenuContext";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const { showMenu, setShowMenu } = useContext(MenuContext);
    const [resizeMenu, setResizeMenu] = useState(false);

    const handleShowMenu = (e) => {
        e.stopPropagation();
        setShowMenu(!showMenu);
    };

    const handleResizeMenu = () => {
        setResizeMenu(!resizeMenu);
    };

    return (
        <nav className={`${showMenu ? 'nav-active' : ''} ${resizeMenu ? 'add-width' : ''}`}>
            <article>
                <button className="menu" onClick={handleShowMenu}>
                    <i id="menu_btn" className={`fas fa-chevron-left ${showMenu ? 'rotate-on' : ''}`}></i>
                </button>
            </article>

            <figure>
                <img src="./assets/images/IMG_20210608_233601_048.jpg"></img>
            </figure>

            <ul>
                <li>
                    <Link to={'/'}>
                        <i className="fa fa-user" aria-hidden="true"></i>
                        <span>
                            کاربران
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to={'/gallery'}>
                        <i className="fa fa-user" aria-hidden="true"></i>
                        <span>
                            گالری
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to={'/posts'}>
                        <i className="fa fa-align-center" aria-hidden="true"></i>
                        <span>
                            پست ها
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to={'/todo'}>
                        <i className="fa fa-align-center" aria-hidden="true"></i>
                        <span>
                            کار ها
                        </span>
                    </Link>
                </li>
            </ul>

            <button className="btn-resizer" onClick={handleResizeMenu}>
                <i id="icon_resizer" className={`fas fa-chevron-left ${resizeMenu ? 'rotate-on' : ''}`}></i>
            </button>
        </nav>
    );
}

export default Sidebar;