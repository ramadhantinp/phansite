import React from "react";
// import './poll.css'

export default function Poll ({percentage}) {
    const population = 13988129;
    const votes = percentage/population;

    return (
        <>
        <div className="text-yellow-300 underline">
            <p className="text-xl">YES <span className="text-5xl">{(votes*100).toFixed(2)}%</span></p>
        </div>
        <div>
            <div class="mx-auto mb-5 mt-2 h-10 -skew-x-12 border-8 border-slate-50 bg-black p-1 sm:w-[523px]">
                <div class="relative h-full w-full">
                    <div class="absolute left-0 top-0 h-full w-full bg-white" style={{width:`calc(90% * ${votes})`}}></div>
                </div>
            </div>
        </div>
        </>
    )
}
