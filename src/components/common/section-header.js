export default function SectionHeader({subHeader, mainHeader, color = 'secondary'}) {
    return (
        <>
            <div className={"text-center"}>
                <h3 className={"uppercase text-gray-500 font-semibold"}>{subHeader}</h3>
                <h2 className={`text-${color}-500 font-bold text-4xl italic`}>{mainHeader}</h2>
            </div>
        </>
    )
}
