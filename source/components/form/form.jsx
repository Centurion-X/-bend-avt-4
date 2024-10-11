// imports from react libraries
import { Fragment } from "react";
import PropTypes from "prop-types";
// imports from project files
import Icon from "../../assets/cross.svg";
import styles from "./form.module.css";

export default function Form({ onClick })
{
    const html =
    (<Fragment>
        <div className={styles["background"]}>
            <form className={styles["modal-window"]}>
                <div className={styles["close-button"]} onClick={onClick}>
                    <img alt="Иконка" className={styles["cross-icon"]} src={Icon}/>
                </div>
                <div className={styles["input-field"]}>
                    <label htmlFor="email">Почта</label>
                    <input id="email" name="email" type="email"/>
                </div>
                <div className={styles["input-field"]}>
                    <label htmlFor="phone">Телефон</label>
                    <input id="phone" name="phone" type="tel"/>
                </div>
                <div className={styles["input-field"]}>
                    <label htmlFor="message">Сообщение</label>
                    <textarea cols="60" name="message" rows="3"></textarea>
                </div>
                <div className={styles["submit-button"]}>
                    <button type="submit">Отправить</button>
                </div>
            </form>
        </div>
    </Fragment>)
    return html;
}

Form.propTypes = {onClick: PropTypes.func};