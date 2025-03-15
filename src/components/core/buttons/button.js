"use client"
import {useState} from 'react';
import Link from "next/link";

export default function Button({href,target, text, replace, scroll, prefetch, onClick, onTouchEnd, onKeyDown, beforeIcon, afterIcon, beforeIconAnimation, afterIconAnimation, addClassName}) {
    const [animated, setAnimated] = useState(false);

    return(
        <Link
            href={href}
            onClick={onClick}
            onTouchEnd={onTouchEnd}
            onKeyDown={onKeyDown}
            target={target}
            replace={replace}
            scroll={scroll}
            prefetch={prefetch}
            className={`${animated ? 'animated': ''} ${addClassName}`}
            onMouseEnter={()=>setAnimated(()=>true)}
            onAnimationEnd={()=>setAnimated(()=>false)}
        >
            <div className={beforeIconAnimation}>
                {beforeIcon}
            </div>
            <span>{text}</span>
            <div className={afterIconAnimation}>
                {afterIcon}
            </div>
        </Link>
    )
}
