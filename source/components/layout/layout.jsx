// imports from react libraries
import { Fragment, useContext } from "react";
import PropTypes from "prop-types";
// imports from project files
import styles from "./layout.module.css";
import Footer from "../footer/footer.jsx";
import Header from "../header/header.jsx";
import { Main } from "../main/main.jsx";
import { ThemeContext } from "../../context.jsx";

export default function Layout({ children })
{
    const { getTheme } = useContext(ThemeContext);
    
    const html =
    (<Fragment>
        <div className={`${styles[getTheme]} ${styles['wrapper']}`}>
            <Header/>
            <Main>{children}</Main>
            <Footer/>
        </div>
    </Fragment>);
    return html;
}

Layout.propTypes = {children: PropTypes.node};