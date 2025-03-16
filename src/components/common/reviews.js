//import SectionHeader from "@/components/common/section-header";
//import UserReview from "@/components/core/user/review";
import Image from "next/image";
import Button from "@/components/core/buttons/button";

//<div className={'clip-diagonal-top-left bg-gray-100 absolute -top-60 left-0 right-0 h-64'}></div>
//<SectionHeader color={"secondary"} mainHeader={"See Our Reviews"} subHeader={"Don't take our word for it"}></SectionHeader>
//<div className={"grid grid-cols-3 mt-8 gap-4"}>
//    <UserReview fullname={"Jons Sena"} profile={<Image width={40} height={40} src={'/profile-picture-1.jpg'} alt={'Reviewing User Profile Picture'} className={"w-10 h-10 rounded-full"}></Image>} product={<Image width={200} height={200} src={'/peperoni.png'} alt={'peperoni pizza'}/>} reviewDate={"2 days ago"} text={"The spicy peperoni pizza is a great tasting pizza. It was a tad hot though... But some people might like that."} rating={4}/>
//    <UserReview fullname={"Hylke Hellinga"} profile={<Image width={40} height={40} src={'/profile-picture-2.jpg'} alt={'Reviewing User Profile Picture'} className={"w-10 h-10 rounded-full"}></Image>} product={<Image width={200} height={200} src={'/kana-k-zone.png'} alt={'kana k zone'}/>} reviewDate={"1 day ago"} text={"Excellent dinner, couldn't have wished for a better flavour and taste then this. It was super tasty!"} rating={5}/>
//    <UserReview fullname={"Adem Ottoman"} profile={<Image width={40} height={40} src={'/profile-picture-1.jpg'} alt={'Reviewing User Profile Picture'} className={"w-10 h-10 rounded-full"}></Image>} product={<Image width={200} height={200} src={'/cannelloni-pasta.png'} alt={'cannelloni pasta'}/>} reviewDate={"5 days ago"} text={"Some of the best pasta I've ever had to experience!"} rating={5}/>
//    <UserReview fullname={"Jons Sena"} profile={<Image width={40} height={40} src={'/profile-picture-1.jpg'} alt={'Reviewing User Profile Picture'} className={"w-10 h-10 rounded-full"}></Image>} product={<Image width={200} height={200} src={'/kebab-ranska.png'} alt={'kebab ranska'}/>} reviewDate={"4 days ago"} text={"The kebab is delicious, with the french fries and the mixture of it all, great job"} rating={3}/>
//    <UserReview fullname={"Jons Sena"} profile={<Image width={40} height={40} src={'/profile-picture-1.jpg'} alt={'Reviewing User Profile Picture'} className={"w-10 h-10 rounded-full"}></Image>} product={<Image width={200} height={200} src={'/carbonara-pasta.png'} alt={'carbonara pasta'}/>} reviewDate={"3 days ago"} text={"There was too much food on my plate, I couldn't eat it all, I'm sorry but I need a smaller portion next time."} rating={2}/>
//    <UserReview fullname={"Jons Sena"} profile={<Image width={40} height={40} src={'/profile-picture-1.jpg'} alt={'Reviewing User Profile Picture'} className={"w-10 h-10 rounded-full"}></Image>} product={<Image width={200} height={200} src={'/feta-salatti.png'} alt={'fetasalatti'}/>} reviewDate={"6 days ago"} text={"I absolutely hate feta salads, why did I even order this?"} rating={1}/>
//</div>
//<Button target={"_blank"} href={"https://www.foodora.fi/restaurant/mchn/k-and-a-restaurant"} text={""} afterIcon={<Image className={'greyscale'} width={150} height={150} src={'/foodora.png'} alt={'Foodora Reviews'}></Image>} afterIconAnimation={"zoom"}></Button>

export default function Reviews() {
    return (
        <section className={"bg-gray-100 mx-auto p-8 text-center relative justify-center"}>
            <div className={"flex flex-row items-center justify-center gap-48"}>
                <Button target={"_blank"} href={"https://wolt.com/fi/fin/espoo/restaurant/ka-restaurant"} text={""} afterIcon={<Image className={'greyscale'} loading={"lazy"} width={150} height={150} src={'/wolt.webp'} alt={'Wolt Reviews'}></Image>} afterIconAnimation={"zoom"}></Button>
                <Button target={"_blank"} href={"https://www.tripadvisor.com/Restaurant_Review-g189932-d26370058-Reviews-Ravintola_K_A-Espoo_Uusimaa.html"} text={""} afterIcon={<Image className={'greyscale'} loading={"lazy"} width={150} height={150} src={'/tripadvisor.webp'} alt={'Tripadvisor Reviews'}></Image>} afterIconAnimation={"zoom"}></Button>
            </div>
        </section>
    )
}
