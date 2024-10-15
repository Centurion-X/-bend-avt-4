// imports from react libraries
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
// imports from project files
import styles from "./blog.module.css";
import Layout from "../../components/layout/layout.jsx";

export default function Blog()
{
    const [ getPosts, setPosts ] = useState([]);

    useEffect(() =>
    {
        fetch("https://monakhoff.github.io/bend-avt-4/public/articles.json", {headers: {"Content-Type": "application/json"}})
             .then(response => response.json())
             .then(json => setPosts(json));
    }, []);
    
    const html =
    (<Layout>
        <nav className={styles["content"]}>
        {
            getPosts.map(({title, to}, iterator) =>
            (
                <Link className={styles["link"]} key={"content-item-"+iterator} to={to}>{title}</Link>
            ))
        }
        </nav>
    </Layout>);
    return html;
}
