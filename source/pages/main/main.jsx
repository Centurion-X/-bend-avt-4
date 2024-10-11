// imports from react library
import { useState } from "react";
// imports from project files
import styles from "./main.module.css";
import Button from "../../components/button/button.jsx";
import Form from "../../components/form/form.jsx";
import Image from "../../assets/apprentice.png";
import Layout from "../../components/layout/layout.jsx";

export default function Main()
{
    const [form, setForm] = useState(false);
    const html =
    (<Layout>
        <div className={styles["main"]}>
            <div className={styles["title"]}>
                <h1>Сергей Монахов</h1>
                <h2>Начинающий web-разработчик</h2>
            </div>
            <div className={styles["description"]}>
                <p className={styles["text"]}>
                    Я разрабатываю необычные сайты и приложения,
                    <br></br>
                    в которых смогут реализоваться ваши фантазии...
                </p>
            </div>
            <Button className={styles["form-button"]} legend="Заявка" onClick={() => setForm(true)}></Button>
        </div>
        <img alt="Картинка" className={styles["image"]} src={Image}/>
        {form && <Form onClick={() => setForm(false)}/>}
    </Layout>);
    return html;
}