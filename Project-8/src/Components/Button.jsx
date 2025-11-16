export default function Button({text, onClick, style}){

    return(
            <button className="px-15 py-5 bg-white rounded-lg font-semibold text-2xl" style={style} onClick={onClick}>
                {text}
            </button>
    )
}