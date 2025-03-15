import Image from "next/image";
import MenuItem from "@/components/core/menu/item";
import SectionHeader from "@/components/common/section-header";
import Button from "@/components/core/buttons/button";
import ArrowRightIcon from "@/components/core/icons/arrow-right";

export default function HomeMenu() {
    return (
        <section className={"max-w-4xl mx-auto p-4"}>
            <div className={"relative"}>
                <div className={"h-24 w-24 md:h-48 md:w-48 absolute -top-[280px] right-0 md:left-[-20px] md:right-auto -z-10"}>
                    <Image width={200} height={200} src={"/salad-1.png"} alt={"salad"} />
                </div>
                <div className={"h-48 w-48 absolute -top-20 right-0"}>
                    <Image width={200} height={200} src={"/salad-2.png"} alt={"salad"} />
                </div>
            </div>
            <SectionHeader subHeader={"Order Our"} mainHeader={"Popular Food"}></SectionHeader>
            <div className={"grid mt-8 grid-cols-1 md:grid-cols-3 grid-flow-row gap-4 auto-rows-[1fr]"}>
                <MenuItem title={"Peperoni Pizza"} image={<Image width={200} height={200} src={'/peperoni.png'} alt={'peperoni pizza'}/>} description={"Tomaattikastike, juusto, pepperoni, mozzarella, kirsikkatomaatti ja pestokastike"} price={13.90}/>
                <MenuItem title={"Kana K-Zone"} image={<Image width={200} height={200} src={'/kana-k-zone.png'} alt={'kana k-zone'}/>} description={"Kana, uunin jälkeen tuorepaprika, kirsikkatomaatti, punasipuli, salaatti, valkosipuli- tai chilimajoneesi.\n" +
                    "Talonperunat sekä dippi"} price={14.50}/>
                <MenuItem title={"Kebab Ranska"}  image={<Image width={200} height={200} src={'/kebab-ranska.png'} alt={'kebab ranska'}/>} description={"Kebabennoksiin kuuluu kebabliha, kastike, salaatti, punasipuli, kurkku, kirsikkatomaatti, vihreä chili ja majoneesikastik"} price={11.50} />
                <MenuItem title={"Fetasalatti"} image={<Image width={200} height={200} src={'/feta-salatti.png'} alt={'fetasalatti'}/>} description={"Jäävuorisalaatti, kirsikkatomaatti, kurkku, paprika, punasipullija rucola,  Fetakuutioita ja kalamataolivi"} price={12.50}/>
                <MenuItem title={"Cannelloni Pasta"} image={<Image width={200} height={200} src={'/cannelloni-pasta.png'} alt={'cannelloni pasta'}/>} description={"Ricotta ja pinaatilla täytetty pastarulla; tomaattikastike, kerma, cheddar-mozzarella juusto mix"} price={11.50}/>
                <MenuItem title={"Carbonara Pasta"} image={<Image width={200} height={200} src={'/carbonara-pasta.png'} alt={'carbonara pasta'}/>} description={"kerma, pekoni, kananmuna, parmesan"} price={11.50}/>
            </div>
            <div className={"mt-6 w-full relative text-center flex flex-col items-center"}>
                <h3 className={"uppercase text-gray-500 font-semibold"}>Want more?</h3>
                <Button text={"Full Menu"} href={"/menu"} addClassName={"bg-secondary-500 hover:bg-secondary-700 transition-all flex gap-2 text-white rounded-full px-4 py-2"} afterIcon={<ArrowRightIcon/>} afterIconAnimation={"point-right"}></Button>
            </div>
        </section>
    );
}
