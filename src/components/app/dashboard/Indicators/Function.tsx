import { ReactElement } from "react";
import { NavLink } from "react-router-dom";

const Function = ({ title, icon, to, colorStyle }: { title: string, icon: ReactElement, to: string, colorStyle: Record<string, string> }) => {
    return (
        <NavLink to={to} onClick={() => window.scrollTo(0, 0)} className={`hover:animate-jelly bg-gradient-to-br 
            dark:from-zinc-800 ${colorStyle.dark || 'dark:via-red-800'} via-50% dark:to-zinc-800  
            from-zinc-100 ${colorStyle.light || 'via-zinc-500/30'} via-50% to-zinc-100  
            flex flex-row align-middle text-center justify-center aspect-[16/7] gap-3 flex-grow h-[5rem] max-w-[15rem] bg-zinc-50 dark:bg-zinc-800 border-[.1rem] border-zinc-600 rounded-lg p-4`}>
            {icon}
            <span className="my-auto font-regular text-lg dark:text-zinc-200">{title}</span>
        </NavLink>
    )
}

export default Function;