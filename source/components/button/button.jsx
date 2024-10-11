// imports from react libraries
import { Fragment } from "react";
import PropTypes from "prop-types";
// imports from project files
import styles from "./button.module.css";

export default function Button({ legend, onClick })
{
    const html =
    (<Fragment>
        <button className={styles["form-button"]} onClick={onClick}>{legend}</button>
    </Fragment>);
    return html;
}

Button.propTypes =
{
    onClick: PropTypes.func,
    legend: PropTypes.string,
}