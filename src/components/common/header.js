import Navigation from "@/components/common/navigation";
import Link from "next/link";
import Image from "next/image";
export default function Header({addClassName}) {
    return (
        <header className={`flex justify-between items-center ${addClassName}`}>
            <Link href={'/'}><Image width={160} height={90} src={'/logo.svg'} alt={"K&A Italialainen Ravintola"} /></Link>
            <Navigation></Navigation>
        </header>
    )
}
