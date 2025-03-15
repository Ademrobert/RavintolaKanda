//import Button from "@/components/core/buttons/button";
//import CartIcon from "@/components/core/icons/cart";
//import {ReactNode} from "react";

//<Button text={`${price}$`} href={"/buy"} addClassName={"bg-primary-500 hover:bg-primary-700 transition-all flex gap-2 text-white rounded-full px-4 py-2"} afterIcon={<CartIcon/>} afterIconAnimation={"race-right"}></Button>
export default function MenuItem({title, image, description}) {
    return (
        <div className={"mt-20"}>
            <div className={"h-full justify-between bg-gray-100 hover:bg-gray-50 hover:drop-shadow-[0_4px_4px_rgba(0,0,0,0.2)] transition-all p-4 items-center flex flex-col relative rounded-lg"}>
                <div className={'h-40 w-40 items-center flex justify-end absolute drop-shadow-[0_4px_4px_rgba(0,0,0,0.2)] -top-24'}>
                    {image}
                </div>
                <h4 className={"pt-12 text-2xl font-semibold"}>{title}</h4>
                <p className={"text-gray-500 text-sm p-6"}>{description}</p>
            </div>
        </div>
    )
}
