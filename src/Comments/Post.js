export default function Post ({username, comment, date, id}) {
    const skewModifier = ({id}) => {
        if (id%3 === 0) {return "skew-x-1 translate-x-3";}
        else if (id%2 === 0) {return "-skew-x-3";}
        else {return "-translate-x-2"}
    }

    return (
        <div className={`bg-black border-4 border-slate-50 text-slate-50 p-4 my-4
        xl:w-1/3 md:w-1/2 w-full
        ${skewModifier({id})}`}>
            <p>{date} | @{username}</p>
            <hr></hr>
            <p>{comment}</p>
        </div>
    )
}