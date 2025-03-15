import Image from "next/image";
import Button from "@/components/core/buttons/button";
import OrderIcon from "@/components/core/icons/order";
//import ArrowRightIcon from "@/components/core/icons/arrow-right";

//<Button text={"Learn More"} href={"/about"} addClassName={"flex gap-2 py-2 text-gray-500 font-semibold"} afterIcon={<ArrowRightIcon/>} afterIconAnimation={"point-right"}></Button>

export default function Hero() {
    return (
       <section className={"max-w-4xl mx-auto p-4 grid items-center grid-cols-1 md:grid-cols-[.4fr_.6fr]"}> 
           <div>
                <h1 className={"text-4xl font-semibold leading-normal"}>
                    Maukasta&nbsp;
                    <span className={"text-primary-500"}>pizzaa</span><br/>
                    <span className={"text-secondary-500"}>pastaa</span> ja paljon muuta!
                </h1>
                <p className={"my-6 text-gray-500"}>
                    Nauti italialaisesta ruoasta Espoon Latokaskessa.
                    K&A on perheystävällinen ravintola.
                    Meiltä löytyy pizzaa pastaa ja paljon muuta! Tutustu ruokalistamme ja koe,
                    miten maku herää eloon. Tervetuloa!
                </p>
                <div className={ "flex gap-4" }>
                    <Button text={"Go to Menu"} href={"/menu"} addClassName={"flex bg-primary-500 hover:bg-primary-700 transition-all gap-2 text-white px-4 py-2 rounded-full uppercase"} afterIcon={<OrderIcon/>} afterIconAnimation={"jiggle"}></Button>
                </div>
            </div>
            <div className={"relative hidden md:block"}>
                <Image width={820} height={480} src={'/pasta-1.webp'} priority={true} alt={"Delicious Pasta"}/>
                <Image width={820} height={480} src={'/pizza-1.webp'} priority={true} alt={"Delicious Pizza"}/>
            </div>
        </section>
    )
}
