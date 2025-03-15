"use client";
import { useState, useCallback } from 'react';

export default function Dropdown({ initialButton, navigation, addClassName, addSubmenuClassName, addListitemClassName, addSubMenuArrowClassName }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const clickDropdown = useCallback((event) => {
        event.preventDefault();
        setIsExpanded(prevState => !prevState);
    }, []);

    const touchDropdown = useCallback((event) => {
        event.preventDefault();
        setIsExpanded(prevState => !prevState);
    }, [])

    const keyDropdown = useCallback((event) => {
        event.preventDefault();
        if (event.key === 'Enter' || event.key === ' ') {
            setIsExpanded(prevState => !prevState);
        }
    },  []);

    return (
        <nav role="navigation">
            <ul className={`dropdown-menu ${addClassName}`} aria-labelledby="userMenu">
                <li className={"flex justify-center"}>
                    <button
                        id="userMenu"
                        aria-haspopup="true"
                        aria-expanded={isExpanded}
                        onClick={clickDropdown}
                        onTouchEnd={touchDropdown}
                        onKeyDown={keyDropdown}
                    >
                        {initialButton}
                    </button>
                    <div className={`submenu ${addSubmenuClassName} ${isExpanded ? 'fade-in-down' : 'fade-out-up'}`}>
                        <div className={"flex flex-col justify-center items-center"}>
                            <div className={`absolute -top-3.5 h-0 w-0 border-x-8 border-x-transparent border-b-[16px] ${addSubMenuArrowClassName}`}></div>
                            <ul aria-label="submenu">
                                {navigation.map((item, index) => (
                                    <li className={`listItem ${addListitemClassName}`} key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </li>
            </ul>
        </nav>
    );
}
