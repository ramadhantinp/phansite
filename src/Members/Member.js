import React from "react";

function LeaderTag ({status, id}) {
    const leaderStyle = "-translate-y-1 bg-red-600 text-center btn-b text-slate-50 border-0 w-24 p-1";
    const memberStyle1 = "-translate-y-1 bg-black btn-a text-center text-slate-50 border-0 w-24 p-1";
    const memberStyle2 = "-translate-y-1 bg-black btn-b text-center text-slate-50 border-0 w-24 p-1";
    if (status === 1) {
        return <p id="leader-tag" className={leaderStyle}>LEADER</p>
    }
    else {
        if (id %2 === 0) {return <p className={memberStyle1}>MEMBER</p>}
        else {return <p className={memberStyle2}>MEMBER</p>}
    }
}

export default function Members ({team, style}) {
    return (
        <div className="
            grid gap-1
            grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-6
            text-sm
            lg:text-lg

            bg-slate-50
            
        ">
            {team.map((team) => (
                <div key={team.id} {...team} style={style}
                className="mx-auto mb-4 mt-2">
                    <img src={team.icon} alt={team.alt}
                    className="px-1"/>
                    <h5 className="
                        bg-slate-50
                        text-black
                        md:w-20
                        w-16
                        text-center
                        skew-x-3
                        rotate-2
                        border-black
                        border-y-2 border-x-4
                        translate-x-1 -translate-y-1
                        -mt-5 -mb-1
                    ">{team.codename}</h5>
                    <LeaderTag status={team.status} id={team.id}/>
                </div>
            ))}
        </div>
    )
}