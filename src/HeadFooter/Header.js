export default function Header () {
    const buttonstyle = "border-slate-50 bg-black rotate-0 skew-y-0 my-2"
    return (
        <header className="bg-[url('../public/assets/slicing-components/screntone-1.png')]
        text-neutral-50 bg-contain w-full h-70 bg-local bg-repeat-x">
            <div><img src="/assets/slicing-components/logo.png" alt="site logo"
            className="w-80 block mx-auto pt-4"/></div>
            <nav className="py-6 justify-between items-center navbar">
                <ul className="list-none items-center flex-1 justify-center sm:flex-row sm:flex flex-col text-center">
                    <li className={`${buttonstyle} btn-b`}><a href="#poll">Poll</a></li>
                    <li className={`${buttonstyle} btn-a`}><a href="#phantom-thieves">Who are the Phantom Thieves?</a></li>
                    <li className={`${buttonstyle} btn-b`}><a href="#comments">Comments</a></li>
                </ul>
            </nav>
        </header>
    )
}