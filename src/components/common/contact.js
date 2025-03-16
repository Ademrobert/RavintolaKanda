import SectionHeader from "@/components/common/section-header";
import PhoneIcon from "@/components/core/icons/phone";
import MailIcon from "@/components/core/icons/mail";
import Button from "@/components/core/buttons/button";
import FacebookIcon from "@/components/core/icons/facebook";
import InstagramIcon from "@/components/core/icons/instagram";
import LazyIframe from "@/components/core/iframes/lazy";

export default function ContactUs() {
    return (
        <section className={"mx-auto mt-8 text-center justify-center"}>
            <SectionHeader color={"primary"} mainHeader={"Contact Us"} subHeader={"Don't hesitate"}></SectionHeader>
            <div className={"mt-8 flex flex-col items-center justify-between"}>
                <a className={"text-2xl md:text-4xl hover:underline text-center flex items-center justify-center fill-gray-500 text-gray-500"} href={"tel: +358449139566"}><PhoneIcon addClassName={"mr-5"}/>+358 44 913 95 66</a>
                <a className={"text-2xl md:text-4xl mt-8 hover:underline text-center flex items-center justify-center text-gray-500"} href={"mailto: contact@ravintolakanda.fi"}><MailIcon addClassName={"fill-gray-500 text-white mr-5"}/>contact@ravintolakanda.fi</a>
                <div className={"flex flex-row items-center justify-between"}>
                    <Button target={"_blank"} text={""} href={"https://www.facebook.com/people/K-A-Restaurant/100088670421155/"} addClassName={"flex mt-8 transition-all px-4 py-2 hover:fill-facebook-500"} afterIcon={<FacebookIcon width={40} height={40}/>} afterIconAnimation={"zoom"}></Button>
                    <Button target={"_blank"} text={""} href={"https://www.instagram.com/knrestaurant/?igshid=MzRlODBiNWFlZA%3D%3D"} addClassName={"flex mt-8 transition-all px-4 py-2"} afterIcon={<InstagramIcon width={40} height={40}/>} afterIconAnimation={"zoom"}></Button>
                </div>

            </div>
            <div className={"w-full mt-8 relative"}>
                <div className={'sm-clip-diagonal-bottom-right clip-diagonal-bottom-right bg-white absolute top-0 left-0 right-0 h-64'}></div>
                <LazyIframe
                  title={"Location of restaurant on google maps"}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1984.3279269381!2d24.649826577494185!3d60.17530424301918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468df3813101bccf%3A0xdab7e21ed98a43ab!2sK%26A%20Ravintola%20Latokaski%20%3A%20Pizza%2C%20Pasta%20ja%20paljon%20muuta*21!5e0!3m2!1snl!2snl!4v1703354422287!5m2!1snl!2snl"
                  width="1920"
                  height="450"
                  style={{border:0, width:"100%"}}
                  allowFullScreen={false}
                  referrerPolicy="no-referrer-when-downgrade"
                ></LazyIframe>
            </div>
        </section>
    )
}
