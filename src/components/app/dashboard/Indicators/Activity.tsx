import { ReactElement } from "react";

const Activity = ({to, title, icon, time} : {to: string, title: string, icon: ReactElement, time: string}) => {
    return (
        <a href={to} className="hover:animate-jelly gap-3 bg-gradient-to-br dark:from-zinc-800 rounded-lg border border-zinc-700 dark:to-zinc-950 p-3 border-lg w-full flex justify-between mx-auto align-middle">
            <div className="w-[10%] flex align-middle justify-center">
                {icon}
            </div>
            <div className="flex flex-col w-[70%] lg:w-[80%] text-left">
                <h1>{title}</h1>
                <span className="text-sm text-muted-foreground">Toque para ver detalhes</span>
            </div>
            <span className="w-[15%] lg:w-[10%] text-right my-auto text-muted-foreground">{time}</span>
        </a>
    )
}

export default Activity;