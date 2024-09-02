import { ReactElement } from "react";

const Function = ({ title, icon, to, colorStyle }: { title: string, icon: ReactElement, to: string, colorStyle: Record<string, string> }) => {
    return (
        <a href={to} className={`hover:animate-jelly bg-gradient-to-br 
            dark:from-zinc-800 ${colorStyle.dark || 'dark:via-red-800'} via-50% dark:to-zinc-800  
            from-zinc-100 from-zinc-100 ${colorStyle.light || 'via-zinc-500/30'} via-50% to-zinc-100 via-50% to-zinc-100  
            flex flex-row align-middle text-center justify-center aspect-[16/7] gap-3 w-[13rem] bg-zinc-50 dark:bg-zinc-800 border-[.1rem] border-zinc-600 rounded-lg p-4`}>
            {icon}
            <span className="my-auto font-regular text-lg dark:text-zinc-200">{title}</span>
        </a>
    )
}

export default Function;