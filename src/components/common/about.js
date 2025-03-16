import SectionHeader from "@/components/common/section-header";
import LazyIframe from "../core/iframes/lazy";

export default function AboutUs() {
    return (
        <section className={"mx-auto mt-8 p-16 justify-center relative overflow-hidden"}>
            <div className={'clip-triangle-down bg-white absolute top-0 left-0 right-0 h-60'}></div>
            <div className={'clip-triangle-up bg-white absolute -bottom-52 left-0 right-0 h-60'}></div>
            <div className={"absolute -z-10 top-0 left-0 bottom-0 right-0"}>
              <LazyIframe
                className={"relative -top-44 border-0"}
                allowFullScreen={false}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                title="Serving Pizza in Slow Motion Video" 
                width="1920"
                height="1080" 
                src="https://www.youtube.com/embed/HfacV7QqY9w?autoplay=1&playlist=HfacV7QqY9w&mute=1&loop=1&controls=0&rel=0&playsinline=1&enablejsapi=1&widgetid=1&showinfo=0"
                id="widget2"
                style={{width: '1920px', height: '1080px'}}>
              </LazyIframe>
              <div className={"absolute top-0 left-0 bottom-0 right-0 bg-black/50"}></div>
            </div>
            <SectionHeader color={"primary"} mainHeader={"About Us"} subHeader={"OUR STORY"}></SectionHeader>
            <div className={"text-white max-w-md mx-auto mt-4 flex-col text-center"}>
                <h3 className={"text-xl text-secondary-500"}>Tervetuloa K&A Ravintolaan!</h3>
                <p className={'py-6'}>
                    Paikka, missä jokainen suupala kertoo tarinaa.
                    Espoon Latokaskessa sijaitsevassa ravintolassamme käytämme vain parhaita,
                    tuoreita raaka-aineita luodaksemme perinteisiä italialaisia pizzoja ja pastoja uudella twistillä.
                    Meidän kattava ja huolella suunniteltu ruokalistamme tarjoaa vaihtoehtoja kaikille.
                    Tule nauttimaan laadusta, joka näkyy ja maistuu.
                    Varaa pöytäsi nyt ja koe Latokasken parhaat maut!
                </p>
            </div>
        </section>
    )
}
