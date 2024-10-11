// imports from react library
import { Fragment } from "react";
// imports from project files
import styles from "./footer.module.css";
import Image from "../../assets/mark.png";

export default function Footer()
{
    const html =
    (<Fragment>
        <footer className={styles["footer"]}>
            <img alt="Иконка" className={styles["image"]} src={Image}/>
            <div className={styles["logo"]}>Serge Monakhov (c) 2024</div>
        </footer>
    </Fragment>);
    return html;
}