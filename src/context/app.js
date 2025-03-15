"use client"
import {SessionProvider} from "next-auth/react";
//import {ReactNode} from "react";

//<SessionProvider>
//</SessionProvider>
export function AppProvider({children}) {
    return (
    <>
        {children}
    </>
    )
}
