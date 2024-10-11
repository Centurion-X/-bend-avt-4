// imports from react libraries
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
// imports from project files
import "./App.css";
import Blog from "./pages/blog/blog.jsx";
import Post from "./pages/post/post.jsx";
import Main from "./pages/main/main.jsx";
import { MenuContext } from "./context.jsx";
import { SlideContext } from "./context.jsx";
import { ThemeContext } from "./context.jsx";
import Works from "./pages/works/works.jsx";

export default function App()
{
    const [ getPage, setPage ] = useState("Начало");
    const [ getSlide, setSlide ] = useState(0);
    const [ getTheme, setTheme ] = useState("light-theme");

    const html =
    (<MenuContext.Provider value={{getPage, setPage}}>
     <SlideContext.Provider value={{getSlide, setSlide}}>
     <ThemeContext.Provider value={{getTheme, setTheme}}>
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/blog/:id" element={<Post/>}/>
            <Route path="/works" element={<Works/>}/>
        </Routes>
    </ThemeContext.Provider>
    </SlideContext.Provider>
    </MenuContext.Provider>);
    return html;
}