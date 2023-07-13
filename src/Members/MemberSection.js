import React, { useState } from "react";
import team from './data/Members.json'
import Members from "./Member";

export default function MemberSection () {
    const [getStyle, setStyle] = useState({display:'none'});

    const showButtonHandler = () => {
        setStyle({display: getStyle.display === 'none' ? 'block' : 'none'})
        console.log(getStyle.display);
    }

    return (
        <section id="phantom-thieves" className="text-center mx-auto p-8 sm:w-2/3 w-full mb-20">
            <h2 className="md:text-7xl text-5xl">WHO ARE THE PHANTOM THIEVES?</h2>
            <p className="text-justify m-4 p-4 bg-black border-white border-8 -skew-x-1 text-white">First appeared on April 2016, the group Phantom Thieves, has been taking down infamous public figures for justice, dubbed as "stealing hearts". Their identity and methods are still unknown, but likely to be consisting of mainly young adults. Rumors said they may also consist children, adults, and even pets.</p>
            <p className="text-justify italic">*Please be aware that this is a fan website - the owners are unaffiliated with the Phantom Thieves in any way.</p>
            <button className="btn-b my-4 border-0 bg-black text-slate-50" onClick={showButtonHandler}>Known Member List</button>
            <Members team={team} style={getStyle}/>
        </section>
    )
}