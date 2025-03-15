//import {ReactNode} from "react";
import StarIcon from "@/components/core/icons/star";

export default function UserReview({fullname, profile, product, reviewDate, text, rating}) {
    const ratingText = () => {
        switch(rating){
            case 1:
                return "Not Good"
            case 2:
                return "Could be better"
            case 3:
                return "OK"
            case 4:
                return "Good"
            case 5:
                return "Very Good"
        }
        return
    }

    const ratingIcons = () => {
        switch(rating) {
            case 1:
                return <><StarIcon addClassName={'fill-amber-300 w-5 h-5'}/><StarIcon addClassName={'fill-gray-500 w-5 h-5'}/><StarIcon addClassName={'fill-gray-500 w-5 h-5'}/><StarIcon addClassName={'fill-gray-500 w-5 h-5'}/><StarIcon addClassName={'fill-gray-500 w-5 h-5'}/></>
            case 2:
                return <><StarIcon addClassName={'fill-amber-300 w-5 h-5'}/><StarIcon addClassName={'fill-amber-300 w-5 h-5'}/><StarIcon addClassName={'fill-gray-500 w-5 h-5'}/><StarIcon addClassName={'fill-gray-500 w-5 h-5'}/><StarIcon addClassName={'fill-gray-500 w-5 h-5'}/></>
            case 3:
                return <><StarIcon addClassName={'fill-amber-300 w-5 h-5'}/><StarIcon addClassName={'fill-amber-300 w-5 h-5'}/><StarIcon addClassName={'fill-amber-300 w-5 h-5'}/><StarIcon addClassName={'fill-gray-500 w-5 h-5'}/><StarIcon addClassName={'fill-gray-500 w-5 h-5'}/></>
            case 4:
                return <><StarIcon addClassName={'fill-amber-300 w-5 h-5'}/><StarIcon addClassName={'fill-amber-300 w-5 h-5'}/><StarIcon addClassName={'fill-amber-300 w-5 h-5'}/><StarIcon addClassName={'fill-amber-300 w-5 h-5'}/><StarIcon addClassName={'fill-gray-500 w-5 h-5'}/></>
            case 5:
                return <><StarIcon addClassName={'fill-amber-300 w-5 h-5'}/><StarIcon addClassName={'fill-amber-300 w-5 h-5'}/><StarIcon addClassName={'fill-amber-300 w-5 h-5'}/><StarIcon addClassName={'fill-amber-300 w-5 h-5'}/><StarIcon addClassName={'fill-amber-300 w-5 h-5'}/></>
        }
        return
    }

    return (
        <article className={"bg-white mr-20 p-8 rounded-lg drop-shadow-[0_4px_4px_rgba(0,0,0,0.05)]"}>
            <div className={"flex flex-row relative h-full"}>
                <div className={"flex flex-col justify-between"}>
                    <div className={"flex items-center flex-row"}>
                        <div className={"mr-5"}>
                            {profile}
                        </div>

                        <div className={"flex flex-col text-left"}>
                            <h2 className={"text-xl font-semibold"}>{fullname}</h2>
                            <h3 className={'text-gray-500'}>{reviewDate}</h3>
                        </div>
                    </div>
                    <p className={"text-left py-2 pr-24"}>{text}</p>
                    <div className={"flex flex-row"}>
                        {ratingIcons()}
                        <div className={"font-semibold text-gray-500"}>{ratingText()}</div>
                    </div>
                </div>
                <div className={'absolute -right-28 -top-4 drop-shadow-[0_4px_4px_rgba(0,0,0,0.05)]'}>
                    {product}
                </div>
            </div>
        </article>
    )
}
