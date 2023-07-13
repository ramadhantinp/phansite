import { useState } from "react"

export default function AlertBox () {
    const [getCloser, setCloser] = useState('invisible');

    const closeHandler = () => {
        setCloser('visible');
    }

    return (
        <div className={`bg-black text-white text-center
        border-white border-8
        p-4
        -skew-x-3
        translate-y-4
        w-2/3 relative mx-auto
        ${getCloser}`}
        >
            <span className="block sm:inline">Your vote is in! Thank you for voting.</span>
            <button onClick={closeHandler}
            className="btn-c bg-white border-none text-black py-1">CLOSE</button>
        </div>
    )
}