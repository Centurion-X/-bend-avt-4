// imports from react libraries
import { Fragment } from "react";
import PropTypes from "prop-types";
// imports from project files
import styles from "./theme.module.css";

export function Theme({ onClick })
{
    const html =
    (<Fragment>
        <div>
            <input className={styles["type-checkbox"]} id="theme" name="theme" type="checkbox" onClick={onClick}/>
            <label className={styles["themes"]} htmlFor="theme">
                <span className={styles["dark"]}>Тёмная тема</span>
                <span className={styles["light"]}>Светлая тема</span>
            </label>
        </div>
    </Fragment>);
    return html;
}

Theme.propTypes = {onClick: PropTypes.func};