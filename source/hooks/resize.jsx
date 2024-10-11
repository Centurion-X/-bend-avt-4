// imports from react library
import { useEffect, useState } from "react";

export const screen_sm = 320;
export const screen_md = 640;
export const screen_lg = 800;
export const screen_xl = 1024;
export const screen_xxl = 1280;

export const useResize = () =>
{
    const [ getWidth, setWidth ] = useState(window.innerWidth);
    const object =
    {
        getWidth,
        is_sizeSM: getWidth <= screen_sm,
        is_sizeMD: getWidth <= screen_md,
        is_sizeLG: getWidth <= screen_lg,
        is_sizeXL: getWidth <= screen_xl,
        is_sizeXXL: getWidth <= screen_xxl
    }

    useEffect(() => window.addEventListener("resize", event => setWidth(event.target.innerWidth)), []);
    return object;
}