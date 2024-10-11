// imports from react libraries
import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
// imports from project files
import styles from './mobile.module.css'
import { MenuContext } from "../../context.jsx";

export default function MobileMenu()
{
    const { getPage, setPage } = useContext(MenuContext);
    const menu =
    [
        {title: "Начало", to: "/"},
        {title: "Работы", to: "/works"},
        {title: "Статьи", to: "/blog"}
    ];

    const html =
    (<Fragment>
        <nav className={styles["menu"]}>
        {
            menu.map(({title, to}, iterator) =>
            (
                <Link className={styles["mobile"]} key={"menu-item-"+iterator} onClick={() => setPage(title)} to={to}></Link>
            ))
        }
        </nav>
        <span>{getPage}</span>
    </Fragment>)
    return html;
}