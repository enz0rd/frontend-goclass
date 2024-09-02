import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import MainIndicator from "./Indicators/MainIndicator";

const IndicatorsGroup = () => {
    return (
        <div className="w-[100%] flex justify-center mx-auto align-middle">
            <ScrollArea className="p-4 overflow-x-auto whitespace-nowrap group dark:text-zinc-50">
                <div className="flex space-x-4">
                    <MainIndicator title="Atividades Pendentes" number={5} colorStyle={{ "light": "via-red-300/40", "dark": "dark:via-red-700/40" }} />
                    <MainIndicator title="Novas atividades" number={2} colorStyle={{ "light": "via-yellow-300/40", "dark": "dark:via-yellow-700/40" }} />
                    <MainIndicator title="Avaliações" number={1} colorStyle={{ "light": "via-green-300/40", "dark": "dark:via-green-700/40" }} />
                    <MainIndicator title="Mensagens" number={10} colorStyle={{ "light": "via-primary/40", "dark": "dark:via-primary/40" }} />
                </div>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>
        </div>
    )
}

export default IndicatorsGroup;
