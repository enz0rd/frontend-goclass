const MainIndicator = ({ title, number, colorStyle }: { title: string, number: number, colorStyle: Record<string, string> }) => {
    return (
        <div className={`bg-gradient-to-br 
            dark:from-zinc-800 ${colorStyle.dark || 'dark:via-red-800'} via-50% dark:to-zinc-800  
            from-zinc-100 from-zinc-100 ${colorStyle.light || 'via-zinc-500/30'} via-50% to-zinc-100 via-50% to-zinc-100  
            flex flex-col text-center justify-center aspect-square w-[13rem] bg-zinc-50 dark:bg-zinc-800 border-[.1rem] border-zinc-600 rounded-lg p-4`}>
            <span className={`text-[6rem] font-bold ${colorStyle}`}>{number}</span>
            <span className="text-sm dark:text-zinc-200">{title}</span>
        </div>
    )
}

export default MainIndicator;