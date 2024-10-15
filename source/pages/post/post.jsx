// imports from react libraries
import Parser from "html-react-parser";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// imports from project files
import styles from "./post.module.css";
import Layout from "../../components/layout/layout.jsx";

export default function Post()
{
    const { id } = useParams();
    const [ getPost, setPost ] = useState(null);

    useEffect(() =>
    {
        fetch(`https://monakhoff.github.io/bend-avt-4/public/article_${id}.html`, {headers: {"Content-Type": "text/html"}})
             .then(response => response.text())
             .then(text => Parser(text))
             .then(post => setPost(post));
    }, [id]);

    const html =
    (<Layout>
        <section className={styles["content"]}>
            {getPost}
        </section>
    </Layout>);
    return html;
}
