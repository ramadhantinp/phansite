import React, { useState } from "react";
import Poll from "./Poll";

export default function PollSection ({percentage, addVotes, subtractVotes}) {
    const [getDisable, setDisable] = useState(false);
    const voteYesHandler = () => {
        addVotes();
        alert("Your vote is in! Thank you for voting.");
        setDisable(true);
    }

    const voteNoHandler = () => {
        subtractVotes();
        alert("Your vote is in! Thank you for voting.");
        setDisable(true);

    }

    //TODO (kinda): ganti parameter disable no ke 0 kalo jumlah vote udah diganti jadi +1
    
    return (
        <>
            <div id="poll" className="
                    bg-[url('../public/assets/slicing-components/divider-black.png')]
                    bg-no-repeat
                    bg-cover bg-local
                    w-full
                    h-[150]
                    text-center
                    text-white
                    p-8
                    bg-red-600
                ">
                    <h2 className="md:text-7xl text-6xl">POLL</h2>
                    <p className=" text-lg">We will regularly put out a new qestion every month!</p></div>
            <section className="bg-black text-slate-50 p-8 text-center">
                <p className="text-red-600"><span className="text-xl">THIS MONTH'S QUESTION:</span> Do the Phantom Thieves <span className="text-slate-50">really exist</span>?</p>
                <Poll percentage={percentage}/>
                <button id="yes-button" disabled={getDisable}
                onClick={voteYesHandler} className="btn-b text-black bg-slate-50 border-0 translate-y-1 disabled:bg-gray-300">YES</button>
                <button id="no-button" disabled={getDisable}
                onClick={voteNoHandler} className="btn-a text-black bg-slate-50 border-0 disabled:bg-gray-300">NO</button>
            </section>
            <div className="bg-[url('../public/assets/slicing-components/divider-black-1.png')]
            bg-no-repeat
            bg-contain bg-local
            w-full
            h-[100px]"></div>
        </>
    )
}