// imports from react library
import { Fragment, useContext, useEffect, useState } from "react";
// imports from project files
import styles from "./header.module.css";
import Menu from "../menu/menu.jsx";
import MobileMenu from "../menu/mobile.jsx";
import { Theme } from "../theme/theme.jsx";
import { ThemeContext } from "../../context.jsx";
import { useResize } from "../../hooks/resize.jsx";

export default function Header()
{
    const { getTheme, setTheme } = useContext(ThemeContext);
    const { is_sizeMD } = useResize();
    const [ isMobile, setMobile ] = useState(is_sizeMD);

    useEffect(() =>
    {
        setMobile(is_sizeMD);
    }, [is_sizeMD]);

    const html =
    (<Fragment>
        <header className={styles["header"]}>
            {isMobile && <MobileMenu/> || <Menu/>}
            <Theme onClick={() => getTheme == "light-theme" ? setTheme("dark-theme") : setTheme("light-theme")}></Theme>
        </header>
    </Fragment>);
    return html;
}