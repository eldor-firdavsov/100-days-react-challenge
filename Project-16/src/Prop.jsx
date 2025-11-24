export default function Prop({pfp,name,description, theme}){
    return(
        <section className="flex flex-col items-center justify-center rounded-2xl mt-40 gap-3 text-white w-100 h-100" style={{backgroundColor: theme}}>
            <p className="text-3xl font-semibold">{name}</p>
            <img className="w-50 h-50 rounded-full" src={pfp} alt="" />
            <p className="text-xl">{description}</p>
        </section>
    )
}