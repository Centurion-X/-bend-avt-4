// imports from react libraries
import { Fragment } from "react";
import PropTypes from "prop-types";
// imports from project files
import styles from "./main.module.css";

export function Main({ children })
{
    const html =
    (<Fragment>
        <main className={styles["main"]}>{children}</main>
    </Fragment>)
    return html;
}

Main.propTypes = {children: PropTypes.node};