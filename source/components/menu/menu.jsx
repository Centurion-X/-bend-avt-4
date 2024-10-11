// imports from react libraries
import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
// imports from project files
import styles from "./menu.module.css";
import { MenuContext } from "../../context.jsx";

export default function Menu()
{
    const { setPage } = useContext(MenuContext);
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
                <Link className={styles["menu-link"]} key={"menu-item-"+iterator} onClick={() => setPage(title)} to={to}>{title}</Link>
            ))
        }
        </nav>
    </Fragment>);
    return html;
}