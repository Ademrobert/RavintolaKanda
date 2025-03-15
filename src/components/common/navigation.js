"use client"
import Button from "@/components/core/buttons/button";
//import UserIcon from "@/components/core/icons/user";
//import KeyIcon from "@/components/core/icons/key";
//import {signOut, useSession} from "next-auth/react";
import LogoutIcon from "@/components/core/icons/logout";
import Image from "next/image";
import Dropdown from "@/components/core/dropdowns/dropdown";
import ChevronDownIcon from "@/components/core/icons/chevron-down";

export default function Navigation() {
//    const session = useSession();
//    const status = session.status;
//    const fullName = session.data?.user?.name;
//    const profile = session.data?.user?.image;

    //<Button addClassName={"hover:underline"} text={"About"} href={"/about"}></Button>
    //<Button addClassName={"hover:underline"} text={"Contact"} href={"/contact"}></Button>
    //<Button addClassName={"hover:underline"} text={"Reservation"} href={"/reservation"}></Button>
//{status === 'unauthenticated' && (
//<>
//    <Button text={"Login"} href={"/login"} addClassName={"flex hover:underline gap-2 px-6 pr-0 py-2"} afterIcon={<KeyIcon/>} afterIconAnimation={"zoom"}></Button>
//    <Button text={"Register"} href={"/register"} addClassName={"bg-primary-500 hover:bg-primary-700 transition-all flex gap-2 rounded-full text-white px-6 pr-4 py-2"} afterIcon={<UserIcon/>} afterIconAnimation={"zoom"}></Button>
//</>
//)}<nav className={"flex items-center gap-8 text-gray-500 font-semibold"}>
//                {status === 'authenticated' && (
//                    <>
//                        <Dropdown
//                            addClassName={"relative profile-menu"}
//                            addSubmenuClassName={"absolute rounded-xl bg-gray-100 w-38 px-4 top-16 z-50"}
//                            addListitemClassName={"my-4"}
//                            addSubMenuArrowClassName={"border-b-gray-100"}
//                            initialButton={<Button
//                                text={fullName ? fullName : 'Anonymouse'}
//                                href={"#user-menu"}
//                                onClick={(e) => {e.preventDefault()}}
//                                onTouchEnd={(e) => {e.preventDefault()}}
//                                onKeyDown={(e) => {e.preventDefault()}}
//                                addClassName={"flex items-center justify-between gap-2"}
//                                beforeIcon={profile ? <Image className={"rounded-full"} width={40} height={40} src={profile} alt={fullName}/> :
//                                    <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
//                                        <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
//                                    </div>
//                                }
//                                beforeIconAnimation={"zoom"}
//                                afterIcon={<ChevronDownIcon></ChevronDownIcon>}
//                                afterIconAnimation={"profile-menu-chevron"}
//                            ></Button>}
//                            navigation={[
//                                <Button
//                                    key={1}
//                                    addClassName={"hover:underline"}
//                                    text={"Dashboard"}
//                                    href={"/dashboard"}
//                                >
//                                </Button>,
//                                <Button
//                                    key={2}
//                                    addClassName={"hover:underline"}
//                                    text={"Profile"}
//                                    href={"/profile"}
//                                >
//                                </Button>,
//                                <Button
//                                    key={3}
//                                    addClassName={"hover:underline"}
//                                    text={"Settings"}
//                                    href={"/settings"}
//                                >
//                                </Button>
//                            ]}
//                            ></Dropdown>
//
//
//                        <Button
//                            text={"Logout"}
//                            href={""}
//                            onClick={ async () => { await signOut();}}
//                            addClassName={"flex hover:underline gap-2 py-2 fill-none text-red-500"}
//                            afterIcon={<LogoutIcon/>}
//                            afterIconAnimation={"zoom"}>
//                        </Button>
//                    </>
//                )}
//                
//
//            </nav>

    return (
        <>
            <nav className={"flex items-center gap-8 text-gray-500 font-semibold"}>
                <Button addClassName={"hover:underline"} text={"Home"} href={"/"}></Button>
                <Button addClassName={"hover:underline"} text={"Menu"} href={"/menu"}></Button>
            </nav>
            <div className={"hidden md:block w-[160px]"}></div>
        </>
    )
}
